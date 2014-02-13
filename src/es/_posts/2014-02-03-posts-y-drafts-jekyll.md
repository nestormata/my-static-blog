---
layout: es_post
title: Posts y Drafts en Jekyll
categories: Jekyll
tags: ['jekyll', 'markdown']
language: es
translation: jekyll/2014/02/06/how-to-work-with-jekyll/
series: [
  ['1. ¿Por qué usar Jekyll en mi blog?', '/es/2014/01/27/por-que-usar-jekyll-en-mi-blog/'],
  ['2. ¿Como trabajar con Jekyll?', '/es/2014/01/28/como-trabajar-con-jekyll/'],
  ['4. ¿Qué es Markdown?', '/es/2014/02/11/que-es-markdown/']
]
---
En esta tercera parte les explicaré como trabajar con posts y drafts en Jekyll.
{{ '/images/jekyll-logo.png' | img_tag: 'article-main-image' }}

## Front-matter
Cualquier archivo que contenga un bloque YAML al inicio del archivo será procesado por Jekyll de manera especial.
Esto aplica tanto para posts como para archivos HTML, XMLs o cualquiera.
Un ejemplo de un bloque __front-matter__ es el siguiente:

{% highlight yaml %}
---
layout: post
title: This is a cool post
---
{% endhighlight %}

Lo que se ponga dentro del bloque de 3 lineas horizontales `---` es considerado un bloque YAML.
Esta información se utilizará en Jekyll y estará disponible en durante el archivo y en los documentos que se vinculen a éste, además de que el archivo tendrá a disposición tags __Liquid__.
Si desea usar los tags __Liquid__, pero no ocupa usar el YAML aún puede definir el bloque vacío para que Jekyll lo interprete.

## Posts y drafts
Los posts son el contenido que ponemos normalmente en el directorio `_posts` y están escritos en lenguajes como Markdown u alguna otra opción, pero aquí solo explicaré el lenguaje Markdown por su simplicidad y limpieza de código.

### Posts
Los posts se nombran por estándar en el siguiente formato:

{% highlight text %}
AÑO-MES-DIA-titulo.FORMATO
{% endhighlight %}

Donde AÑO es un numero de 4 dígitos, y MES y DIA son números de 2 dígitos, y FORMATO es la extensión en que esta escrito el contenido, por ejemplo:

{% highlight text %}
2014-01-28-hola-mundo.md
2013-12-24-navidad-de-rudolf.textile
{% endhighlight %}

Los posts deben empezar con un bloque Front-matter YAML.

### Drafts
Los drafts son archivos iguales a los posts pero que residen en el directorio `_drafts` y no tienen fecha en su nombre ya que aún no han sido publicados.
Estos archivos serán ignorados por el proceso de construcción de Jekyll por defecto, esto para permitir tener separados los documentos publicados, de aquellos que no han sido publicados.
Cuando decida publicarlos los mueve de _drafts a _posts y les asigna una fecha de publicación en el nombre del archivo.

## El post
Un ejemplo de un post (o draft) es el siguiente
{% highlight yaml %}
---
title: Hola Mundo
layout: post
---
En las primeras lineas podemos colocar un resumen que separaremos por 2 enter.

## Un subtitulo puede aparecer
Y luego mucho más contenido
{% endhighlight %}

En este ejemplo se define un titulo para el archivo y el layout que en este caso es `_layouts/post.html`.
Las primeras lineas antes de los primeros 2 enter quedan en la variable `excerpt` y son el resumen.

En las próximas partes de la serie les explicaré sobre Markdown y como compilar Jekyll para generar el sitio.
