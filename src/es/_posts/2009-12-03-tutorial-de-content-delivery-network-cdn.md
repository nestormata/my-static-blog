---
layout: es_post
title: Tutorial de Content Delivery Network (CDN)
created: 1259879298
categories: Personal
tags: ['cdn', 'servidor', 'web', 'iis', 'apache', 'optimización']
language: es
thumbnail: http://www.profesional.co.cr/sites/files/cdn_cloud.png
permalink: es/2009/12/03/tutorial-content-delivery-network-cdn-1469/
---
### Introducción
Hace años las computadoras no solían tener la cantidad de recursos que tienen actualmente, por lo que se debía ser muy cuidadoso con el uso responsable y eficiente de los servidores.

Con el tiempo y el aumento de los recursos en los sistemas muchos programadores fueron creciendo en un ambiente en el que no requerían ser tan __eficientes__, pero actualmente los sistemas se han vuelto más móviles y por tanto más pequeños y no tan potentes como lo que estábamos acostumbrados, y también los sistemas han migrado mucho más enfocados a web por lo que la cantidad de usuarios accediendo a los servidores es mucha.  
Esto nos trae a que en la actualidad estemos forzados otra vez (por dicha) a tener la necesidad de ser __eficientes__ en cuanto a la __utilización__ de los __recursos__.  
En un sistema web de alta demanda la gran cantidad de __recursos__ de un __servidor__ se ve __dividida__ entre la __cantidad__ de __usuarios__ __accediendo__ __simultáneamente__, lo cual crea una cantidad limitada de recursos por cada usuario.  

### Qué es CDN?
Una __red de distribución de contenido__ es una __colección de servidores web distribuidos alrededor de multiples localizaciones para distribuir contenido más eficientemente__ a los usuarios. El servidor seleccionado para distribuir el contenido a un específico usuario se basa normalmente en la medida de proximidad de la red.  
Los __CDN's__ son __servidores__ utilizados específicamente para distribuir __contenido estático__, siendo este el más sencillo de distribuir independiente de la plataforma, el conjunto de servidores se visualiza como una __nube__, los datos se encuentran__ distribuidos y replicados__ dentro de esta nube de servidores de manera que cualquiera de los servidores pueda entregar el mismo contenido cuando se le solicite.  

{{ '/sites/files/cdn_cloud.png' | img_tag: 'article-image', '', 'CDN Cloud y como funciona', 599, 458 }}

### Por qué debería usar CDN?
Al utilizar __CDN's__ se le entrega al usuario el __contenido estático__ de manera más __eficientemente__, en beneficio de la __velocidad__ con que el usuario final percibe la respuesta total de la página.  
Además de mejorar la experiencia del usuario, al utilizar un __CDN__ para __distribuir el contenido estático__ se está a su vez __liberando a él o los servidores de aplicacione__s de la carga de procesar una gran parte de estas solicitudes que normalmente son más del 80% o 90% de la __cantidad de solicitudes__ que se hacen al servidor, permitiendo así al servidor de aplicaciones utilizar toda su capacidad para procesar las solicitudes dinámicas.  

### Funcionamiento de los servidores web
Independientemente de la plataforma, los servidores web trabajan en __memoria__ y debido a que los __recursos__ de los __servidores__ son __limitados__ el servidor solo puede __procesar__ un __numero máximo de solicitudes eficientemente__ y un numero máximo de solicitudes antes de colapsar o de dejar de procesarlas.  
Cada solicitud que ingresa al servidor es __atendida en una cola__ la cual puede crecer exponencialmente si el servidor no es capaz de ir liberando la cola con la misma velocidad con la que ingresan solicitudes a esta cola.  
Hay __solicitudes__ que son más fáciles de resolver para el servidor que otras, esto normalmente depende de la cantidad de __archivos y handlers__ que deba abrir para esa solicitud y si lo que requiere esta o no en un __cache__. Dentro de los handlers están también las __conexiones a bases de datos y/u otros sistemas__, como __sockets__ o solicitudes a servidores __externos__.  
Dependiendo de la cantidad y tipo de recursos que se están accediendo además de recursos toma tiempo, lo que hace que las solicitudes en cola tengan que esperar más acumulándose aun más el tiempo que estas y las que siguen deberán esperar.  
Además de esto, existen filtros o procesos previos o posteriores a cada solicitud que agregan tiempo y consumo de recursos a cada uno de las solicitudes.  
Por el __costo__ que tiene crear e __inicializar__ cada __recurso nuevo__, los servidores además suelen crear __pilas de recursos__, como pilas de conexiones a bases de datos o pilas de procesos pre-inicializados para atender a las solicitudes.  
Cada uno de estos procesos tomará la cantidad de memoria que requiera para efectuar lo que la solicitud requiere y si este proceso se recicla es probable que mantenga su uso de memoria aun cuando no todos los procesos que atienda requieran esa misma cantidad de memoria, esto conlleva que cuando se sirven diferentes tipos de solicitudes mezcladas la cantidad de memoria que utilicen los procesos será el del proceso que más requiera memoria, lo cual limita aun más la capacidad de procesar solicitudes más sencillas en sacrificio de poder atender las solicitudes más complejas.  
De aquí que cuando se __separan los tipos de solicitudes en servidores diferentes queda cada servidor optimizado para ese tipo de solicitudes__, permitiéndole trabajar de __manera más eficiente__ y darle un uso mucho más eficaz a los recursos del servidor.  

{{ '/sites/files/memoria_servidor_compartido.png' | img_tag: 'article-image', '', 'representacion de uso de memoria de servidor web, cdn funcionamiento', 560, 464 }}

### Funcionamiento del esquema de CDN
Para trabajar con un __CDN__ en el concepto básico lo que se requiere es que las referencias hacia los archivos estáticos que se encuentran en la aplicación web estén apuntando hacia el __CDN__ y que este contenga estos archivos.  
Un __CDN__ normalmente recibe los archivos y los replica dentro de los diferentes servidores y se balancea la carga entre los diferentes servidores.  
Existen algunos servicios de __CDN__ que simplifican un poco más el concepto extrayendo ellos los archivos del servidor dinámico ya sea la primera vez que se intenta accesar al archivo o posterior a que se vence el archivo.  

### Conclusiones
Los __CDN's__ nos ayudan a __disminuir la carga de los servidores de aplicaciones__ dándoles la oportunidad de trabajar más __eficientemente__ y para lo que fueron destinados, permite además que los exploradores de los __usuarios obtenga los archivos estáticos de una manera más eficiente__.  
Debido a que los archivos estáticos son por mucho la mayoría de los archivos que suelen servirse en cada aplicación web, el uso de __CDN's__ suelen dar un __incremento en la eficiencia bastante dramático__. 

