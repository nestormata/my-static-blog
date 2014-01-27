---
layout: es_post
title: Multiples cuentas de Skype al mismo tiempo en Mac OS o Windows
created: 1337116146
categories: Personal
tags: ['tip', 'skype', 'multiples cuentas', 'Windows', 'mac os' ]
language: es
permalink: es/technology/multiples-cuentas-skype-al-mismo-tiempo-mac-os-o-windows
---
Yo uso una cuenta de Skype personal y otra para la compañia para la que trabajo y por lo tanto tuve que encontrar una solución para tener ambas funcionando al mismo tiempo.

<h2>Multiples instancias de Skype en Windows XP/Vista/7</h2>
En Windows is bastante sencillo, solo hay que ejecutar Skype.exe con el parametro /secondary, lo cual se puede hacer creando un atajo en el menu de programas.

<ol>
<li>Localice el ejecutable de Skype (C:/Program Files(x86)/Skype/Phone/Skype.exe o C:/Program Files/Skype/Phone/Skype.exe o algo parecido)</li>
<li>Click derecho en el archivo Skype.exe</li>
<li>Seleccione "Create shortcut" ("Crear atajo")</li>
<li>Después mueva este atajo a donde usted prefiera (como el Escritorio o el Menu Programas)</li>
<li>Click derecho sobre el atajo, seleccione "Properties" ("Propiedades")</li>
<li>En el campo "Target" ("Destino") agregue /secondary al final, de esta manera por ejemplo ("C:/Program Files(x86)/Skype/Phone/Skype.exe" /secondary)</li>
<li>Presione OK y listo, puede abrir su instancia primaria (o default) de Skype de la manera habitual y la instancia secundaria con este atajo y tener 2 cuentas de Skype funcionando al mismo tiempo una en cada instancia</li>
</ol>

<h2>Multiples instancias de Skype en Mac OS</h2>
En Mac OS es un poco mas complicado ya que el ejecutable no soporta la opción "secondary".
La mejor opción que he encontrado es utilizar una cuenta diferente para iniciar el programa y he solucionado un par de problemas que vienen con esta solución.

<ul>
<li>Cree un nuevo usuario (solo hay que hacerlo una vez): 
  <ol>
    <li>Vaya a Preferencias del sistem (System Preferences) -> Sistema (System) -> Usuarios y Grupos (Users & Groups)</li>
    <li>Desbloquee la pantalla si se requiere</li>
    <li>Click en la señal de + para agregar un nuevo usuario</li>
    <li>Ejija usuario estandard y llene los datos, puede utilizar la misma clave que utiliza en su usuario actual <em>(recuerde el nombre de la cuenta, la ocupará en los pasos siguientes)</em></li>
  </ol>
</li>
<li>Inicie Skype utilizando la nueva cuenta (hacer esto cada vez que ocupe utilizar su cuenta secundaria de Skype)
  <ul>
    <li>Abra la terminal (Abra el Spotlight y escriba terminal)</li>
    <li>Cambie de usuario, para hacer eso escriba los siguiente en la terminal, remplace <em>otheruser</em> con el nombre de la cuenta que usted creó.</li>
  </ul>
</li>
</ul>
{% highlight bash %}
su otheruser
{% endhighlight %}
Se le solicitará que ingrese la clave de esta cuenta
<ul>
<li>
  <ul>
    <li>Ejecute Skype, para hacerlo escriba los siguiente en la terminal:</li>
  </ul>
</li>
</ul>
{% highlight bash %}
/Applications/Skype.app/Contents/MacOS/Skype
{% endhighlight %}
Nota: este es un pequeño tip, usted podrá cerrar la terminal una vez que se haya logueado a Skype, le advertirá que el programa se cerrará, pero esto no ocurre, así que pruebe cerrar la ventana de la terminal.
<ul>
<li>Un ultimo tip es que usted puede crear un directorio compartido para salvar los archivos que alguien le envía a través de Skype, de otra manera usted tendría que loguearse como el otro usuario para poder tener acceso a estos archivos (me dí cuenta después de que alguien me envió unos archivos la primera vez)
  <ol>
    <li>Abra el Finder</li>
    <li>En el menu seleccione Ir(Go) -> Ir a folder...(Go to folder...)</li>
    <li>Ingrese: /Users/Shared y presione Ir(Go)</li>
    <li>En el menu seleccione Archivo(File) -> Nuevo Folder(New Folder) y cree un nuevo folder, lo puede llamar Skype</li>
    <li>En su segunda instancia de Skype seleccione en el menu Preferencias(Preferences) -> General</li>
    <li>Localice la opción "Salvar archivos en:"("Save files in:") y seleccione el directorio compartido que usted creó, ahora cuando le envien archivos estos se salvaran en el directorio compartido. Usted puede agregar el folder compartido a sus favoritos para un rápido acceso</li>
  </ol>
</li>
</ul>
