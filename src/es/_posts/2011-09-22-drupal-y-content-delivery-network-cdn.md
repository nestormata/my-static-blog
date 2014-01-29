---
layout: es_post
title: Drupal y Content Delivery Network (CDN)
categories: Drupal
tags: ['cdn', 'optimización', 'Drupal', 'rendimiento']
language: es
created: 2011-09-22 08:48:52
permalink: es/book/drupal-y-content-delivery-network-cdn/
series: [
  ['1. ¿Como optimizar Drupal para alto rendimiento?', '/es/book/como-optimizar-drupal-para-alto-rendimiento/'],
  ['2. Drupal y los recursos del servidor web', '/es/book/drupal-y-recursos-del-servidor-web/'],
  ['3. Pressflow y Drupal 7, Distribuciones de rendimiento', '/es/book/pressflow-y-drupal-7-distribuciones-rendimiento/'],
  ['4. El cache de Drupal', '/es/book/cache-drupal/'],
  ['6. Varnish, Reverse Proxy y ESI', '/es/book/varnish-reverse-proxy-y-esi'],
]
---
## Drupal y CDN
Dentro de un esquema parecido en cuanto al tipo de resultados esta el usar un CDN (Content Delivery Network) que consiste en colocar los archivos estaticos en un servidor o servicio que se dedica especificamente a proveer archivos y relegar al servidor web de estos requests, liberando probablemente más de un 80% de los requests que recibe el servidor web.

Este es un árticulo que escribí en el 2009 sobre CDN: [Tutorial de Content Delivery Network]({{ site.url }}/es/2009/12/03/tutorial-content-delivery-network-cdn-1469/)

## CDN y localización
Una ventaja que ofrecen algunos proveedores de CDN es también la posibilidad de tomar los archivos estaticos y replicarlos en diferentes servidores al rededor del mundo de manera que cuando un usuario los solicita el servicio busca el servidor más cercano y le brinda el archivo desde ahí disminuyendo el tiempo de entrega del archivo.

## Diferentes formas de lograr CDN
Podemos hablar de diferentes formas de proveer CDN.  
A travez de un reverse proxy, teniendo al menos un servidor de archivos estaticos y haciendo que el reverse proxy se encargue de enviar todos los request dinamicos a este servidor, este debe estar optimizado para archivos estaticos y podria responder a muchos mas requests.  
Usando un servicio de CDN, hay varios proveedores, inclusive, podria ser que el proveedor de su hosting ya provea este servicio.  
Usando un dominio o subdominio diferente para estos archivos y esto iria a otro servidor.  

Esas son algunas manera de proveer el servidor de CDN, pero ahora la pregunta es como hacemos para indicarle a Drupal que ciertos archivos deben servirse desde otro servidor?  
En este sentido hay algo importante a tomar en cuenta, y es si constantemente se estan agregando archivos estaticos o no, por ejemplo, si los usuarios pueden subir imagenes al sitio.  
En caso de que no se esten agregando archivos estaticos es mas sencillo porque hay más opciones para lograr el CDN.  
Veamos un poco algunas opciones:  
Usando un modulo como [CDN Integration](http://drupal.org/project/cdn) en su opcion simple o [Simple CDN](http://drupal.org/project/simplecdn) o un [modulo en el apache](http://www.voxel.net/mod_cdn), o el reverse proxy y lo que se hace es que para ciertos tipos o rutas de archivos se obtienen de cierto servidor en vez del servidor web, esto se puede hacer duplicando todos los archivos estaticos del servidor a este otro servidor, pero solo funciona si no se estan agregando más archivos constantemente.  
Otra opción para el caso de que no se estén agregando archivos dinámicamente, puede ser sincronizar los archivos al CDN en momentos específicos como cuando se hacen releases, para esto se puede utilizar rsync, software de deployment, o algunas librerías que interactúan con los diferentes servicios de CDN.  
En caso de que se estén agregando archivos dinámicamente una opción es usar FileConveyor, un proyecto parte del CDN integration module. Este es un servicio que usa su propia base de datos y escucha los cambios en los directorios y crea una cola de archivos a subir y los va subiendo, parchea Drupal para devolver los paths remotos para archivos en el CDN y paths locales para los que aun no se han subido.  

Articulo relacionado con este tema: [Tutorial de Content Delivery Network]({{ site.url }}/es/2009/12/03/tutorial-content-delivery-network-cdn-1469)
