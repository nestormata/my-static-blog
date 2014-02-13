---
layout: es_post
title: ¿Como trabajar con Jekyll?
categories: Jekyll
tags: ['jekyll', 'blog', 'foundation']
language: es
translation: jekyll/2014/02/06/how-to-work-with-jekyll/
series: [
  ['1. ¿Por qué usar Jekyll en mi blog?', '/es/2014/01/27/por-que-usar-jekyll-en-mi-blog/'],
  ['3. Posts y Drafts en Jekyll', '/es/2014/02/03/posts-y-drafts-jekyll/'],
  ['4. ¿Qué es Markdown?', '/es/2014/02/11/que-es-markdown/']
]
---
Ya que entendemos porque puede ser una opción razonable trabajar con Jekyll
ahora puedo explicarles como fue que lo hicé.
{{ '/images/jekyll-logo.png' | img_tag: 'article-main-image' }}

##Instalación y configuración de Jekyll
No pienso repetir lo que se encuentra en el sitio oficial, así que para las
instrucciones básicas de instalación pueden revisar la 
[guía](http://jekyllrb.com/docs/quickstart/).  
El código completo de mi blog puede verse en mi repositorio en
[GitHub](https://github.com/nestormata/my-static-blog/).

##Estructura de directorios
Preferí separar el codigo de la configuración para lo cual moví el archivo
de configuracion __\_config.yml__ al directorio raíz y el código del sitio a
__/src__ además de mover el destino al directorio __/build__, de esta manera
puedo tener mi codigo más ordenado.

Para que esto tenga efecto tuve que modificar las opciones en el
__\_config.yml__ de la siguiente manera:

{% highlight yaml %}
source:       ./src
destination:  ./build
layouts:      ./_layouts
plugins:      ./src/_plugins
{% endhighlight %}

De manera que el codigo queda estructurado como a continuación:

{% highlight text %}
/
|- _layout.yaml
|- /src
|  |- .htaccess
|  |- index.html
|  |- robots.txt
|  |- humans.txt
|  |- 404error.html
|  |- rss.xml
|  |- sitemap.xml
|  |- /_assets
|  |  |- /css
|  |  |- /js
|  |- /_data
|  |- /_drafts
|  |- /_posts
|  |- /_layouts
|  |- /_includes
|  |- /_components
|  |- /_locales
|  |- /_plugins
|  |- /images
|  |- /es
|  |  |- index.html
|  |  |- rss.xml
|  |  |- /_drafts
|  |  |- /_posts
|- /build
{% endhighlight %}
_Note:_ Algunos de estos archivos y directorios serán explicados más adelante en la serie.

###Beneficios de esta estructura:
- La configuración queda en un directorio raíz junto con cualquier archivo que necesite y que no se
requiera ser exportado junto con el sitio.
- El codigo esta en un directorio __/src__ y los archivos generados quedan en
el directorio __/build__.
- Dentro del directorio de cada lenguaje adicional al default tengo un
directorio para __posts__ y __drafts__ _(luego explicaré como trabajar con
diferentes lenguajes)_.
- Los archivos __JavaScript__ y __CSS__ serán preprocesados para __SASS__,
unirlos, minificarlos y comprimirlos _(luego explicaré como se logra esto)_.
- Los componentes quedan separados, por ejemplo los archivos de
[Foundation](http://foundation.zurb.com/).

_Pronto la continuación de esta serie con más detalles._
