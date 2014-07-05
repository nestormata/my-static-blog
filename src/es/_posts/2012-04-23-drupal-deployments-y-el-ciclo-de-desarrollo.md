---
layout: es_post
title: Drupal Deployments y el Ciclo de Desarrollo
created: 1335223847
categories: Drupal
tags: ['Drupal', 'deployment', 'servidor', 'control versiones', 'svn', 'git']
language: es
permalink: es/drupal-deployments-y-ciclo-desarrollo/
---
## El problema
Cuando trabajamos en nuestro ambiente local, todo esta bien, pero cuando tenemos que desarrollar para sitios en linea, cuando tenemos equipos de trabajo, cuando tenemos múltiples servidor y diferentes ambientes se puede tornar un poco complicado y propenso a errores.

Para esto hay muchas herramientas y soluciones para poder manejar el proyecto integrado entre equipos de desarrollo, para disminuir los errores y los riesgos y para simplificar los procesos.

__El problema se puede resumir en:__
- Integración
- Manejo Versiones
- Seguridad del código
- Pruebas
- Puesta en producción
- A esto en Drupal se le agrega un problema, la configuración y estructura que existe en base de datos y no en código

## Integración del código y manejo de versiones
Estoy seguro que a mas de uno le ha pasado, aunque sea escribiendo un documento en word o programando algo, que se va la luz y se pierde todo el trabajo hecho.   
Y no es de extrañarse que alguien pierda en algún momento trabajo en el que invirtió mucho mas tiempo.   
Tambien, si se ha trabajado en equipos de programación se ha tenido que resolver problemas de conflictos entre lo que se esta haciendo.   
Para esto lo mejor y no hay excusa para no hacerlo, es utilizar un control de versiones como Git o SVN.   
Hay sitios que te permiten tener un control de versiones de manera gratuita como [Unfuddle](http://www.unfuddle.com).

__Con un control versiones se puede:__
- Mantener el historial de los cambios
- Haciendo sencillo volver a una versión anterior
- Comparar los cambios que pudieron producir un problema
- Integrar el código de varios programadores
- Mantener diferentes versiones en diferentes ambientes
- Crear esquemas de aprobación
- Contribuye como herramienta para el proceso de deployment

## Recomendaciones del uso de control de versiones en Drupal
Crear una estructura que incluya no solo el sitio publico, sino también, documentos, scripts y cualquier otro tipo de archivo requerido, una posibilidad puede ser una estructura como la siguiente:

{{ '/sites/files/vc_path_structure.png' | img_tag: 'article-image', '', '', 294, 300 }}

Dentro del directorio de archivos recomiendo crear un archivo de texto o un excel sencillo que contenga los parches que se han aplicado al sitio o buscar alguna otra manera de llevar registro de estos.   
En los script pueden estar scripts de herramientas o script de base de datos.  
En SVN yo recomiendo a veces llevar snapshots de la base de datos en el control de versiones, pero en Git se vuelve complicado por la forma de trabajar de Git, ya que en Git es un archivo único y aunque se quiera bajar una versión del sitio siempre hay que bajar una versión completa que incluiría todos los archivos de base de datos que pueden llegar a ser muy grandes y afectan el proceso de obtención de código en el control de versiones y esto puede ser critico en algunas circunstancias.

## El directorio files
Usualmente no se recomienda ingresar el directorio files dentro del control de versiones, esto debido a que puede crecer mucho y también puede adquirir muchos archivos diferentes desentronizados en los diferentes ambientes en que se trabaje, generando a veces problemas y hasta borrar archivos cuando se actualiza el código en los diferentes ambientes (y lo mismo aplica para los directorios de cache).

__Para esto hay 2 recomendaciones:__

- Crear una regla de exclusion del directorio
  
  {{ '/sites/files/files_dir.png' | img_tag: 'article-image', '', '', 319, 269 }}
- Colocar el directorio fuera del los directorios públicos del servidor web y crear un link simbólico hacia este directorio
  
  {{ '/sites/files/symlink.png' | img_tag: 'article-image', '', '', 407, 227 }}

En caso de no utilizar la opción del link simbólico recomiendo mover el directorio files a /sites/files y no dentro del directorio especifico del sitio, esto debido a que a veces hay que cambiar de nombre el sitio o se trabaja con diferentes nombres en los diferentes ambientes y esto puede causar problemas.

## Reglas
Es bueno diseñar reglas en cada equipo de trabajo, esto puede evitar muchos problemas.

__Por ejemplo__:
- No se permite modificaciones directas al o los servidores de producción, sino solo a través del esquema de deployment, sin importar la urgencia
- Definir días y horas para los pases a producción
- Definir protocolos para el pase a producción de casos de alta prioridad
- Definir el protocolo de aprobación y pase a producción
- Definir el formato de comentarios de cada commit, es importante que cada commit al control de versiones tenga algún tipo de comentario, corto, pero significativo, esto agiliza el proceso de revisión de lo que se efectuará en cada pase a producción

## Información importante de los pases
En todo momento se debe poder saber que versión esta en cada ambiente, cuando se puso ahí, que contiene y que diferencias hay con el próximo pase.   
Cada pase a producción debería estar aprobado por algún responsable después de haber sido probado, no solo que arregla el problema o agrega la mejora, sino no que incrusta un nuevo problema.   
Es importante siempre hacer un respaldo de la base de datos y de ser requerido de los archivos del sitio antes de cada pase a producción.   
Tener un protocolo de rollback para ser capaces de volver a nuestro estado anterior, no podemos garantizar que todos los pases a producción van a ser infalibles y podríamos tener que hacer rollback algunas veces, pero debemos estar preparados para poder lograrlo.

## Unit testing (unidades de prueba)
Es recomendable, aunque implica toda una cultura para que pueda valer la pena.   
Algunas personas apoyan y otras critican el TDD (Test Driving Development), sea o no que utilicemos TDD, aún así podemos crear unidades de prueba para unidades especificas y críticas de nuestra aplicación.  
El utilizar unidades de prueba nos ayuda a garantizar que al agregar una mejora no estamos ingresando un problema rompiendo algo que ya funcionaba.

## Documentación
A veces obviamos lo importante que pueden ser documentar ciertas cosas básicas.   
Nos pueden liberar de molestias durante nuestras vacaciones o de tratar de localizar a alguien durante sus vacaciones.  
No es tan increíble que nadie pueda ingresar a los servidores si el único que conoce los accesos tuvo un accidente o decidió renunciar sin dar pre aviso.   
Documentar los basico es necesario   
La información de los diferentes servidores   
Las claves (de manera seLgura por favor)   
Los directorios importantes   
Los procedimientos de respaldo y restore   
Las configuraciones   
Procedimientos importantes  
Etc.

Un ejemplo podría ser guardar alguna de esta información en el control de versiones

## El proceso
Es importante que los procesos sean claros, en cada empresa y cada proyecto es diferente, pero en todos es importante.

## Enfoques de pases de código y archivos
__Pull from server:__ Personalmente  no me agrada mucho, porque considero que en un servidor de producción no deben haber librerías y herramientas de desarrollo como el control de versiones, y en algunos casos no debe de haber acceso del servidor hacia afuera.   
__Push to server:__ En este caso el se publica hacia cada servidor lo que se requiere, permite hacer deploy de diferentes esquemas a diferentes tipos de servidores, y permite desde un punto centralizado controlar varios servidores.   
En combinación de los esquemas anteriores  
Enfoque de links simbolicos: algunas empresas o herramientas trabajan con el esquema de que cada pase se efectúa un directorio nuevo con un identificador basado en la versión o en el tiempo y se utiliza links simbólicos para indicar al servidor web que ya no utilice el deploy anterior sino este nuevo directorio. En este enfoque es necesario utilizar el esquema de links simbólicos para los directorios de files y cache como lo habíamos discutido anteriormente.

{{ '/sites/files/versiones_simbolicas.png' | img_tag: 'article-image', '', '', 262, 276 }}

## Manejo de las configuraciones en base de datos
Si lo único que tuviéramos que pasar a los servidores fuera código, el proceso seria relativamente sencillo como ya vimos, pero, en el caso de Drupal hay muchas configuraciones y estructuras que están en la base de datos, podemos intentar manejar muchas de estas por código, pero aún así no serian todas y mantendríamos el problema.
Si es nuestro primer pase a producción es sencillo, se envía un snapshot completo de la base de datos, pero el problema comienza cuando ya el sitio ha estado en producción por un momento y empieza a adquirir información ahí, la cual ya no se encuentra en las bases de datos de pruebas y desarrollo.
A partir de ese momento si  hacemos un cambio en cualquiera de las configuraciones que están en base de datos, hacer el pase se vuelve mas complejo y requerimos de soluciones mas creativas.

## Maneras de resolver este problema
__Update hooks:__ Utilizar el hook_update_N de los .install de los modulos para manejar las diferencias, modificar la información y hacer los cambios necesarios. El problema es que puede requerir mucho trabajo y habrán algunas circunstancias difíciles de codificar ahí.   
__SQL Scripts:__ Aplicar query scripts directamente a la base de datos. Drupal es una infraestructura compleja, y que se vuelve mas compleja y con mas dependencias a cuantos mas modulos tiene instalado, debido a su esquema de hooks es casi imposible saber a ciencia cierta que datos se modifican con cada acción. Un esquema de modificaciones directas puede causar problemas.   
__Patterns:__ El uso de este modulo implica definir patrones de las modificaciones a los datos, en si es un esquema complejo y podría tener el mismo problema de los SQL scripts.   
__Exportables:__ Muchos modulos, principalmente los que utilizan el API de Chaos Tools, suelen tener la opción de exportar la configuración, de manera que se pueda agregar a archivos de código y utilizarse desde ahí. Requiere bastante trabajo aunque son buenas opciones, excepto que no todos los módulos lo implementan y hay muchos cambios que aún así tendremos que resolver de alguna otra manera.   
__Documentacion de pasos manuales:__ Es un proceso tedioso, pero probablemente todos lo hemos utilizado mas de una vez, consiste en documentar los pasos para replicar los cambios en el servidor al que se efectúa el pase. El problema es que ademas del tiempo que se aumenta el pase, es muy propenso a errores.   
__Database Diff:__ Consiste en utilizar alguna herramienta para analizar las diferencias en las estructuras y datos de la base de datos para generar el script SQL para aplicarlos. Es muy buena opción si se tiene la herramienta correcta.   
__Features:__ No se desarrollo como un método de efectuar pases, sino mas bien de generar características que fueran instalables en un sitio, pero se ha estado utilizando para efectuar pases. Con ciertas precauciones suele ser un método bastante adecuado.

## Features
El modulo features permite inspeccionar las modificaciones en la configuracion y generar los el codigo de nuevos modulos de features que se pueden instalar y actualizar en los sitios llevando consigo estos cambios efectuados en las configuraciones.   
De esta manera se pueden agregar estas modificaciones y configuraciones al código y manejarlo dentro del control de versiones y obtener así un esquema mas sencillo y fiable de pases  

[Archivo de la presentación](http://c3434681.r81.cf0.rackcdn.com/deployments-ciclo-desarrollo-drupal-drupalcamp-2012.pdf)
