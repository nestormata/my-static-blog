---
layout: es_post
title: Como configurar OpenDNS, que hago cuando tengo problemas de DNS
created: 1259674875
categories: Personal
tags: ['dns', 'opendns', 'como', 'configurar', 'problemas']
language: es
permalink: es/2009/12/01/como-configurar-opendns-que-hago-cuando-tengo-problemas-dns-1466
---
{{ '/images/opendns.gif' | img_tag: 'article-image', '', 'OpenDNS como configurarlo', 93, 37 }}
Si sueles tener problemas de __DNS__, si vives en __Costa Rica__ probablemente de vez en cuando los tienes con el __ICE, RACSA o CableModem__, o simplemente quieres tener más __control para restringir accesso a páginas o sitios con contenidos obsenos__ o quieres estar un poco más seguro en contra del __phishing__, entonces __OpenDNS__ es una buena opcción.

## ¿Qué es un DNS?
__DNS es la nomenclatura de Domain Name Server__, cuando usas internet siempre tienes por lo menos 1 DNS asignado, este es un servidor que se encarga de traducir cada __dominio__ (por ejemplo nestor.profesional.co.cr) por una __dirección IP__ (por ejemplo 67.23.36.248) que es la dirección de como llegar al servidor de internet que buscas.  
Ocasionalmente el DNS de tu proveedor de internet puede fallar y como resultado aunque tengas conexión a internet no puedes ingresar a ninguna página debido a que tu computadora no sabe como traducir el dominio a una dirección IP.

## ¿Qué es OpenDNS?
__OpenDNS__ es una serie de __servidores DNS__ optimizados, balanceados y distribuidos de muy alta confiabilidad y con la opción de ser utilizados de manera gratuita para reemplazar los DNS's que te asigna tu proveedor de internet.  
Además de ser más confiables y con mejor velocidad de respuesta, tienen opciones adicionales, puedes simplemente configurarlos y listo, pero también puedes crear una cuenta con ellos y te daría la oportunidad de configurar opciones o pagar y tener aun más opciones.  
Dentro de las opciones que te ofrecen esta la de __filtrado de dominios__ y __revisión del historial de páginas visitadas__. La opción de filtrado te permite indicar si debe negarse el acceso a páginas pornograficas y sitios de __phishing__, o si además filtrar sitios de cracks y hacks y cosas así, o además filtrar todo acceso a redes sociales y sitios de este tipo o simplemente no filtrar nada, esto puede ayudarte a filtrar y asegurar más las computadoras de tu casa u oficina. Las opciones pagadas te dan más opciones muy utiles como para oficinas.  

## ¿Como configuro OpenDNS?
La mejor opción sería configurarlo en tu router para que con solo configurarlo una vez todas las computadoras de la casa automaticamente queden configuradas, esto es un poco variable dependiendo del router y tienes que tener la clave, si usas el ICE o Racsa es probable que no tengas acceso al modem de internet que normalmente estaria en http://192.168.0.1, si tienes un router inhalambrico, tienes la clave de este y sabes la dirección IP entonces puedes ingresar a la parte administrativa del router y configurar los __Static DNS__ con las direcciónes que ya te daré.  

Si todo esto que te he dicho de routers suena muy complicado o no tienes acceso, puedes configurarlo directamente en tu computadora:
### Windows XP:
- Ir a "Inicio" -&gt; "Panel de control" -&gt; "Conexiones de Red" o "Red"
- Ahi verás al menos una conexión, ya sea que uses inhalambrica o por cable de red, elije la que usas y abrela.
- Aparece una ventana con información, haz click en el boton de "Propiedades"
- Busca la opción "Protocolo de Internet (TCP/IPv4)" y seleccionalo.
- Luego haz click en el boton "Propiedades".
- En la parte de abajo selecciona la opción que dice algo como "Utilizar las siguientes direcciones para el servidor DNS" y abajo de este escribir las siguientes 2 direcciones IP:
{% highlight text %}
208.67.222.222 
208.67.220.220
{% endhighlight %}
- Luego dale `OK` y listo.

### Windows Vista/Windows 7:
- Ir a "Inicio" -&gt; "Panel de control" -&gt; "Redes e Internet" -&gt; "Ver estado de red y tareas"
- Ahi verás al menos una conexión de red, ya sea que uses inhalambrica o por cable de red, elije la que usas y dale "Ver estado"
- Aparece una ventana con información, haz click en el boton de "Propiedades"
- Busca la opción "Protocolo de Internet (TCP/IPv4)" y seleccionalo.
- Luego haz click en el boton "Propiedades".
- En la parte de abajo selecciona la opción que dice algo como "Utilizar las siguientes direcciones para el servidor DNS" y abajo de este escribir las siguientes 2 direcciones IP: 
{% highlight text %}
208.67.222.222 
208.67.220.220
{% endhighlight %}
- Luego dale `OK` y listo.

Espero esto pueda ser de ayuda a más de una persona.

---
### DNS's de OpenDNS:
    208.67.222.222
    208.67.220.220

[Página de OpenDNS](http://www.opendns.com)
[Más información de como configurar OpenDNS en diferentes plataformas y sistemas](http://www.opendns.com/support/category/3)

