---
layout: es_post
title: Como definir el tamaño de un indice en el Database Schema de Drupal
created: 1275698511
categories: Drupal
tags: ['tutorial', 'Drupal', 'database schema', 'eficiencia']
language: es
permalink: es/2010/06/04/como-definir-tama-o-un-indice-database-schema-drupal-1472
translation: 2010/06/04/how-set-index-length-drupal-database-schema-1471
---
<p>Considero que se debe ser muy cuidadoso y detallado a la hora de definir las bases de datos en un proyecto, es ahi uno de los puntos que garantizaran el &eacute;xito o el fracaso en t&eacute;rminos de eficiencia.</p>

<p>Drupal 6 y posterior tiene una conveniente manera de definir las tablas sin usar la sintaxis de un servidor de base de datos especifico, pero esto a veces viene con un sacrificio en la flexibilidad de lo que se puede hacer, como por ejemplo definir el tama&ntilde;o de un indice de texto, as&iacute; que a continuaci&oacute;n explico como lograr esto.</p>
<!--break-->
<p>En algunos casos usted podría tener un campo de texto (char) en su tabla y quiere indexar sobre ese campo pero no es necesario usar todo el largo del texto puesto que con solo los primeros caracteres se obtiene suficiente eficiencia sin sacrificar el tamaño del indice haciendolo muy grande.</p>
<p>Para lograr esto en MySql se haría algo como lo siguiente:</p>
{% highlight sql %}
CREATE TABLE my_table (
  an_id int(10) unsigned NOT NULL AUTO_INCREMENT,
  other_id int(10) unsigned NOT NULL,
  name varchar(30) NOT NULL,
  PRIMARY KEY (an_id),
  UNIQUE KEY unique_key_name (an_id, name),
  KEY limited_length_text_index (name(10)) -- Esto limita el tamaño del indice a solo los primero 10 caracteres
)
{% endhighlight %}
<p>&nbsp;</p>
<p>Pero, para indicarle a Drupal a travez del esquema de base de datos (database schema) hay que hacer un pequeño truco de la siguiente manera:</p>
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
    /* Esto limita el tamaño del indice a solo los primero 10 caracteres */
    'limited_length_text_index' => array('fields' => array('name', 10)),
  ),
  'unique keys' => array(
    'unique_key_name' => array('an_id', 'name'),
  ),
  'primary key' => array('an_id'),
);
?>
{% endhighlight %}
<p>Espero que este pequeño tutorial les pueda ayudar a diseñar bases de datos eficientes en sus proyectos o modulos.</p>
