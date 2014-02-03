---
layout: es_post
title: Como utilizar el Cache en Drupal
created: 1331065997
categories: Drupal
tags: ['cache', 'Drupal', 'performance', 'rendimiento']
language: es
permalink: es/2012/03/06/como-utilizar-cache-drupal-1486/
---
## Como funciona?
Lo primero que debemos entender es como funciona el cache de Drupal.

El cache de Drupal por defecto esta basado en la base de datos, en la tabla cache (el cache por defecto) y las tablas `cache_XXX` que son caches mas especificos.  
El cache se suele basar en un esquema llave/valor/validez en el que se utiliza un identificador y se guardan los valores cacheados quedando asi en la base de datos por el tiempo que se indique o indefinidamente (hasta que se limpie ese cache).  

## Como se usa?
Hay 3 operaciones basicas con el cache: __set, get, clear__.  
El uso normal consta de revisar si existe el cache antes de entrar a la lógica, si este existe lo usamos y nos saltamos la lógica, si no existe o es invalido ejecutamos la lógica y posteriormente ingresamos el cache.  
Además, si cabe la posibilidad de que este contenido cambie por alguna ejecución de otra lógica en la que tenemos control, es un buen lugar para colocar un clear de este cache.  

Basandonos en esto, un ejemplo de uso seria el siguiente:

{% highlight php %}
<?php
function my_logica($var1, $var2) {
  // Defina el ID que debe usarse en el cache
  $cache_id = 'my_cache:' . $var1;
  // 'cache' es el contenedor por defecto (tabla)
  if ($cached = cache_get($cache_id, 'cache')) { 
    return $cached->data;
  }
  $to_return; // Arreglo, string, o lo que sea que retornamos
  // Logica va a aqui, queries, ajax, procesamiento, etc
  cache_set($cache_id, $to_return, 'cache', time() + (60 * 60 * 24));
  return $to_return;
}
?>
{% endhighlight %}

## Definicion del cache ID
El ID del cache es un tema importante para que aplique bajo el criterio adecuado.

- __Global:__ un mismo cache ID siempre, ej: `'mi_id'`
- __Por usuario:__ utilizar el ID del usuario, ej: `$user->uid . ':mi_id'`
- __Por rol:__ utilizar el rol como parte del ID, ej: `$role . ':mi_id'`
- __Por Node Type:__ utilizar el tipo de nodo en el ID, ej: `$node->type . ':mi_id'`
- __Por Contenido:__ en caso de un contenido o un texto grande se puede usar un hash, ej: `md5($text) . ':mi_id'`

Se puede utilizar como base el ID de cualquier entidad que ocupemos, o tipo o la combinación de varios factores, de manera que tengamos un ID que nos identifique correctamente cuando usar el cache, ya sea para tener caches por usuario, rol, tipo de contenido, por contenido, por termino o por lo que sea necesario.  
El cache puede ser utilizado en bloques, en paginas completas, en segmentos de codigo o en lo que consideremos importante evitar la ejecucion tan frecuente.  

## Como cambiar el tipo de contenedor del cache?
Existen modulos para extender el cache y utilizar otro metodos, como file cache, memcached, APC o el metodo que queramos, para esto existen modulos especificos como [APC](http://drupal.org/project/apc), [Fast Cache](http://drupal.org/project/fastpath_fscache), [Memcache](http://drupal.org/project/memcache), [Memcached](http://drupal.org/project/memcached), [XCache](http://drupal.org/project/xcache) o un modulo mas generico que permite elegir diferentes caches para diferentes contenedores el cual es [CacheRouter](http://drupal.org/project/cacherouter), este modulo permite que elijas un cache diferente para paginas, views, general, bloques, etc.    
A esto  también se le unen caches de páginas completas como el [Boost](http://drupal.org/project/boost) y el [AuthCache](http://drupal.org/project/authcache).  
Además de esto, puede haber casos en los que quieras agregar un cache a un bloque o codigo del que no tienes control en cuyo caso hay una tecnica para sobre escribir una pieza de codigo y reemplazarla de manera eficiente, escribiré de esto después.  
Espero esto sea de utilidad.  

