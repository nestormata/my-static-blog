---
layout: es_post
title: ¿Por qué usar Jekyll en mi blog?
categories: Jekyll
tags: ['jekyll', 'blog', 'foundation']
language: es
translation: 
series: [
  ['¿Como trabajar con Jekyll?', '/es/2014/01/28/como-trabajar-con-jekyll/']
]
---
[Jekyll](http://jekyllrb.com/) es un generador estático diseñado para blogs.  
¿Por qué esto es mejor que un sistema dinámico como [Drupal](http://drupal.org/) o [Wordpress](http://wordpress.org/)?
![Jekyll](/images/jekyll-logo.png "Jekyll")

##¿Por qué Jekyll?
Realmente no creo que uno sea mejor que el otro, simplemente son diferentes soluciones al mismo problema y depende de las
necesidades de cada quien para saber cual deberiamos utilizar.   
De hecho, no recomendaría [Jekyll](http://jekyllrb.com/) a cualquiera, Jekyll normalmente (a menos que se desarrolle alguna interfaz web para manejarlo)
requiere que se trabaje desde una consola y requiere configuraciones que no son sencillas para cualquier usuario final.  
De esta manera es que, si el blog va a ser para usuarios no tecnicos posiblemente esta no es la opción para ellos, claro que se
podría desarrollar una solución para eso.

Dicho eso, posiblemente la mayor ventaja que tiene un generador estático sobre un framework dinámico esta en que requiere menos
menos recursos para su ejecución y permite inclusive ser puesto a funcionar directamente en CDNs u opciones gratuitas o economicas
de hosting, lo cual es una gran ventaja en redimiento y costo operativo de un sitio.

Para cualquier caracteristica adicional que se quiera agregar al sitio y cumpla una función más dinámica aún se puede utilizar
el generador estático junto con otras opciones como Node.js o cualquier aplicación en cualquier otro lenguaje o plataforma.

Además de esto, Jekyll esta desarrollado en [Ruby](https://www.ruby-lang.org/) y puede ser facilmente extendido a través de plugins.

Personalmente la desición de migrar mi sitio a Jekyll corresponde a 3 razones:
- __Rendimiento de mi sitio__: quiero que mi sitio sea lo más rápido posible y no hay nada que sobrepase a archivos estáticos.
- __Experimentación__: Mi blog ha sido y continúa siendo un sandbox donde experimento en el mundo real con tecnologías que quiero aprender.
- __Bajo mantenimiento__: Una vez configurado Jekyll el mantenimiento el literalmente mínimo y puedo enfocarme en escribir más seguido.

El código de mi blog puede ser encontrado en [GitHub](https://github.com/nestormata/my-static-blog).
