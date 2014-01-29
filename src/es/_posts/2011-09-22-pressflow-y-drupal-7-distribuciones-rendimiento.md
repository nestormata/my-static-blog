---
layout: es_post
title: Pressflow y Drupal 7, Distribuciones de rendimiento
categories: Drupal
tags: ['optimización', 'Drupal', 'rendimiento']
language: es
created: 2011-09-22 08:04:04
permalink: es/book/pressflow-y-drupal-7-distribuciones-rendimiento/
series: [
  ['1. ¿Como optimizar Drupal para alto rendimiento?', '/es/book/como-optimizar-drupal-para-alto-rendimiento/'],
  ['2. Drupal y los recursos del servidor web', '/es/book/drupal-y-recursos-del-servidor-web/'],
  ['4. El cache de Drupal', '/es/book/cache-drupal/'],
  ['5. Drupal y Content Delivery Network (CDN)', '/es/book/drupal-y-content-delivery-network-cdn/'],
  ['6. Varnish, Reverse Proxy y ESI', '/es/book/varnish-reverse-proxy-y-esi'],
]
---
Siempre hay una desición en cuanto a cuanto soporte dar hacia versiones anteriores o a los requisitos de un sistema o plataforma.  

En el caso de Drupal 6 se había decidido mantener cierta compatibilidad en cuanto a PHP y la base de datos, el mantener esta compatibilidad hace que no se pudiera utilizar todo el potencial de PHP 5 o de la base de datos y además que habían funciones que en vez de utilizar la función nativa esta se implementaba en codigo wrapper en Drupal.   
De aquí se deriva que en _Drupal 7_ se suba la barda y se decida un poco menos por el soporte de versiones y __aumentar así el rendimiento de Drupal__ [requerimientos](http://drupal.org/requirements).   
Pero mientras _Drupal 7_ aún estaba bajo desarrollo una empresa (FourKitchens) decide crear una distribución de Drupal 6 de alto rendimiento, haciendo back porting de algunas funcionalidad de Drupal 7, quitando soporte de algunas versiones de las tecnologias y haciendo algunas mejoras extra y llaman a esta distribución [Pressflow](http://fourkitchens.com/pressflow-makes-drupal-scale), la cual se crea siempre una nueva versión para cada versión que se crea de _Drupal 6_.   

Entre las mejoras que se hacen estan:
- Soporte para replicación de datos en MySql
- Soporte de reverse proxys Varnish y Squid
- Optimización para MySql y quitando soporte de otras bases de datos
- Optimización para PHP 5 y quitando soporte de PHP 4

__El simple hecho de utilizar una distribución optimizada aumenta el rendimiento del sistema.__
