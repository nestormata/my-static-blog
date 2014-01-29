---
layout: es_post
title: Drupal y los recursos del servidor web
categories: Drupal
tags: ['optimización', 'Drupal', 'rendimiento']
language: es
created: 2011-09-09 10:05:07
permalink: es/book/drupal-y-recursos-del-servidor-web/
series: [
  ['1. ¿Como optimizar Drupal para alto rendimiento?', '/es/book/como-optimizar-drupal-para-alto-rendimiento/'],
  ['3. Pressflow y Drupal 7, Distribuciones de rendimiento', '/es/book/pressflow-y-drupal-7-distribuciones-rendimiento/'],
  ['4. El cache de Drupal', '/es/book/cache-drupal/'],
  ['5. Drupal y Content Delivery Network (CDN)', '/es/book/drupal-y-content-delivery-network-cdn/'],
  ['6. Varnish, Reverse Proxy y ESI', '/es/book/varnish-reverse-proxy-y-esi'],
]
---
El servidor tiene recursos limitados y por tanto una cantidad limitada de solicitudes que puede atender simultáneamente.

## Recursos del servidor
El servidor web puede manejar una cantidad limitada de request simultaneos, ya sean dinámicos o estáticos. En el caso de Drupal un request dinámico es bastante costoso, un solo request necesita abrir muchos archivos de codigo, templates, crear muchas variables, abrir conexiones a base de datos y traer datos de las bases y mantener algunos en memoria u otros procesarlos, podriamos hablar facilmente de unos 30 megas de memoria en un request y bastante procesamiento.  
A diferencia de los request estaticos en los cuales se suele solamente abrir un archivo y redireccionar estos datos al output, lo cual no se compara en cuanto a nivel de procesamiento y memoria, pero el detalles es que una instancia que maneja request no se suele crear y destruir con cada request porque esto tambien es costoso, por lo que se suelen reutilizar (es parte de la configuracion del server), esto hace que el mismo proceso que atiende un request dinamico sea el mismo que atiende un request estatico, por lo que en un servidor tenemos un limite fijo de procesos que podemos atender simultaneamente.

## Requests estáticos y dinámicos
Ahora, porque debe importarnos los request estaticos? Para empezar, una pagina comunmente se compone de 1 request dinamico que entrega el HTML y unos 20-80 requests estaticos (css, js, imagenes).  
Si lo vemos desde esa perspectiva, el servidor mantiene ocupados bastantes recursos en responder requests estaticos que no cambian usualmente o de usuario en usuario.

## Secciones de los requests dinamicos
En algunas tecnologias se usa el termino Hot Spot (o punto caliente) para definir un segmento que tendria mucho impacto en ser mejorado, ya sea porque se ejecuta muy frecuentemente o porque es muy pesado.  
En Drupal hay secciones en las paginas que son mas pesados que otros, y a veces estos no cambian en un lapso de tiempo o en una session.  
Tambien hay paginas en las que lo unico que cambia de usuario a usuario es una pequeña seccion.  
Si tomamos esto en cuenta nos podriamos ver beneficiados con ser selectivos a la hora de hacer cacheo, ya sea cacheando secciones especificas o cacheando todo menos una seccion.

## Anonimos y Autenticados
En cuanto a las posibilidades de cacheo hay una gran diferencia entre usuarios anonimos y autenticados.  
En el caso de usuarios autenticados, es normal que parte de la informacion desplegada cambie para cada usuario, desde cosas tan sencillas como el nombre del usuario en alguna parte de la pagina hasta el contenido completo y el tema.  
Pero, en cuanto a usuarios anonimos es otra historia, los usuarios anonimos no se pueden distinguir (usualmente, aunque si podemos saber su geo localizacion, browser, OS, etc, pero eso es otra historia), por lo que usualmente se despliega el mismo contenido para todos los usuarios anonimos.

