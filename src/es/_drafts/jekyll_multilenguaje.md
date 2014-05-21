---
layout: es_post
title: ¿Como usar el Cache de Drupal en los módulos?
categories: Drupal
tags: ['cache', 'rendimiento', 'drupal 6', 'drupal 7']
translation: drupal/2014/02/18/how-cache-data-drupal/
language: es
---
Hoy les voy a explicar una de las formas para poder tener contenido en
multiples lenguajes en Jekill.

hay varias cosas a tener en cuenta.

Por un lado, vamos a tener contenido traducido, luego debemos manejar
los lenguajes en los templates, menues y blocks.

Para simplificar un poco las cosas y reutilizar lo mas posible vamos a
usar YAML para definir el lenguaje en los posts y en las paginas y asi
saber el lenguaje activo.

Ademas de la definicion del lenguaje vamos a crear un directorio para
casa lenguaje que vayamos a soportar.

Debe quedar claro que esta no es la unica forma de manejar un sitio
multilenguje con Jekill, es solo una forma sencilla y ordenada de
hacerlo.

Necesitamos elegir primero cual sera nuestro lenguaje por defecto, en
este caso vamos a definir que sera el idioma ingles y vamos a soportar 2
lenguajes adicionales: español e italiano.

Al definir el lenguaje por defecto lo que quiere decir es que la base
del sitio sera ingles y todo lo que no este dentro de los subdirectorios
de un lenguaje va a estar en ingles.

Vamos a crear la siguiente estructura de directorios:

/_posts
/es
/es/_posts
/it
/it/_posts
