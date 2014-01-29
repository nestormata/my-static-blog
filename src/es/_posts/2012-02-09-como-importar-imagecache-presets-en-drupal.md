---
layout: es_post
title: Como importar imagecache presets en Drupal
created: 1328849620
categories: Drupal
tags: ['Drupal', 'imagecache', 'Drupal 6']
language: es
permalink: es/2012/02/09/como-importar-imagecache-presets-drupal-1483
---
Hoy tuve la necesidad de importar una serie de presets de imagecache desde otro sitio.  
En las características de imagecache aparece la opción de exportar, pero no hay opción alguna para importar.  
Pero implementarlo no es complicado.

En general puede implementarse en cualquier código de Drupal, pero en este momento lo voy a ejecutar en un update para correrlo una única vez por el update de Drupal, aunque de igual manera podria estar en el install.  
Al usar la opción de export de cada uno de los presets obtenemos un codigo similar al siguiente:  

{% highlight php %}
<?php
$presets = array();
$presets['my-preset-name'] = array (
  'presetname' => 'my-preset-name',
  'actions' =>
  array (
    0 =>
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_scale',
      'data' =>
      array (
        'width' => '80',
        'height' => '100%',
        'upscale' => 0,
      ),
    ),
  ),
);
?>
{% endhighlight %}

Aquí podemos ver que la primer línea es una línea de inicialización del arreglo y luego esta la definición del arreglo.  
En el arreglo hay 2 sencillas partes, la que define el nombre del preset y la que define las diferentes acciones del preset.  
Ahora, si tomamos todos los códigos de exportación que nos entrega drupal y los ponemos juntos, pero recordando remover la línea de iniciaclización de los código siguientes, esto es importante sino estaremos limpiando el arreglo con cada preset que copiamos y solo importariamos el último.  
Estos códigos los ponemos dentro de una funcion de update dentro del archivo de install del modulo y agregamos un pequeño código al final para iterar sobre el arreglo de presets y salvar cada uno y las acciones, obtendriamos el siguiente código:

{% highlight php %}
<?php
// En el archivo "mimodulo.install"
function mimodulo_update_1000() {
  // Copiamos los codigos de exportar cada preset
  // Conservamos solo la primer linea de inicializacion
  $presets = array(); // Esta si se queda
  $presets['my-preset-name'] = array (
    'presetname' => 'my-preset-name',
    'actions' =>
    array (
      0 =>
      array (
        'weight' => '0',
        'module' => 'imagecache',
        'action' => 'imagecache_scale',
        'data' =>
        array (
          'width' => '80',
          'height' => '100%',
          'upscale' => 0,
        ),
      ),
    ),
  );

  // Removemos cada linea de inicializacion
  //$presets = array();
  $presets['my-other-preset-name'] = array (
    'presetname' => 'my-other-preset-name',
    'actions' =>
    array (
      0 =>
      array (
        'weight' => '0',
        'module' => 'imagecache',
        'action' => 'imagecache_scale_and_crop',
        'data' =>
        array (
          'width' => '124',
          'height' => '124',
        ),
      ),
    ),
  );
  // El codigo para iterar y salvar los presets
  foreach($presets as $preset) {
    // Crea el preset usando el nombre
    // Las acciones no son guardadas por esta funcion
    $saved = imagecache_preset_save($preset);
    // Itera sobre cada accion del preset para guardarlas
    foreach($preset['actions'] as $action) {
      // Agrega el preset ID del preset guardado
      $action['presetid'] = $saved['presetid'];
      // Salva la accion al preset
      imagecache_action_save($action);
    }
  }
}
?>
{% endhighlight %}

En resumen, lo único que había que hacer era copiar todos los códigos retornados del export y agregar esas pequeñas líneas para iterar sobre el arreglo y salvar los presets y sus acciones.  
Ahora solo queda correr el update.php y listo.  

Saludos,  
Nestor
