---
layout: es_post
title: Varnish, Reverse Proxy y ESI
categories: Drupal
tags: ['optimización', 'Drupal', 'varnish', 'rendimiento']
language: es
created: 2011-09-22 09:04:38
permalink: es/book/varnish-reverse-proxy-y-esi/
series: [
  ['1. ¿Como optimizar Drupal para alto rendimiento?', '/es/book/como-optimizar-drupal-para-alto-rendimiento/'],
  ['2. Drupal y los recursos del servidor web', '/es/book/drupal-y-recursos-del-servidor-web/'],
  ['3. Pressflow y Drupal 7, Distribuciones de rendimiento', '/es/book/pressflow-y-drupal-7-distribuciones-rendimiento/'],
  ['4. El cache de Drupal', '/es/book/cache-drupal/'],
  ['5. Drupal y Content Delivery Network (CDN)', '/es/book/drupal-y-content-delivery-network-cdn/'],
]
---
## Varnish
Varnish es un proxy que coloca entre el usuario y el (o los) servidor(es) web, siendo Varnish quien accesa el servidor web, manteniendo cache del contenido y manipulando los headers y tal vez también el contenido.  
Varnish redirecciona el request ya sea hacia el cache interno, hacia un servidor web u otro servidor web.

Debido a que varnish esta hecho para pocas cosas es muy eficiente haciendo lo que hace y permite jugar muy eficientemente con los requests.  
Por ejemplo puede balancear los requests, o redirigir diferentes requests a un servidor u otro dependiendo de algun header, de alguna ruta o de algun tipo de archivo, o incluso de si un servidor funciona bien o da errores, en cuyo caso inclusive puede mantenerse dando una respuesta del cache mientras el servidor no funciona.

## Varnish para liberar al servidor
Con varnish se puede hacer cosas muy interesantes, pero ahorita hablaremos de lo siguiente:

- Cacheo por tipos de archivo
- Cacheo por rutas o patrones
- Cacheo de paginas a usuarios anonimos
- Cacheo de secciones de una pagina
- Cacheo de una pagina con excepcion en secciones

Al configurar un varnish en frente de un servidor web podemos liberar al servidor web de muchisimos requests, incluso, si es un sitio enfocado a usuarios anonimos (como un blog, sitio de noticias, sitio informativo, etc) hasta podriamos hacer que el servidor web no reciba casi requests y todos sean servidos por el varnish.  
Perfectamente podemos hablar de reducir los requests de 1.000 en una hora a 5 o 20, y lo mejor de todo, es que podrian aumentar los requests en esa hora a 10.000 o 100.000 y no aumentar ni un request al servidor web, reduciendo tambien los requests a la base de datos y aumentando la velocidad de respuesta de 1 segundo por request a unos milisegundos.

## Configuración de Varnish
No voy a entrar demasiado profundo en los detalles de la configuración, pero aquí esta la [documentación](https://www.varnish-cache.org/docs/trunk/index.html)  
La configuración de varnish se encuentra el el archivo .vcl que tiene varios metodos para cada evento del flujo del request (algo como los hooks de drupal) donde se puede configurar o redireccionar el flujo del request.  
Tal vez del que mas hablaremos será vlc_recv, que se da cuando inicial el procesamiento del request, en este punto tenemos la información de los headers del browser y podemos tomar decisiones de que hacer con el request, como indicar que pase directo (pass) o sea que no se utilice del cache, o que se revise el cache para saber si esta ahi y usar la version del cache si es valida (lookup), además tambien podemos alterar o agregar headers, o indicar si se debe procesar con ESI (Edge Server Includes).  
Por ejemplo, podemos indicar que no se haga cache de un url de pruebas basandonos en el request url, esto para poder hacer pruebas sin que nuestros requests sean cacheados durante desarrollo:
{% highlight text %}
#bypass del demo site
if (req.url ~ "demo.mydomain.com") {
  return (pass);
}
{% endhighlight %}

Podemos indicar que siempre que haga cache de algun tipo de archivo basandonos en que el tipo de request sea GET (no POST) y en el url, de esta manera nos aseguramos de no enviar requests al servidor web que son siempre los mismos requests y que podemos dejar que varnish los cachee y descargamos de estos requests al servidor web:
{% highlight text %}
if (req.request == "GET" && req.url ~ ".(gif|jpg|jpeg|bmp|png|tiff|tif|ico|img|tga|wmf)$") {
  return (lookup);
}
{% endhighlight %}

Podemos crear un header de X-Forwarded-For:
{% highlight text %}
if (req.http.x-forwarded-for) {
  set req.http.X-Forwarded-For =
    req.http.X-Forwarded-For + “, ” + client.ip;
} else {
  set req.http.X-Forwarded-For = client.ip;
}
{% endhighlight %}

Podemos definir que no se haga cache para usuarios autenticados:
{% highlight text %}
if (req.http.Authorization || req.http.Cookie) {
  /* Not cacheable by default */
  return (pass);
}
{% endhighlight %}
También podriamos enviar ciertos requests a un servidor diferente, por ejemplo enviar todas las imagenes de un servidor optimizado para requests estaticos:
{% highlight text %}
backend www {
  .host = "default.example.com";
  .port = "80";
}

backend images {
  .host = "images.example.com";
  .port = "80";
}

sub vcl_recv {
    if (req.request == "GET" && req.url ~ ".(gif|jpg|jpeg|bmp|png|tiff|tif|ico|img|tga|wmf)$") {
        set req.backend = images;
        return (lookup);
    }
...
{% endhighlight %}

## X-Forwarded-For
Cuando accesamos el servidor web a travez de un reverse proxy como varnish, la IP que llega al servidor es siempre la IP del reverse proxy, no la IP del usuario, y por lo tanto no podemos saber de cual IP viene el usuario, por eso se setea un header X-Forwarded-For que contenga la IP del usuario, y luego hay que ir a la configuracion de apache e indicar que la IP se busque de este header y lo mismo para Drupal.  
En el archivo de configuración de apache suele haber algo asi:
{% highlight text %}
# If you are behind a reverse proxy, you might want to change %h into %{X-Forwarded-For}i
LogFormat "%v:%p %{X-Forwarded-For}i %l %u %t \"%r\" %>s %O \"%{Referer}i\" \"%{User-Agent}i\"" vhost_combined
LogFormat "%{X-Forwarded-For}i %l %u %t \"%r\" %>s %O \"%{Referer}i\" \"%{User-Agent}i\"" combined
LogFormat "%{X-Forwarded-For}i %l %u %t \"%r\" %>s %O" common
{% endhighlight %}

En el archivo de configuración del site de drupal hay que descomentar lo siguiente:
{% highlight text %}
'reverse_proxy' => TRUE,
'reverse_proxy_addresses' => array('10.176.87.35'), // La IP interna de su reverse proxy
{% endhighlight %}

Con esto Drupal sabra que debe reemplazar la IP por el valor del header.

