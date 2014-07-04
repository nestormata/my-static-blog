---
layout: es_post
title: ¿Como usar el Cache de Drupal en los módulos?
categories: Drupal
tags: ['cache', 'rendimiento', 'drupal 6', 'drupal 7']
translation: drupal/2014/02/18/how-cache-data-drupal/
thumbnail: http://www.profesional.co.cr/images/drupal-fast.png
language: es
---
Reducir la cantidad de veces que se solicita o calcula un dato es una
forma de optimizar el rendimiento de una funcionalidad y realmente
necesario.
{{ '/images/drupal-fast.png' | img_tag: 'article-main-image' }}

## Formas de cache
Vamos a hablar de 2 diferentes tecnicas de cache que se pueden utilizar
en __Drupal__, primero el uso de datos __estáticos__ y luego el __Cache de Drupal__.

## Niveles de variables (o scopes)
En la mayoría de las plataformas web existen varios niveles en los que
se pueden guardar las variables más allá de las variables de una función
o una clase, estos son ambientes o scopes.  
Existen normalmente 4 niveles de estos scopes: __Request__, __Sesión__,
__Aplicación__ y __Servidor__.

### Variables de Request
Las variables de request son aquellas que permanecen vigentes durante la
solicitud que se hizo al servidor y dejan de existir en el momento en
que la ejecucion de la solicitud termina.  
Este es el nivel normal que tenemos en PHP incluso si utilizamos
variables estaticas, patrones como Singleton, y cualquier otro intento
por código de mantener un dato vigente en memoria.

### Variables de Sesión
En PHP se pueden guardar datos en las sesión del usuario y estos datos
son solo para ese usuario en esa sesión y permaneceran vigentes durante
la duración total de esa sesión.  
Esto es muy util para mantener información que el usuario requiera para
darle continuidad al uso sobre el sitio.

### Variables de Servidor
PHP por defecto no es capaz de mantener datos a nivel del servidor como
sí lo hacen otras tecnologías, pero eso no quiere decir que no se pueda
lograr.  
En PHP se puede emular las variables de servidor guardando los datos en
una base de datos (que funcione solo para ese servidor), guardando los
datos en archivos o utilizando diccionarios como Redit, APC, Memcache o
similares (que funcionen solo para ese servidor).  
Las variables de servidor se identifican porque pertenecen solo a lo que
este corriendo en ese servidor, no necesariamente son exclusivas de la
aplicación, por lo que podría utilizarse para compartir datos globales
entre aplicaciones.  
Los datos suelen ser volátiles por definición y se suelen perder al
reiniciarse el servidor.  

### Variables de Aplicación
Muy similarmente a las variables de servidor, estas no son soportadas
por defecto en PHP, pero puede ser implementado de la misma manera que
se implementan las de servidor.  
La diferencia conceptual de estas variables es que no se comparten entre
aplicaciones, pero por el otro lado sí podrían ser compartidas entre
servidores que esten sirviendo la misma aplicación.

## ¿Para que ocupo hacer cache de datos?
Cada vez que hacemos una solicitud de datos o cierto tipo de calculos
eso cuesta recursos.  
Las solicitudes a una base datos requieren memoria, CPU y en la mayoría
de los casos también lectura del disco duro.  
La interpretación de archivos o los calculos matématicos complejos entre
otros tienen un peso grande en el rendimiento también.  
Esto no suele ser mucho problema una vez, pero cuando se sirve un sitio
y se tiene gran tráfico esto puede tener un impácto muy grande en el
rendimiento del servidor y el tiempo de respuesta.  
Reduciendo la cantidad de solicitudes o calculos que se hagan se
multiplica las ventajas en rendimiento y tiempo de respuesta.  
De ahí que si por ejemplo podemos reducir la cantidad de archivos de
código o templates a usar a un 10% en el 90% de los requests o similar
para las solicitudes de base de datos, podríamos ver el rendimiento del
sitio mejorado drasticamente, o en su defecto, el no hacerlo podría
significar el tener un sitio lento e incluso que no soporte una cantidad
decente de tráfico.  
Claro que, todo siempre tiene un costo, el mantener más datos en cache
implica que se debe utilizar más memoria para mantenerlos disponibles,
lo cual podría estar limitado por los recursos de RAM del servidor.  
Por esta razón es que se debe tener cuidado y ser conciente de los
recuros o se puede empezar a tener un problema de disponibilidad de
cache, teniendo que recurrir al swap o memorial virtual en disco,
haciendo que todo el servidor se vuelva más pesado y lento.

## Datos estáticos
Ahora que conocemos los diferentes niveles de las variables veamos los
datos estáticos.
A travez de funcionalidad _"static"_ de PHP podemos mantener datos de
manera persistente durante la ejecución del código (variables de
request), permitiendonos ahorrar solicitudes o calculos repetitivos o
costosos.
En el caso de Drupal 7 se puede utilizar la función `drupal_static` para
mantener estos datos.
La función `drupal_static` recibe el `nombre` o llave de los datos, el
`valor defecto` y si deben `limpiarse` los datos.
En ese sentido esta función puede verse un poco como el set de funciones
de Drupal de variable\_get/set.
### Uso en Drupal 7 para datos exclusivos de una función:
{% highlight php %}
<?php
function mi_funcion() {
  // Se utiliza el nombre de la función como llave
  $lista_datos = &drupal_static(__FUNCTION__);

  // Si los datos no han sido solicitados aún se solicitan
  if (!isset($lista_datos) {
    // Se obtienen los datos de la base de datos y efectuan los calculos
  }
  // La segunda vez que se llame a la función los datos ya estaran definidos y no requerirá solicitarlos de nuevo

  // Se utiliza $lista_datos y se modifican los datos en la variable
}
?>
{% endhighlight %}

### Uso en Drupal 7 compartiendo los datos entre funciones:
{% highlight php %}
<?php
function una_funcion() {
  $lista_datos = &drupal_static("datos compartidos");
  // Se utiliza $lista_datos y se modifican los datos en la variable
}

function otra_funcion() {
  $lista_datos = &drupal_static("datos compartidos");
  // Se utiliza $lista_datos y se modifican los datos en la variable
}
?>
{% endhighlight %}

### Uso en Drupal 6 para datos exclusivos de una función:
{% highlight php %}
<?php
function mi_funcion() {
  // Se utiliza el nombre de la función como llave
  static $lista_datos;

  // Si los datos no han sido solicitados aún se solicitan
  if (!isset($lista_datos) {
    // Se obtienen los datos de la base de datos y efectuan los calculos
  }
  // La segunda vez que se llame a la función los datos ya estaran definidos y no requerirá solicitarlos de nuevo

  // Se utiliza $lista_datos y se modifican los datos en la variable
}
?>
{% endhighlight %}

### Uso en Drupal 6 compartiendo los datos entre funciones:
En Drupal 6 hay que hacer un ajuste, ya que la función static solo
aplica a la función (o clase) y no puede compartirse.  
Para esto hay 2 opciones, usar una variable global o crear una función
intermedia para obtener una referencia a la variable estática que esta
en esa función.  
{% highlight php %}
<?php
function una_funcion() {
  global $lista_datos;
  // Se utiliza $lista_datos y se modifican los datos en la variable
}

function otra_funcion() {
  global $lista_datos;
  // Se utiliza $lista_datos y se modifican los datos en la variable
}
?>
{% endhighlight %}

## Cache de Drupal
Drupal tiene una serie de funciones para utilizar un sistema de cache
generico que esta implementado.  
El cache de Drupal viene por defecto implementado en la base de datos,
pero puede cambiarse para que utilicen alguna otra implementación como
APC, Memcache, Redit, Archivos, etc.  
En un próximo artículo les explicaré como configurar diferentes
implementaciones del cache de Drupal.  
La ventaja de cache de Drupal es que la implementación es agnostica para
el código, al momento de trabajar con el código no se sabe cual es la
implementación y realmente es irrelevante.  
Si tenemos que hacer una serie de calculos muy pesados sobre unos datos
y estos datos se mantienen constantes para el sitio durante un tiempo
determinado, podemos hacer algo como lo siguiente para evitar
calcularlos en cada solicitud:
{% highlight php %}
<?php
function calcular_datos_pesados() {
  $datos_calculados = drupal_static(__FUNCTION__); // Drupal 7 version
  //static $datos_calculados; // Drupal 6 version

  if (!isset($datos_calculados)) {
    if ($cache = cache_get("datos_pesados")) {
      $datos_calculados = $cache->data;
    } else {
      // Hacer todos los calculos necesarios en los datos y coloquelos en $datos_pesados
      cache_set("datos_pesados", $datos_pesados, "cache");
    }
  }
  return $datos_calculados;
}
?>
{% endhighlight %}
De esta manera los datos no se tendran que calcular ni durante la misma
solicitud varias veces, ni tampoco en otras solicitudes durante un
tiempo.

Es aconsejable el uso de cache, sin abusar y teniendo en cuenta
estimaciones de cuanto puede afectar en la mejoría del rendimiento, pero
esto puede ser la diferencia entre el sitio pesado y lento o el sitio
agil y veloz.
