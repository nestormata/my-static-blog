---
layout: es_post
title: Como indexar información extra en Drupal 6 y 7
created: 1379365135
categories: Drupal
tags: ['Drupal', 'index', 'motor de búsqueda', 'indice']
language: es
permalink: es/desarrollo/como-indexar-informacion-extra-drupal-6-y-7
translation: development/how-index-extra-data-drupal-6-and-7
---
Es muy sencillo agregar palabras para ser indexadas en un nodo o entidad en Drupal de manera que el nodo se encuentre por estas palabras aún si estas palabras no se encuentran en el texto o si se desea agregarles mayor relevancia.

Antes de empezar a escribir código (el cual será muy sencillo) necesitamos entender un poco sobre como trabaja, lo cual nos lleva a hablar un poco sobre motores de búsqueda.

Los motores de búsqueda tienen 2 grandes partes:
1. __El indexador:__ este es probablemente la parte más importante y la más mágica (y por mágica me refiero a matemática).
2. __El buscador:__ este es la parte que trabaja en el momento en que hacemos una búsqueda y si esta parte trabaja bien es porque todo el trabajo duro fue llevado a cabo por el indexador, y adicionalmente una buena arquitectura para guardar los datos y obtenerlos rápido.

En el caso de la búsqueda default de Drupal, __Solr__, __Sphinx__ y la mayoría de motores de búsqueda que se utilizan con __Drupal__ ellos no guardan realmente los datos, ellos reciben el contenido para poder analizar las palabras y guardan la referencia al nodo que luego Drupal utiliza para armar los resultados.

Después de analizar los datos las palabras son extraídas y cada una es considerada con una nota basada en cosas como la frecuencia (cuantas veces aparece en el texto) y la relevancia basada en el código HTML que las encierra.

Por ejemplo, digamos que tenemos lo siguiente en un contenido:
- Una palabra que aparece 2 veces en un párrafo
- Una palabra encerrada en un tag __strong__
- Una palabra encerrada en un tag de encabezado 2 (H2)
- Una palabra encerrada en un tag de encabezado 1 (H1)

En este caso las notas quedan algo así:
- La palabra en el párrafo obtiene 1 punto por aparición así que 2 puntos en total
- La palabra encerrada en el tag strong obtiene 3 puntos
- La palabra encerrada por el H2 obtiene 18 puntos
- La palabra encerrada por el H1 obtiene 21 puntos

De esta manera cuando se busca utilizando algunas de estas palabras mostrará primero los nodos con mayores notas para esas palabras.

_Tip: Recuerde dar importancia a lo que usted quiere que la tenga (use strong, heading y otros tags para definir lo que mayor importancia tiene), esto aplica tanto para la búsqueda como para SEO_

De esa manera el usuario que hace una búsqueda tiene más posibilidades de encontrar lo que esta buscando.

La lista completa de los puntajes asignados por el proceso de indexación por defecto es la siguiente:
- __H1:__ 25 puntos 
- __H2:__ 18 puntos
- __H3:__ 15 puntos
- __H4:__ 12 puntos
- __H5:__ 9 puntos
- __H6:__ 6 puntos
- __U, B, I, EM__ y __STRONG:__ 3 puntos
- __A:__ 10 puntos

Así que las palabras encerradas por esos tags acumularan esos puntajes y habrá más punto cuantas más veces aparezcan o por la anidación de varios de los tags.

Ahora que tenemos una idea de como funciona podemos manipularlo.

Digamos que ocupamos agregar un set de palabras o que queremos agregar el nombre completo del autor a la lista de palabras sobre las cuales puedo encontrar cada nodo y queremos asignarle un puntaje alto a estas palabras.

Esto es sencillo y ocurre en el tiempo de la indexación, no en el tiempo de la busqueda (en el tiempo de busqueda todos los puntajes ya han sido asignados previamente por la indexación).

Durante el tiempo de indexación ocurren 2 cosas en Drupal (entre otras cosas):
1. Se llama a la operación de vista del nodo para obtener el HTML que se suele desplegar cuando se despliega el nodo y se usa este HTML para procesarlo para la indexación de palabras.
2. Se llama la operación de "update index" en el hook_nodeapi (Drupal 6) o hook_node_update_index (Drupal 7) y el HTML resultante se adjunta al de la vista del nodo para la indexación.

De esta manera tenemos 2 lugares en los cuales manipular, el primero en la vista del nodo se puede agregar y manipular lo que se devuelve, pero ese mismo HTML será utilizado para el despliegue del nodo.

Pero si queremos agregar las palabras al indice pero no al despliegue del contenido entonces devolvemos la información en el update index.

Aquí hay un ejemplo de como hacerlo:

{% highlight php %}
<?php
// Drupal 6
function mimodulo_nodeapi(&$node, $op, $a3 = NULL, $a4 = NULL) {
  if ($op == "update index") {
    $author_id = $node->uid;
    // buscamos la información del nombre completo del profile del autor y lo ponemos en la variable $author_full_name
    return "<h2>" . $author_full_name . "</h2>";
  }
}
?>
{% endhighlight %}

{% highlight php %}
<?php
// Drupal 7
function mimodulo_node_update_index($node) {
  $author_id = $node->uid;
  / buscamos la información del nombre completo del profile del autor y lo ponemos en la variable $author_full_name
  return "<h2>" . $author_full_name . "</h2>";
}
?>
{% endhighlight %}

Con este código el indexador considerará el nombre completo del autor en las palabras con relevancia para el nodo, haciendo que se muestre el nodo en los resultados de buscar el nombre del autor, o el apellido o más aún si se buscan usando ambos (aumentaría el puntaje).

Con pocas lineas de código logramos agregar más palabras y manipular el puntaje de estas para la indexación de nodos.

