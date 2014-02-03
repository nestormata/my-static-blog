---
layout: post
title: How to set the index length in the Drupal Database Schema
created: 1275697182
categories: Drupal
tags: ['tutorial', 'Drupal', 'database schema', 'eficiencia']
language: en
permalink: 2010/06/04/how-set-index-length-drupal-database-schema-1471/
translation: es/2010/06/04/como-definir-tama-o-un-indice-database-schema-drupal-1472/
---
I believe that you must be really picky when you define a database in a project, that is one of the spots where you could be taking your project to success or failure in terms of performance.

Drupal 6 and up has a very convenience way define your tables without using syntax for a specific database server, but, this sometimes could be a little limited when trying to set specific details like the index length, so, I'll explain to you how to achieve this specific feature.   
There are cases that you may for example have a char field in your database and you want to have an index on that field, but you don't need an index of all the text, you could improve the searches by adding only the first part of this text in the index reducing the size of this index.

To achieve that in MySql you would do something like this:

{% highlight sql %}
CREATE TABLE my_table (
  an_id int(10) unsigned NOT NULL AUTO_INCREMENT,
  other_id int(10) unsigned NOT NULL,
  name varchar(30) NOT NULL,
  PRIMARY KEY (an_id),
  UNIQUE KEY unique_key_name (an_id, name),
  KEY limited_length_text_index (name(10)) -- This would limit to index only first 10 chars
)
{% endhighlight %}

But, to tell Drupal's database schema to do that you need to be a little tricky, and you do something like this:

{% highlight php %}
<?php
$schema['my_table'] = array(
  'fields' => array(
    'an_id' => array(
      'type' => 'serial',
      'unsigned' => TRUE,
      'not null' => TRUE,
    ), 
    'other_id' => array(
      'type' => 'int', 
      'unsigned' => TRUE,
      'not null' => TRUE,
    ),                                                                                                                                                        
    'name' => array(
      'type' => 'char',
      'not null' => TRUE,
      'length' => 30,
    ),
  ),
  'indexes' => array(
    /* This would limit to index only first 10 chars */
    'limited_length_text_index' => array(array('name', 10)),
  ),
  'unique keys' => array(
    'unique_key_name' => array('an_id', 'name'),
  ),
  'primary key' => array('an_id'),
);
?>
{% endhighlight %}

I hope this little tip help you to create better databases for your projects or modules.

