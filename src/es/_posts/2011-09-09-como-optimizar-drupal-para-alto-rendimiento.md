---
layout: es_post
title: ¿Como optimizar Drupal para alto rendimiento?
categories: Drupal
tags: ['optimización', 'Drupal', 'varnish', 'rendimiento']
language: es
created: 2011-09-09 09:52:32
permalink: es/book/como-optimizar-drupal-para-alto-rendimiento/
series: [
  ['2. Drupal y los recursos del servidor web', '/es/book/drupal-y-recursos-del-servidor-web/'],
  ['3. Pressflow y Drupal 7, Distribuciones de rendimiento', '/es/book/pressflow-y-drupal-7-distribuciones-rendimiento/'],
  ['4. El cache de Drupal', '/es/book/cache-drupal/'],
  ['5. Drupal y Content Delivery Network (CDN)', '/es/book/drupal-y-content-delivery-network-cdn/'],
  ['6. Varnish, Reverse Proxy y ESI', '/es/book/varnish-reverse-proxy-y-esi'],
]
---
A grandes razgos hay varias formas de optimizar Drupal y lo recomendable es utilizar varias de estas para un resultado óptimo, pero no solo se trata de optimizar por optimizar, sino encontrar cuales optimizaciones son las que lograrian mayor beneficio para cada caso, por eso mi intencion tambien es discutir en cuales situaciones se debe utilizar cada metodo.

En estos días estaré dando una charla sobre este tema, pero también quiero escribir la guía aquí en modo de libro.

Primero, la razón de hacer optimizaciones en Drupal se debe a algo muy simple, todo el poder de Drupal no viene de gratis, el que muchas cosas esten listas para ser utilizadas en core o usando modulos, y todo el esquema modular de Drupal tiene un costo en rendimiento, no es lo mismo hacer una pagina sencilla que haga poco y escribirla en pocas lineas de codigo, haciendo solo uno o 2 queries a la base de datos que tener todo un sistema complejo que debe cargar modulos, lenguajes, permisos, etc, donde para el despliegue de cualquier pagina sencilla implica abrir muchos archivos de codigo (decenas o mas bien cientos) y hacer decenas de queries a la base de datos.

Dentro de las variables a analizar para esto hay que considerar varios factores:
- La version de Drupal (dependiendo de la version (5, 6 o 7) hay limitaciones en cuanto a lo que se puede hacer o pasos extra que se deben tomar para hacer algo que en otra version es mas sencillo.
- Los recursos del servidor, hay tecnicas que aunque dan gran resultados pueden requerir mayores recursos del servidor y si este no tiene los recursos necesarios la tecnica mas bien podria bajar el rendimiento.
- Cual es el uso publico del sitio y el uso de usuarios logueados en el sitio
- A que esta enfocado el uso del sitio y las caracteristicas que se le agregan o activan al sitio
- La cantidad de hits que recibe el sitio

Para optimizar hay varias formas de hacerlo y cada una con diferentes tecnicas para lograrlo.
- Reducir la cantidad de requests estaticos al servidor (reverse proxy, CDN, cache, etc)
- Reducir la cantidad de request (parciales o totales) dinamicos al servidor (precompiladores y cacheadores de codigo, caches totales o parciales, ajax, etc)
- Optimizar el servidor web (configuracion, benchmark)
- Optimizar el servidor de base de datos (configuracion, benchmark)
- Optimizar el codigo (Aqui hay varias tecnicas mas avanzadas, como creacion de modulos custom para alterar algunas funcionalidades o reemplazarlas y en casos extremos parches)

