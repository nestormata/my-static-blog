---
layout: es_post
title: ¿Qué es Markdown?
categories: Jekyll
tags: ['jekyll', 'markdown']
language: es
series: [
  ['1. ¿Por qué usar Jekyll en mi blog?', '/es/2014/01/27/por-que-usar-jekyll-en-mi-blog/'],
  ['2. ¿Como trabajar con Jekyll?', '/es/2014/01/28/como-trabajar-con-jekyll/'],
  ['3. Posts y Drafts en Jekyll', '/es/2014/02/03/posts-y-drafts-jekyll/']
]
---
__Markdown__ es un lenguaje de marcado ligero, es una forma sencilla de
escribir y dar estilo a un texto y es una de las formas de escribir
contenido en Jekyll.
{{ '/images/markdown.png' | img_tag: 'article-main-image' }}

__Markdown__ es sencillo de escribir y de leer, es un formato que es
facil de convertir a otros formatos como HTML, PDF, etc.  
La sencillez de __Markdown__ restringe sea de paso, el que se complique
el texto, al permitir un estilo sencillo.

_Nota:_ En Jekyll los archivos de contenido son encabezados por YAML y
pueden contener _HTML_ y tags _liquid_.

## Formato de texto en Markdown
En __Markdown__ se le puede dar formato al texto usando las siguientes
opciones:

### Texto con énfasis
Se le agrega énfasis al texto encerrandolo entre asteriscos "\*" o subrayado "\_"  
{% highlight text %}
*énfasis*, o _énfasis_ (normalmente se convierte a cursiva)
**énfasis fuerte**, o __énfasis fuerte__ (normalmente se convierte a negrita)
{% endhighlight %}

### Títulos o encabezados
El estilo de los encabezados se da precediendo el texto con almohadillas "#",
de manera que a menor cantidad de almohadillas mayor la prioridad  
{% highlight text %}
# Primer nivel
## Segundo nivel
### Tercer nivel
...
###### Sexto nivel
{% endhighlight %}

Pero además los primeros 2 niveles se pueden definir usando una linea de
caracteres de igual "=" o resta "-"  
{% highlight text %}
Primer nivel
============

Segundo nivel
-------------
{% endhighlight %}

### Listas
Las listas se definen usando un asterisco "\*" 0 un menos "-" y un
espacio antes de la linea para listas no numeradas y un numero con un
punto y un espacio para las listas numeradas.
{% highlight text %}
* Rojo
* Amarillo
* Verde
* Azul

1. Primer elemento
2. Segundo elemento
3. Tercer elemento
{% endhighlight %}

### Código
Para cuando se quiere definir código en el texto se usan el caracter
"\`" tanto para código en la misma linea o encerrado en 3 caracteres
consecutivos para código de varias lineas.
{% highlight text %}
Este código `hola` esta en la misma línea que el texto.

```
Código de varias
  lineas que
  respeta tabs y
espacios
```
{% endhighlight %}

En __Jekyll__ se puede usar también pigmentos (pygments) para hacer
destacado de sintaxis.

{% highlight text %}
{% raw %}
{% highlight sql %}
SELECT * FROM TABLE
{% endhighlight %}
{% endraw %}
{% endhighlight %}

### Citas
Las citas de texto se preceden con el caracter mayor que ">" antes de
cada linea.

{% highlight text %}
> Esta es una cita que en HTML será convertida a un "blockquote"
{% endhighlight %}

### Enlaces
Los enlaces se crean encerrando el texto en parentesis cuadrados junto
al enlace entre parentesis redondos y opcionalmente el título del enlace
entre comillas junto al enlace.

{% highlight text %}
[Este es un enlace](http://www.elsitio.com "Titulo va aquí")
{% endhighlight %}

### Imagenes
Las imágenes se escriben parecido a los enlaces pero precedidos por un
signo de exclamación "!"

{% highlight text %}
![Texto alternativo](http://www.elsitio.com/imagen.png "Titulo de la
imágen")
{% endhighlight %}

De esta manera se tiene un código muy sencillo para escribir texto con
estilo.
