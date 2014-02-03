---
layout: es_post
title: Multiples cuentas de Skype al mismo tiempo en Mac OS o Windows
created: 1337116146
categories: Personal
tags: ['tip', 'skype', 'multiples cuentas', 'Windows', 'mac os' ]
language: es
permalink: es/technology/multiples-cuentas-skype-al-mismo-tiempo-mac-os-o-windows/
translation: technology/multiple-skype-accounts-mac-os-or-windows-same-time/
---
Yo uso una cuenta de Skype personal y otra para la compañia para la que trabajo y por lo tanto tuve que encontrar una solución para tener ambas funcionando al mismo tiempo.

## Multiples instancias de Skype en Windows XP/Vista/7
En Windows is bastante sencillo, solo hay que ejecutar Skype.exe con el parametro /secondary, lo cual se puede hacer creando un atajo en el menu de programas.

1. Localice el ejecutable de __Skype__ (`C:/Program Files(x86)/Skype/Phone/Skype.exe` o `C:/Program Files/Skype/Phone/Skype.exe` o algo parecido)
2. Click derecho en el archivo `Skype.exe`
3. Seleccione _"Create shortcut"_ ("Crear atajo")
4. Después mueva este atajo a donde usted prefiera (como el _Escritorio o el Menu Programas_)
5. Click derecho sobre el atajo, seleccione _"Properties"_ ("Propiedades")
6. En el campo `"Target"` ("Destino") agregue `/secondary` al final, de esta manera por ejemplo (`"C:/Program Files(x86)/Skype/Phone/Skype.exe" /secondary`)
7. Presione `OK` y listo, puede abrir su instancia primaria (o default) de __Skype__ de la manera habitual y la instancia secundaria con este atajo y tener 2 cuentas de Skype funcionando al mismo tiempo una en cada instancia

## Multiples instancias de Skype en Mac OS
En Mac OS es un poco mas complicado ya que el ejecutable no soporta la opción _"secondary"_.  
La mejor opción que he encontrado es utilizar una cuenta diferente para iniciar el programa y he solucionado un par de problemas que vienen con esta solución.

1. Cree un nuevo usuario (solo hay que hacerlo una vez): 
    - Vaya a Preferencias del sistem (System Preferences) -> Sistema (System) -> Usuarios y Grupos (Users & Groups)
    - Desbloquee la pantalla si se requiere
    - Click en la señal de + para agregar un nuevo usuario
    - Ejija usuario estandard y llene los datos, puede utilizar la misma clave que utiliza en su usuario actual _(recuerde el nombre de la cuenta, la ocupará en los pasos siguientes)_  

2. Inicie Skype utilizando la nueva cuenta (hacer esto cada vez que ocupe utilizar su cuenta secundaria de Skype)
    - Abra la terminal (Abra el Spotlight y escriba terminal)
    - Cambie de usuario, para hacer eso escriba los siguiente en la terminal, remplace `otheruser` con el nombre de la cuenta que usted creó.

          su otheruser

    - Se le solicitará que ingrese la clave de esta cuenta
    - Ejecute Skype, para hacerlo escriba los siguiente en la terminal:

          /Applications/Skype.app/Contents/MacOS/Skype

    _Nota:_ este es un pequeño tip, usted podrá cerrar la terminal una vez que se haya logueado a Skype, le advertirá que el programa se cerrará, pero esto no ocurre, así que pruebe cerrar la ventana de la terminal.

3. Un ultimo tip es que usted puede crear un directorio compartido para salvar los archivos que alguien le envía a través de Skype, de otra manera usted tendría que loguearse como el otro usuario para poder tener acceso a estos archivos (me dí cuenta después de que alguien me envió unos archivos la primera vez)
    1. Abra el Finder
    2. En el menu seleccione _Ir_ (Go) -> _Ir a folder..._ (Go to folder...)
    3. Ingrese: `/Users/Shared` y presione _Ir_ (Go)
    4. En el menu seleccione _Archivo_ (File) -> _Nuevo Folder_ (New Folder) y cree un nuevo folder, lo puede llamar Skype
    5. En su segunda instancia de __Skype__ seleccione en el menu _Preferencias_ (Preferences) -> _General_
    6. Localice la opción _"Salvar archivos en:"_ ("Save files in:") y seleccione el directorio compartido que usted creó, ahora cuando le envien archivos estos se salvaran en el directorio compartido. Usted puede agregar el folder compartido a sus favoritos para un rápido acceso

