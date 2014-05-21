---
layout: post
title: How to use Drupal Cache in module programming?
categories: Drupal
tags: ['cache', 'performance', 'drupal 6', 'drupal 7']
translation: es/2014/02/17/como-hacer-cache-datos-drupal/
language: en
---
Reduce the number of requests to make or the times a calculation is made
ia way to improve the performance of a feature and is necesary.  
{{ '/images/drupal-fast.png' | img_tag: 'article-main-image' }}

## Different ways to cache
We are going to talk about two different cache techniques that can be
used in __Drupal__, first the use of __static__ data and then the
__Drupal Cache__.

## Scopes
In most web platforms there are different scopes for variables and data
beyond the variable and class scopes.
There are normally 4 different scopes: __Request__, __Session__,
__Application__ and __Server__.

### Request Scope
The request scope variables are the ones that remain since a client
request was issued until the request ends.  
This is the normal level we have in PHP when we use static variables,
patterns like Singleton and any other attempt by code to keep a data
alive in memory.  

### Session variables
In PHP you can save data on the user's session variable and these data
are only for that user in that session and they will remain alive during
the complete time of that session.  
This is very handy to keep user information that may be required to keep
continuty to the user's experience in the site.

### Server variables
PHP is not able to keep data at server level by default like other
platforms can, but that doesn't means it can't be achieved.  
In PHP you can emulate server variables saving data in the database
(that works only for that server), saving the data in files or using
memory dictionaries like Redit, APC, Memcache or alike (if they are
restricted to that server only).  
The server variables are identified because they only belong to the
server that is running on, not necesary exclusive of the application,
for which it could be used to share data between applications on the
same server.  
The data use to be volatil by definition and therefore is lost when the
server is restarted.  

### Application variables
These are very similar to server variables and they are not supported by
PHP by default either, but they can be implemented in the same way that
server variables are.  
The conceptual difference of these variables is that they are not shared
between applications, but on the other side they are shared between
servers that are running the same application.  

## Why do I need to make cache of data?
Each time we do a data request or some data calculations that require
resources.  
The requests to a database require memory, CPU and in most cases disk
operations as well.  
The processing of files or complex calculus also could have a big weight
in performance.  
This may not be a big issue once, but when we are serving a site with
high traffic this could impact the server's performance and the response
time.  
Reducing the number of requests and/or calculus that are made we
multiply the improvement in performance and response time.  
From there we get that if we coiuld reduce the amout of code files or
templates to 10% on 90% of the requests we could see a drastically
improvement of the site performance, or in it's defect, not doing so
would mean having the site slow or not able to server the amount of
requests of a decent trafic.  
Of course, everything has a cost, keeping more data on cache would
usually means that we need more memory to keep them available, which
could be limited by the server's RAM that we have.  
For this reason we must have careful and concience of the resources or
we could start having a problem of availablebily of cache, forcing the
server to use swap memory/virtual memory on disk, making the server go
slower and heavier.  

## Static data
Now that we know the different levels for the variables let's see static
data.  
Using the functionality _"static"_ in PHP we can keep data in a
persistent way during the code execution (request variables), allowing
us to save on requests or calculus that are required several times
during the code execution of the request.  
In Drupal 7 you can use the function `drupal_static` to keep those data.
The function `drupal_static` receives the `name` or key of the data, the
`default value` and an indication if is must `clean` the existing data.  
In that sense this function can be seeing like a similar functionality
of the set Drupal variable\_get/set set of functions.  
### Use of static data exclusive for a function, in Drupal 7:
{% highlight php %}
<?php
function my_funcion() {
  // The function name it is used as the key
  $data_list = &drupal_static(__FUNCTION__);

  // If the data has not being requested/calculated yet we do it now
  if (!isset($data_list) {
    // Obtain the data from the database and make calculations
  }
  // The second time that this function is called the data will be alredy define and they will not be requested again

  // Use $data_list
}
?>
{% endhighlight %}

### Sharing static data between functions in Drupal 7:
{% highlight php %}
<?php
function one_funcion() {
  $data_list = &drupal_static("shared data");
  // Use $data_list and modify it in the variable
}

function another_funcion() {
  $data_list = &drupal_static("shared data");
  // Use $data_list and modify it in the variable
}
?>
{% endhighlight %}

### Use of static data exclusive for a function, in Drupal 6:
{% highlight php %}
<?php
function my_funcion() {
  static $data_list;

  // If the data has not being defined yet then we defined
  if (!isset($data_list) {
    // Obtain and calculate data
  }
  // The second time that the function is called the data will be defined and no need to get them or calculate them again

  // Use the data form $data_list and save modifications to the variable
}
?>
{% endhighlight %}

### Sharing static data between functions in Drupal 6:
In Drupal 6 we need to do some adjustments because the static function
only applies to the function (or class) where is defined and can't be
shared.  
To achieve this we have 2 options, use a global variable or create
another function as static container from which we obtain the reference
to the static variable.  
{% highlight php %}
<?php
function one_funcion() {
  global $data_list
  // Use $data_list and modify it in the variable
}

function another_funcion() {
  global $data_list
  // Use $data_list and modify it in the variable
}
?>
{% endhighlight %}

## Drupal's Cache
Drupal has a series of functions to use the generic cache system that is
implemented.  
By default Drupal's cache is implemented in the database, but this can
be modified so that it uses another implementation like APC, Memcache,
Redit, file system, etc.  
In a future article I'll explain how to configure different type of
cache in Drupal.  
The advantage of Drupal cache is that the code is agnostic of the
implementation of the cache, when you program the code you don't need to
know which kind of cache are you using.  
If we need to do a series of heavy calculations over some data and these
data will stay constant in the site for certain time, we can do
something like the following example to avoid calculating it on every
request:  
{% highlight php %}
<?php
function calculate_heavy_data() {
  $data_calculated = drupal_static(__FUNCTION__); // Drupal 7 version
  //static $data_calculated; // Drupal 6 version

  if (!isset($data_calculated)) {
    if ($cache = cache_get("heavy_data")) {
      $data_calculated = $cache->data;
    } else {
      // Do all the necesary calculations of the data and place them
again in $data_calculated
      cache_set("heavy_data", $data_calculated, "cache");
    }
  }
  return $data_calculated;
}
?>
{% endhighlight %}
This way the data will not be calculated on each request nor serveral
times on one request.

The use of cache is recommended, but without abuse and having in mind
estimations of how this can impact the memory and improvement on
performance, but this could be the difference between a heavy and slow
site or a fast and fully available site.
