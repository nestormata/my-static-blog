---
layout: es_post
title: Tutorial de Content Delivery Network (CDN)
created: 1259879298
categories: Personal
tags: ['cdn', 'servidor', 'web', 'iis', 'apache', 'optimización']
language: es
permalink: es/2009/12/03/tutorial-content-delivery-network-cdn-1469
---
<h3>Introducción</h3>
<p>Hace años las computadoras no solían tener la cantidad de recursos que tienen actualmente, por lo que se debía ser muy cuidadoso con el uso responsable y eficiente de los servidores.</p>

<p>Con el tiempo y el aumento de los recursos en los sistemas muchos programadores fueron creciendo en un ambiente en el que no requerían ser tan <strong>eficientes</strong>, pero actualmente los sistemas se han vuelto más móviles y por tanto más pequeños y no tan potentes como lo que estábamos acostumbrados, y también los sistemas han migrado mucho más enfocados a web por lo que la cantidad de usuarios accediendo a los servidores es mucha.</p>
<p>Esto nos trae a que en la actualidad estemos forzados otra vez (por dicha) a tener la necesidad de ser <strong>eficientes</strong> en cuanto a la <strong>utilización</strong> de los <strong>recursos</strong>.</p>
<p>En un sistema web de alta demanda la gran cantidad de <strong>recursos</strong> de un <strong>servidor</strong> se ve <strong>dividida</strong> entre la <strong>cantidad</strong> de <strong>usuarios</strong> <strong>accediendo</strong> <strong>simultáneamente</strong>, lo cual crea una cantidad limitada de recursos por cada usuario.</p>
<p>&nbsp;</p>
<h3>Qué es CDN?</h3>
<p>Una <strong>red de distribución de contenido</strong> es una <strong>colección de servidores web distribuidos alrededor de multiples localizaciones para distribuir contenido más eficientemente</strong> a los usuarios. El servidor seleccionado para distribuir el contenido a un específico usuario se basa normalmente en la medida de proximidad de la red.</p>
<p>Los <strong>CDN's</strong> son <strong>servidores</strong> utilizados específicamente para distribuir <strong>contenido estático</strong>, siendo este el más sencillo de distribuir independiente de la plataforma, el conjunto de servidores se visualiza como una <strong>nube</strong>, los datos se encuentran<strong> distribuidos y replicados</strong> dentro de esta nube de servidores de manera que cualquiera de los servidores pueda entregar el mismo contenido cuando se le solicite.</p>
<p>&nbsp;<img src="/sites/nestor.profesional.co.cr/files/cdn_cloud.png" alt="CDN Cloud y como funciona" width="599" height="458" vspace="5" hspace="5" border="0" /></p>
<h3>Por qué debería usar CDN?</h3>
<p>Al utilizar <strong>CDN's</strong> se le entrega al usuario el <strong>contenido estático</strong> de manera más <strong>eficientemente</strong>, en beneficio de la <strong>velocidad</strong> con que el usuario final percibe la respuesta total de la página.</p>
<p>Además de mejorar la experiencia del usuario, al utilizar un <strong>CDN</strong> para <strong>distribuir el contenido estático</strong> se está a su vez <strong>liberando a él o los servidores de aplicacione</strong>s de la carga de procesar una gran parte de estas solicitudes que normalmente son más del 80% o 90% de la <strong>cantidad de solicitudes</strong> que se hacen al servidor, permitiendo así al servidor de aplicaciones utilizar toda su capacidad para procesar las solicitudes dinámicas.</p>
<p>&nbsp;</p>
<h3>Funcionamiento de los servidores web</h3>
<p>Independientemente de la plataforma, los servidores web trabajan en <strong>memoria</strong> y debido a que los <strong>recursos</strong> de los <strong>servidores</strong> son <strong>limitados</strong> el servidor solo puede <strong>procesar</strong> un <strong>numero máximo de solicitudes eficientemente</strong> y un numero máximo de solicitudes antes de colapsar o de dejar de procesarlas.</p>
<p>Cada solicitud que ingresa al servidor es <strong>atendida en una cola</strong> la cual puede crecer exponencialmente si el servidor no es capaz de ir liberando la cola con la misma velocidad con la que ingresan solicitudes a esta cola.</p>
<p>Hay <strong>solicitudes</strong> que son más fáciles de resolver para el servidor que otras, esto normalmente depende de la cantidad de <strong>archivos y handlers</strong> que deba abrir para esa solicitud y si lo que requiere esta o no en un <strong>cache</strong>. Dentro de los handlers están también las <strong>conexiones a bases de datos y/u otros sistemas</strong>, como <strong>sockets</strong> o solicitudes a servidores <strong>externos</strong>.</p>
<p>Dependiendo de la cantidad y tipo de recursos que se están accediendo además de recursos toma tiempo, lo que hace que las solicitudes en cola tengan que esperar más acumulándose aun más el tiempo que estas y las que siguen deberán esperar.</p>
<p>Además de esto, existen filtros o procesos previos o posteriores a cada solicitud que agregan tiempo y consumo de recursos a cada uno de las solicitudes.</p>
<p>Por el <strong>costo</strong> que tiene crear e <strong>inicializar</strong> cada <strong>recurso nuevo</strong>, los servidores además suelen crear <strong>pilas de recursos</strong>, como pilas de conexiones a bases de datos o pilas de procesos pre-inicializados para atender a las solicitudes.</p>
<p>Cada uno de estos procesos tomará la cantidad de memoria que requiera para efectuar lo que la solicitud requiere y si este proceso se recicla es probable que mantenga su uso de memoria aun cuando no todos los procesos que atienda requieran esa misma cantidad de memoria, esto conlleva que cuando se sirven diferentes tipos de solicitudes mezcladas la cantidad de memoria que utilicen los procesos será el del proceso que más requiera memoria, lo cual limita aun más la capacidad de procesar solicitudes más sencillas en sacrificio de poder atender las solicitudes más complejas.</p>
<p>De aquí que cuando se <strong>separan los tipos de solicitudes en servidores diferentes queda cada servidor optimizado para ese tipo de solicitudes</strong>, permitiéndole trabajar de <strong>manera más eficiente</strong> y darle un uso mucho más eficaz a los recursos del servidor.</p>
<p>&nbsp;<img src="/sites/nestor.profesional.co.cr/files/memoria_servidor_compartido.png" alt="representacion de uso de memoria de servidor web, cdn funcionamiento" width="560" height="464" vspace="5" hspace="5" border="0" /></p>
<h3>Funcionamiento del esquema de CDN</h3>
<p>Para trabajar con un <strong>CDN</strong> en el concepto básico lo que se requiere es que las referencias hacia los archivos estáticos que se encuentran en la aplicación web estén apuntando hacia el <strong>CDN</strong> y que este contenga estos archivos.</p>
<p>Un <strong>CDN</strong> normalmente recibe los archivos y los replica dentro de los diferentes servidores y se balancea la carga entre los diferentes servidores.</p>
<p>Existen algunos servicios de <strong>CDN</strong> que simplifican un poco más el concepto extrayendo ellos los archivos del servidor dinámico ya sea la primera vez que se intenta accesar al archivo o posterior a que se vence el archivo.</p>
<h3>Conclusiones</h3>
<p>Los <strong>CDN's</strong> nos ayudan a <strong>disminuir la carga de los servidores de aplicaciones</strong> dándoles la oportunidad de trabajar más <strong>eficientemente</strong> y para lo que fueron destinados, permite además que los exploradores de los <strong>usuarios obtenga los archivos estáticos de una manera más eficiente</strong>.</p>
<p>Debido a que los archivos estáticos son por mucho la mayoría de los archivos que suelen servirse en cada aplicación web, el uso de <strong>CDN's</strong> suelen dar un <strong>incremento en la eficiencia bastante dramático</strong>.</p>
