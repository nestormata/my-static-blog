---
layout: es_post
title: El cache de Drupal
categories: Drupal
tags: ['optimizacióni', 'Drupal', 'rendimiento', 'cache']
language: es
created: 2011-09-22 08:28:09
permalink: es/book/cache-drupal/
series: [
  ['1. ¿Como optimizar Drupal para alto rendimiento?', '/es/book/como-optimizar-drupal-para-alto-rendimiento/'],
  ['2. Drupal y los recursos del servidor web', '/es/book/drupal-y-recursos-del-servidor-web/'],
  ['3. Pressflow y Drupal 7, Distribuciones de rendimiento', '/es/book/pressflow-y-drupal-7-distribuciones-rendimiento/'],
  ['5. Drupal y Content Delivery Network (CDN)', '/es/book/drupal-y-content-delivery-network-cdn/'],
  ['6. Varnish, Reverse Proxy y ESI', '/es/book/varnish-reverse-proxy-y-esi/'],
]
---
Drupal tiene un cache que por defecto se guarda en la base de datos.  
Este cache funciona en modo de llave/valor y en el se guarda aquello que el core o cada modulo considera que debe ser cacheado en vez de evaluarse en cada llamada.

5ambién hay caches mas específicos como el de los bloques, forms, menu, páginas, rutas, etc; los bloques se cachean a diferentes niveles dependiendo de su uso, se pueden cachear por usuario, por role, por página, o global.

## Para que cachear?
Si por ejemplo tenemos un bloque que muestra una información de los puntos del usuario y esta información la obtenemos haciendo un calculo pesado o haciendo varios otros requests es mas económico guardar el calculo por un tiempo definido o por sesión.  
Otro ejemplo puede ser el tipo de cambio, este no se ocupa buscar cada vez, se puede cachear por un tiempo definido.  

Al eliminar algunos requests o procesamiento extra por cachear contenido que no se require actualizar tan seguido podemos reducir drasticamente la carga del servidor y el tiempo, aumentando así el rendimiento.

