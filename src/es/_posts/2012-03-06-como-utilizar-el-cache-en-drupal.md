---
layout: es_post
title: Como utilizar el Cache en Drupal
created: 1331065997
categories: Drupal
tags: ['cache', 'Drupal', 'performance', 'rendimiento']
language: es
permalink: es/2012/03/06/como-utilizar-cache-drupal-1486
---
<h2>Como funciona?</h2>
Lo primero que debemos entender es como funciona el cache de Drupal.

El cache de Drupal por defecto esta basado en la base de datos, en la tabla cache (el cache por defecto) y las tablas cache_XXX que son caches mas especificos.
El cache se suele basar en un esquema llave/valor/validez en el que se utiliza un identificador y se guardan los valores cacheados quedando asi en la base de datos por el tiempo que se indique o indefinidamente (hasta que se limpie ese cache).
<h2>Como se usa?</h2>
Hay 3 operaciones basicas con el cache: set, get, clear.
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
<h2>Definicion del cache ID</h2>
El ID del cache es un tema importante para que aplique bajo el criterio adecuado.
<ul>
<li><strong>Global:</strong> un mismo cache ID siempre, ej: 'mi_id'</li>
<li><strong>Por usuario:</strong> utilizar el ID del usuario, ej: $user->uid . ':mi_id'</li>
<li><strong>Por rol:</strong> utilizar el rol como parte del ID, ej: $role . ':mi_id'</li>
<li><strong>Por Node Type:</strong> utilizar el tipo de nodo en el ID, ej: $node->type . ':mi_id'</li>
<li><strong>Por Contenido:</strong> en caso de un contenido o un texto grande se puede usar un hash, ej: md5($text) . ':mi_id' </li>
</ul>
Se puede utilizar como base el ID de cualquier entidad que ocupemos, o tipo o la combinación de varios factores, de manera que tengamos un ID que nos identifique correctamente cuando usar el cache, ya sea para tener caches por usuario, rol, tipo de contenido, por contenido, por termino o por lo que sea necesario.
El cache puede ser utilizado en bloques, en paginas completas, en segmentos de codigo o en lo que consideremos importante evitar la ejecucion tan frecuente.
<h2>Como cambiar el tipo de contenedor del cache?</h2>
Existen modulos para extender el cache y utilizar otro metodos, como file cache, memcached, APC o el metodo que queramos, para esto existen modulos especificos como http://drupal.org/project/apc, http://drupal.org/project/fastpath_fscache, http://drupal.org/project/memcache, http://drupal.org/project/memcached, http://drupal.org/project/xcache o un modulo mas generico que permite elegir diferentes caches para diferentes contenedores el cual es http://drupal.org/project/cacherouter, este modulo permite que elijas un cache diferente para paginas, views, general, bloques, etc.
A esto  también se le unen caches de páginas completas como el http://drupal.org/project/boost y el http://drupal.org/project/authcache.
Además de esto, puede haber casos en los que quieras agregar un cache a un bloque o codigo del que no tienes control en cuyo caso hay una tecnica para sobre escribir una pieza de codigo y reemplazarla de manera eficiente, escribiré de esto después.
Espero esto sea de utilidad.
