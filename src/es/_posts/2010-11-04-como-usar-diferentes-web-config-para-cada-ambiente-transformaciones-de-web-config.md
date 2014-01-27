---
layout: es_post
title: Como usar diferentes web.config para cada ambiente - Transformaciones de web.config
created: 1288892930
categories: Personal
tags: ['desarrollo', '.Net', 'web.config', 'tip', 'visual studio', 'programación']
language: es
permalink: es/2010/11/04/como-usar-diferentes-webconfig-para-cada-ambiente-transformaciones-webconfig-1473
---
En *.Net framework 4 (Visual Studio 2010)* ahora hay una funcionalidad que permite tener *diferentes configuraciones del web.config* para cada ambiente de desarrollo, pruebas y/o producción. Una solución para un problema de siempre.

Este es un problema de hace tiempo y que por fin Microsoft se decidió a darnos una herramienta para solucionarlo, he visto diferentes implementaciones de esta solución efectuadas por los programadores, pero recomiendo el uso de esta funcionalidad ya que esta disponible en *Visual Studio 2010*.

El problema consiste en que para los que desarrollan web en .Net la configuración se suele y se recomienda que este en el *web.config*, pero usualmente esta configuración debe ser *diferente para cada ambiente*, por ejemplo, para el ambiente local, para un servidor de pruebas, uno de staging y uno o varios de producción, y es un poco complicado resolver como tener *diferentes web.config para cada ambiente* y que esto no implique algo manual para evitar una equivocación a la hora de publicarse la aplicación en cada uno de los ambientes.

Para solucionar esto, *Visual Studio 2010* ahora viene con una funcionalidad que permite *transformar el web.config* durante el proceso de *publicación* para modificar la configuración para cada ambiente, manteniendo *automaticamente diferentes web.config en cada ambiente*.


Pasos:

Primero, no cree el proyecto como un sitio web ("Web Site"), ya que este tipo de proyecto no tiene esta caracteristica, debe crear el proyecto como una aplicación web ASP.Net ("ASP.Net Web Application").

<img src="/sites/nestor.profesional.co.cr/files/webconfig_transformation_1_0.gif" width="597" height="412" alt="Visual Studio 2010 transformación de web.config para diferentes ambientes - Creación de proyecto" />

Al hacer esto notará que se crean unos archivos debajo del Web.config (en el Solution Explorer), cada uno de estos correspondiente a cada una de las configuraciones del Configuration Manager.

<img src="/sites/nestor.profesional.co.cr/files/webconfig_transformation_2.png" width="272" height="103" alt="Visual Studio 2010 transformación de web.config para diferentes ambientes - Diferentes web.config" />
<img src="/sites/nestor.profesional.co.cr/files/webconfig_transformation_3.png" width="262" height="572" alt="Visual Studio 2010 transformación de web.config para diferentes ambientes - Diferentes web.config" />

Ahora vaya al Configuration Manager para crear una nueva configuración para un servidor de producción, asegurese de marcar "Create new project configurations".

<img src="/sites/nestor.profesional.co.cr/files/webconfig_transformation_4.png" width="374" height="185" alt="Visual Studio 2010 transformación de web.config para diferentes ambientes - Cree nueva configuración de proyecto" />
<img src="/sites/nestor.profesional.co.cr/files/webconfig_transformation_5.png" width="409" height="296" alt="Visual Studio 2010 transformación de web.config para diferentes ambientes - Cree nueva configuración de proyecto" />
<img src="/sites/nestor.profesional.co.cr/files/webconfig_transformation_6.gif" width="498" height="303" alt="Visual Studio 2010 transformación de web.config para diferentes ambientes - Cree nueva configuración de proyecto" />

Esto crea una nueva configuración.

<img src="/sites/nestor.profesional.co.cr/files/webconfig_transformation_7.png" width="409" height="296" alt="Visual Studio 2010 transformación de web.config para diferentes ambientes - Nueva configuración de proyecto creada" />

Ahora puede dar click derecho sobre el archivo de Web.config y usar la opción "Add Config Transformations" que agregará un archivo de transformación por cada configuración creada que aun no tenga un archivo de transformación.

<img src="/sites/nestor.profesional.co.cr/files/webconfig_transformation_8.png" width="324" height="270" alt="Visual Studio 2010 transformación de web.config para diferentes ambientes - Agregué transformaciones de configuración" />
<img src="/sites/nestor.profesional.co.cr/files/webconfig_transformation_9.png" width="266" height="571" alt="Visual Studio 2010 transformación de web.config para diferentes ambientes - Diferentes transformaciones para el web.config" />

Cree una nueva configuración de publicación.

<img src="/sites/nestor.profesional.co.cr/files/webconfig_transformation_10.png" width="344" height="62" alt="Visual Studio 2010 transformación de web.config para diferentes ambientes - Creación de configuración de publicación" />
<img src="/sites/nestor.profesional.co.cr/files/webconfig_transformation_11.gif" width="286" height="410" alt="Visual Studio 2010 transformación de web.config para diferentes ambientes - Creación de configuración de publicación" />

##Ejemplo de web.config

{% highlight xml %}
<configuration>
	<appSettings>
		<add key="APIKey" value="5200eb9e591cc4a19178f8fac1c210fc"/>
		<add key="Secret" value="e957123205f4a7f7a95e2d352bcaf444"/>
		<add key="ServiceBase" value="http://localhost:49396/"/>
		<add key="Callback" value="http://localhost:26813/101FTB/"/>
	</appSettings>
	<connectionStrings>
		<add name="MyDBConnectionString" connectionString="Data Source=localhost;Initial Catalog=FreeTechBooks;User ID=Guest" providerName="System.Data.SqlClient"/>
	</connectionStrings>
  ...
</configuration>
{% endhighlight %}

##Ejemplo de transformación de web.config para producción (web.config.produccion)

{% highlight xml %}
<configuration xmlns:xdt="http://schemas.microsoft.com/XML-Document-Transform">
    <appSettings>
        <add value="a44a569d89f09862bdeac3e9e7c155aa" xdt:Transform="SetAttributes(value)" xdt:Locator="Condition(@key='APIKey')"/>
        <add value="9a6e6fbda2558fad51f25b7f62bad80d" xdt:Transform="SetAttributes(value)" xdt:Locator="Condition(@key='Secret')"/>
        <add value="http://www.mysitelive.com/" xdt:Transform="SetAttributes(value)" xdt:Locator="Condition(@key='ServiceBase')"/>
        <add value="http://fbapps.mysitelive.com/myapplive/" xdt:Transform="SetAttributes(value)" xdt:Locator="Condition(@key='Callback')"/>
    </appSettings>
    <connectionStrings>
      <add name="MyDBConnectionString" 
        connectionString="Data Source=ReleaseSQLServer;Initial Catalog=MyReleaseDB;Integrated Security=True" 
        xdt:Transform="SetAttributes" xdt:Locator="Match(name)"/>
    </connectionStrings>
  <system.web>
  </system.web>
</configuration>
{% endhighlight %}

Hay diferentes formas de transformar el web.config, este es un ejemplo sencillo que modifica el value para unos settings y el tag completo para el connectionString.

En el momento en que se hace la publicación Visual Studio modifica el archivo que pone en el servidor.

Para más información de las transformaciones puede leer aquí: <a href="http://msdn.microsoft.com/en-us/library/dd465326(VS.100).aspx" rel="nofollow" >Referencia</a>

