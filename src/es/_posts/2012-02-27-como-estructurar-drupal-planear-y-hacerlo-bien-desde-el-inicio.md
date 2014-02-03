---
layout: es_post
title: Como estructurar Drupal, planear y hacerlo bien desde el inicio
created: 1330363485
categories: Drupal
tags: ['Drupal', 'estructura', 'guia', 'planeamiento']
language: es
permalink: es/2012/02/27/como-estructurar-drupal-planear-y-hacerlo-bien-desde-inicio-1485/
---
## Punto de vista Físico
En este me enfocaré en la localización de archivos y directorios.   
Planificar bien y cumplir con los lineamientos en cuanto a la localización de archivos nos ayudará a:

- Evitar problemas al hacer actualización del core o de los modulos
- Evitar problemas al mover o cambiar de dominio el sitio
- Simplifica los respaldos
- Evita problemas de seguridad

Ejemplo de localización de archivos en Drupal:

{{ '/sites/files/archivos_drupal.png' | img_tag: 'article-image', '', 'Ejemplo de organizacion de archivos en Drupal' }}

En este ejemplo quiero resaltar varias cosas:
- Creamos una base del sitio mas arriba del root, esto para crear varios sub directorios que esten fuera de los directorios publicos del servidor web
- Fuera de los directorios publicos creamos los directorios privados y de cache (a excepcion los archivos generados de css, js y similares que si deben estar publicos), esto asegura que no agregamos un hueco de seguridad
- Ademas en este directorio base se pueden agregar utilitarios o documentos necesarios para el sitio, por ejemplo es un buen lugar para un documento de la lista de parches aplicados al sitio
- Normalmente el directorio de files Drupal lo localiza dentro del directorio de configuracion del sitio, debajo de /sites/mi.dominio.com/files, pero mi recomendacion es normalmente localizarlo debajo de /sites/files, esto para evitar problemas o confusiones a la hora de mover un sitio a produccion o al cambiar de nombre o dominio un sitio
- Aunque es aceptado colocar modulos y temas debajo del directorio de configuracion de cada sitio, esto puede generar problemas por ejemplo si se trabaja con un dominio para desarrollo y otro para produccion o al cambiar de nombre el sitio, mi recomendacion es evitarlo
- Otra recomendación, es evitar que el tema dependa de archivos subidos a travez de la interfaz de Drupal, de la misma manera que debemos evitar tener codigo que no sea exclusivamente de theming en los temas

## Punto de vista Lógico
Desde el punto de vista lógico quisiera explicar 2 conceptos, primero y mas importante las entidades de Drupal y por el otro lado repasar un poco sobre theming.

### Entidades
Una forma de ver a las entidades de Drupal sería de la siguiente manera:

_Básicas:_
- Usuarios
- Roles
- Permisos
- _Taxonomía (organización)_
- Menus
- Comentarios
- Bloques

_Extensibles:_
- _Nodos (contendido)_
- Views (despliegue de entidades)
- Panels (Layout)

_Custom:_
- Profile
- Feeds
- Etc ...

### Nodos
El nodo es la entidad de datos de Drupal, la intención es que el nodo sea cualquier contenido en Drupal, siempre que pensemos en contenido debemos pensar en el nodo, ya sea una página, un artículo, una receta de cocina, un articulo en venta, un anuncio o lo que sea.  
El nodo se puede extender con el CCK o el modulo de contenido, se le pueden agregar o quitar campos, y darle la forma y concepto que queramos.  
También podemos extenderlo por medio de código a travez de los diferentes hooks para el manejo de nodos.

### Taxonomía
Es importante entender la taxonomía, ya que esta esta muy bien integrada en Drupal y es la manera recomendada de manejar y categorizar los nodos.  
La taxonomía nos permite ver los nodos desde diferentes perspectivas, como por ejemplo, si una receta es de tipo para vegetarianos o no, o si esta misma receta es de un país u el otro, o si la receta es de pasta o un postre, o cualquier otra perspectiva que queramos darle a ese tipo de contenido, y esto es lo que nos dará la herramienta para visualizar al usuario o manipular usando las diferentes perspectivas, por eso es muy importante planificar la taxonomía muy bien desde el inicio del proyecto.  

### Views
Los views son la forma mas sencilla y extensible en que presentamos un grupo de nodos.  
Los views tienen aplicaciones sin fin, un view por debajo es un query builder y nos sirve no solo para los nodos, sino para cualquier entidad que tengamos en nuestro sitio.  
Los views nos permiten desplegar nuestros nodos de diferentes maneras, ya sea, como página, bloques, slideshow o muchas maneras mas.  
Además me permito recalcar algo importante, tanto los views como los paneles implementan esquemas de cache, y es importante que revisemos y definamos el cache de cada view cuando este es creado, el no definir el manejo del cache del view puede causar problemas de rendimiento en nuestro sitio que serian tan faciles de arreglar como pensar en que parametros de cache debo usar para cada view.  
Otro detalle es utilizar parametros cuando sea posible, a veces necesitamos crear mas de un view similar, si utilizamos parametros nos permitiremos agregar escalabilidad, así cuando queramos reutilizar este view en otra area o por otro parametro no necesitaremos crear un nuevo view, lo que nos facilitará las cosas al darle mantenimiento o hacer modificaciones.  

### Panels
Los panels son la forma en que podemos estructurar una página (o area) en Drupal de manera muy sencilla y visual.   
Los panels nos permiten definir un layout en el que queremos colocar varia información.  
Podemos agregar dentro de un panel nodos, views, panels, bloques, codigo custom y demás.  
También se pueden pasar parametros a los elementos y definir cache.

## Theming
El theming en Drupal es muy versatil y nos permite sobre escribir el despliegue de una manera tan general como el despliegue de todas las páginas o todos los links o menus, o tan granular como un link especifico o un area en una página especifica.  
También podemos customizar por taxonomías o urls.  
Pero, recordemos siempre de no agregar código de lógica en el temas, solo código que sea necesario para el despliegue, esto nos mantendrá la lógica separada de la presentación, manteniendo un buen esquema de escalabilidad, si ocupamos modificar lógica siempre pensemos en un custom module en caso de que no encontremos un módulo que implemente lo que ocupamos.  

## Recomendacion
_Recuerde siempre planificar el uso de Drupal, de sus entidades, views, layouts, taxonomía y de la localización de los archivos para que su proyecto se mantenga mas seguro y en mejor estado_

Adjunto pueden encontrar la presentación que se hizo de este tema en la Drupaleada de Febrero.  
[Presentación](http://profesional.co.cr/sites/files/como_estructurar_drupal.pdf)
