---
layout: es_post
title: Como pasar argumentos a un view en bloque
created: 1330025806
categories: Drupal
tags: ['Drupal', 'bloque', 'view']
language: es
permalink: es/2012/02/23/como-pasar-argumentos-un-view-bloque-1484/
---
Necesitaba poner varios bloques en una pagina siendo este bloque un view y la unica diferencia era el termino de taxonomia.

El sitio no usa panels y no queria utilizarlo solo para esto, asi que decidi crear un bloque que utilice un argumento para el termino, pero quedaba el detalle de como pasar a un bloque un argumento sin usar paneles.  
Este metodo que muestro aqui tambien sirve para incrustar un view en cualquier parte realmente.  

Lo que hice fue lo siguiente:
1. Agregar un custom bloque en los bloques de Drupal
1. Elegir formato de input PHP
1. Utilizar la funcion views_embed_view en el codigo PHP

Un ejemplo del codigo es el siguiente:

{% highlight php %}
<?php
$viewName = 'el_nombre_maquina_del_view';
$display_id = 'el_nombre_maquina_del_display'; // El bloque
$arg = 'argumento'; // el argumento puede ser un array, ejemplo: array('arg1', 'arg2', 3, arg(0))
print views_embed_view($viewName, $display_id, $arg)
?>
{% endhighlight %}

De esta manera el manejo de ese view se vuelve mucho mas escalable y sencillo que intentar copiar el display del view muchas veces, si luego hubiera que hacer cambios se volveria inmanejable y propenso a errores.  
Espero que les sirva el tip.
