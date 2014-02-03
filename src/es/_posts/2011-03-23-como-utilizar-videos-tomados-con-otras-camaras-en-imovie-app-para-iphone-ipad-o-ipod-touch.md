---
layout: es_post
title: Como utilizar videos tomados con otras camaras en iMovie app para iPhone, iPad o iPod Touch
created: 1300890822
categories: Personal
tags: ['ipod touch', 'iphone', 'imovie', 'ipad', 'importar video']
language: es
permalink: es/2011/03/23/como-utilizar-videos-tomados-otras-camaras-imovie-app-para-iphone-ipad-o-ipod-touch-1475/
translation: 2011/03/22/how-import-other-camera-videos-imovie-iphone-ipad-or-ipod-touch-1474/
---
Recientemente compré el __iPod Touch__ de 4ta generación (también aplica al __iPad__ y al __iPhone__) e intenté usar videos que habia tomado previamente en mi camara, pero el __iMovie app__ no me muestra estos videos para utilizarlos, solo me muestra los que se tomaron con el mismo iPod Touch, aquí les enseñaré como lograr usar otros videos en el __iMovie app__.

El problema de que el __iMovie app__ no te permita elegir videos no tomados con el __iPod Touch (o el iPad o iPhone)__ realmente radica en una restricción de formato, el formato del video no solo debe ser un formato compatible para visualizar en el __iPod Touch o iPad o iPhone__, sino que debe tener el mismo formato con el que se crean los videos en el dispositivo, o sea que si se convierte cualquier video al formato correcto puede ser utilizado en __iMovie__ para crear y editar tus propios videos.  
Les enseñaré 2 maneras de lograrlo, la primera desde el mismo dispositivo y la segunda desde la computadora, que en mi caso es una PC, pero el proceso puede ser logrado desde cualquier computadora.  

## Desde el mismo dispositivo (iPod Touch, iPhone or iPad)
Se puede utilizar otro app de edición de video que permita tomar un video cualquiera de su colección de videos, editarlo y exportarlo.  
Voy a explicar como hacerlo usando ReelDirector app, que por cierto es una buena aplicación para editar videos parecido al iMovie
{{ '/sites/nestor.profesional.co.cr/files/reeldirector.png' | img_tag: 'small-image', '', 'ReelDirector - Como utilizar videos tomados con otras camaras en iMovie app para iPhone, iPad o iPod Touch', 58, 58 }}

1. Primero, necesita convertir su video a un formato compatible con el iphone/ipod/ipad para poder importarlo al dispositivo, para esto puede utilizar una aplicación gratis como [Handbreadk](http://handbrake.fr/), que tiene presets para exportar a la mayoria de los dispositivos comunes.
1. Coloque el video convertido en una de sus librerias que se sincronizan con el dispositivo, marque la opción de sincronizar videos y sincronice.
    {{ '/sites/nestor.profesional.co.cr/files/001_import_videos.png' | img_tag: 'article-image', '', 'Importar videos - Como utilizar videos tomados con otras camaras en iMovie app para iPhone, iPad o iPod Touch', 523, 132 }}
1. Cree un nuevo projectos en ReelDirector y agregue el video que importó, en el caso de ReelDirector el mantendrá el audio tal cual venia en el video original al momento de salvar el projecto y esto probablemente hará que no se pueda utilizar el video en iMovie, para eso remueva el audio del video en el proyecto.
    {{ '/sites/nestor.profesional.co.cr/files/002_create_proejct.png' | img_tag: 'article-image', '', 'Cree un projecto en ReelDirector - Como utilizar videos tomados con otras camaras en iMovie app para iPhone, iPad o iPod Touch', 220, 98 }}
    {{ '/sites/nestor.profesional.co.cr/files/003_set_project_settings.png' | img_tag: 'article-image', '', 'Defina las propiedades del projecto en ReelDirector - Como utilizar videos tomados con otras camaras en iMovie app para iPhone, iPad o iPod Touch', 241, 123 }}
    {{ '/sites/nestor.profesional.co.cr/files/005_select_video_type.png' | img_tag: 'article-image', '', 'Agregue su video en ReelDirector - Como utilizar videos tomados con otras camaras en iMovie app para iPhone, iPad o iPod Touch', 220, 330 }}
    {{ '/sites/nestor.profesional.co.cr/files/007_choose_video.png' | img_tag: 'article-image', '', 'Seleccione el video a importar en ReelDirector - Como utilizar videos tomados con otras camaras en iMovie app para iPhone, iPad o iPod Touch', 241, 190 }}
1. Salve, renderice y exporte el video.
1. Ahora ya puede utilizar el video en su proyecto de iMovie (sin el audio original)

## Desde su computadora usando un convertidor de video
Usted necesitará un buen convertidor de video que le permita escoger en una manera customizada no solo el formato del video, sino también del audio, en mi caso utilicé Adobe Media Encoder

1. Agregue el video que quiere convertir
    {{ '/sites/nestor.profesional.co.cr/files/b002_adobe_media_encoder.png' | img_tag: 'article-image', '', 'Agruegue el video a convertir - Como utilizar videos tomados con otras camaras en iMovie app para iPhone, iPad o iPod Touch', 358, 374 }}
    {{ '/sites/nestor.profesional.co.cr/files/b003_select_video.png' | img_tag: 'article-image', '', 'Seleccione el video a ser convertido - Como utilizar videos tomados con otras camaras en iMovie app para iPhone, iPad o iPod Touch', 450, 333 }}
1. Ingrese a "settings" para definir las opciones de los codecs
    {{ '/sites/nestor.profesional.co.cr/files/b004_go_to_settings.png' | img_tag: 'article-image', '', 'Ingrese a settings - Como utilizar videos tomados con otras camaras en iMovie app para iPhone, iPad o iPod Touch', 460, 263 }}
1. En la opción del formato elija "QuickTime"
    {{ '/sites/nestor.profesional.co.cr/files/b005_settings_quicktime.png' | img_tag: 'article-image', '', 'Seleccione QuickTime en el formato - Como utilizar videos tomados con otras camaras en iMovie app para iPhone, iPad o iPod Touch', 405, 57 }}
1. En la pestaña de Video elija el codec = "H.264"
    {{ '/sites/nestor.profesional.co.cr/files/b006_settings_video_h264.png' | img_tag: 'article-image', '', 'Elija video codec H.264 - Como utilizar videos tomados con otras camaras en iMovie app para iPhone, iPad o iPod Touch', 420, 109 }}
1. En la pestaña de Audio elija Audio Codec = "AAC", Sample Rate = 44100 Hz y Channels = "Mono"
    {{ '/sites/nestor.profesional.co.cr/files/b007_settings_audio.png' | img_tag: 'article-image', '', 'Elija audio codec AAC - Como utilizar videos tomados con otras camaras en iMovie app para iPhone, iPad o iPod Touch', 426, 274 }}
1. Exporte su video, y ahora este tiene el formato que le pertirá utilizarlo en iMovie.
1. Coloque su video en alguna de sus librerias de imagenes que se sincronizan con su dispositivo y luego en iMovie seleccione su video, que probablemente estará en el inicio de la lista por su fecha de creación.

Personalmente prefieron la segunda opción, es una buena opción para utilizar esos videos que tomamos con otras camaras o dispositivos y tener la posibilidad de usarlos en iMovie para crear y editar tus propios videos.  
Disfruten y dejenme saber si encuentran otra herramienta que hagan las cosas más fáles o que sea gratis para compartirla con los demás.

-Nestor
