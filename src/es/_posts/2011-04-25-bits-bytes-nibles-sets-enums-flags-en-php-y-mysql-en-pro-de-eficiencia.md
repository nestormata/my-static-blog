---
layout: es_post
title: Bits, Bytes, Nibles, Sets, Enums, Flags en PHP y MySQL en pro de eficiencia
created: 1303769654
categories: Drupal
tags: ['Drupal', 'eficiencia', 'MySql', 'Base de Datos', 'PHP']
language: es
permalink: es/2011/04/25/bits-bytes-nibles-sets-enums-flags-php-mysql-y-drupal-pro-eficiencia-1476
---
Es posible sacar más provecho al espacio y los datos en la base de datos y el codigo, y es de hecho muy importante, para algunos enfoques se puede utilizar datos a nivel de bits de manera eficiente, tanto en el codigo PHP, MySQL y en Drupal.

Antes de mejorar algo o sacarle más provecho es importante entenderlo, para esto vamos a hacer un repaso de algebra booleana.  
Un Byte son 8 bits, 1 byte (tiny int en mysql) nos permite guardar 256 valores diferentes, 2 Bytes (smallint en mysql) nos dan 65.536 valores diferentes y 4 Bytes (int en mysql) nos dan 4.294.967.296 valores diferentes y el BigInt usando 8 Bytes.  
También algunos engines soportan el uso de Bit como tipo de dato, soportando hasta 64 bits por tabla.  
Además, esta los tipos Enum y Set.

##ENUM
El ENUM puede contener hasta 65.535 valores diferentes (y el vacio o cero) y esta catalogado dentro de los tipos de datos de string por la manera en la que se utiliza, ya que cada valor esta asociado a un string y se utiliza como si se entuviera ingresando o sacando strings que dentro del engine son representados por un valor numerico.  
Al final de cuentas, cualquier tipo numerico, inclyendo el Bit puede ser utilizado de la misma manera que un Enum, con la unica diferencia que el valor que representa debera ser interpretado en la aplicación y no es tan legible en la base de datos.  
La manera propuesta en ese caso, es usar un numero para representar un estado, teniendo solamente 1 valor al mismo tiempo salvado por cada dato, lo más usual es utilizar tiny o small ints ya que no se suelen manejar grandes cantidades de flags o estados.  

Un ejemplo de esto es utilizar un campo en la base de datos para indicar el estado actual de una cuenta bancaria, donde digamos que tenemos los siguientes estados:   

<table>
<tr><th>Estado</th><th>Valor numerico</th></tr>
<tr><td>En revision</td><td>0</td></tr>
<tr><td>Denegada</td><td>1</td></tr>
<tr><td>Activa</td><td>2</td></tr>
<tr><td>Suspendida</td><td>3</td></tr>
<tr><td>Inactiva</td><td>4</td></tr>
</table> 

Una cuenta puede contener solo uno de estos valores al mismo tiempo y por eficiencia utilizamos ya sea un Enum que se representa como un valor numerico en la base de datos o un tiny int y en nuestra aplicacion interpretamos cada valor numerico como un estado.

{% highlight sql lineos %}
CREATE TABLE Cuenta (
    Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -- Mas campos
    Estado ENUM('En revision', 'Denegada', 'Activa', 'Suspendida', 'Inactiva') NOT NULL
)
{% endhighlight %}

Y se puede utilizar algo asi:

{% highlight php lineos %}
<?php
// Actualice el estado de la cuenta
$estado = 'Activa';
$cuenta = 123;
$connection->query("UPDATE Cuenta SET Estado = '$estado' WHERE Id = $cuenta");
?>
{% endhighlight %}

Que a nivel de espacio y de datos es equivalente a lo siguiente:

{% highlight sql lineos %}
CREATE TABLE Cuenta (
    Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -- Mas campos
    Estado TINYINT NOT NULL
)
{% endhighlight %}

Y se puede utilizar algo asi:

{% highlight php lineos %}
<?php
define('ESTADO_EN_REVISION', 0);
define('ESTADO_DENEGADA', 1);
define('ESTADO_ACTIVA', 2);
define('ESTADO_SUSPENDIDA', 3);
define('ESTADO_INACTIVA', 4);
$estado = ESTADO_ACTIVA;
$cuenta = 123;
$connection->query("UPDATE Cuenta SET Estado = $estado WHERE Id = $cuenta");
?>
{% endhighlight %}

##SET
Ahora, esta el otro tipo de uso, que consta de utilizar varios valores simultaneos enmascarados en un mismo dato.

Probablemente el ejemplo de uso mas claro es el tipo Set que puede contener 64 valores simultaneos, al utilizar un tipo SET de MySql, se define los diferentes valores que puede contener, se define en strings que son representados por valores numericos de exponente 2, esto permite que cada valor pueda coexistir con los demas ya que cada valor ocupa un bit binario en una posicion diferente.

Tomemos como ejemplo caracteristicas de un producto el cual puede tener los siguientes estados simultaneamente:

<table>
<tr><th>Estado</th><th>Valor Binario</th><th>Valor Numerico</th></tr>
<tr><td>Activo</td><td>00000001</td><td>1</td></tr>
<tr><td>Excento</td><td>00000010</td><td>2</td></tr>
<tr><td>Perecedero</td><td>00000100</td><td>4</td></tr>
<tr><td>En Descuento</td><td>00001000</td><td>8</td></tr>
</table>

_Nota:_ Los valores decimales aumentan en exponente 2, o sea 2 elevado a la posicion del digito.

Como se puede notar de sus valores binarios estos valores puede coexistir al mismo tiempo, por ejemplo, si aplicamos el operador binario "O" (OR) a un par de valores, digamos, que el producto esta activo y en descuento:

{% highlight text %}
00000001 | 00001000 = 00001001
{% endhighlight %}

o que es lo mismo 1+8=9


Y a este podemos agregarlo un estado mas en cualquier momento:

{% highlight text %}
00001001 | 00000010 = 00001011
{% endhighlight %}

Además con la operacion "O Exclusivo" (XOR) podemos remover cualquier estado, por ejemplo, quitemos el estado de activo:

{% highlight text %}
00001011 ^ 00000001 = 00001010
{% endhighlight %}


Esto se puede implementar de la siguiente manera:

{% highlight sql lineos %}
CREATE TABLE Producto (
    Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -- Mas campos
    Estado SET('Activo', 'Excento', 'Perecedero', 'En Descuento') NOT NULL
)
{% endhighlight %}

Y utilizarse algo asi:

{% highlight php lineos %}
<?php
// Busque producto que tenga X estado usando FIND_IN_SET
$estado = 'Activo';
$connection->query("SELECT * FROM Producto WHERE FIND_IN_SET('$estado', Estado)");
// Busque producto con X estado usand Y BINARIO (AND)
$estado = 1;
$connection->query("SELECT * FROM Producto WHERE Estado & $estado");
// En el select, lo que devuelve la base de datos es un string separado por comas para los diferentes valores.
// Agregue un estado a un producto
$producto = 123;
$connection->query("UPDATE Producto SET Estado = Estado | 1 WHERE Id = $producto");
$connection->query("UPDATE Producto SET Estado = 'Activo,Excento' WHERE Id = $producto");
?>
{% endhighlight %}

Que es equivalente a lo siguiente:

{% highlight sql lineos %}
CREATE TABLE Producto (
    Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -- Mas campos
    Estado TINYINT NOT NULL
)
{% endhighlight %}


{% gist nestormata/c4e806d395b09f2799c2 %}

Esta es una manera de reducir el tamaño de los datos en la base de datos de manera eficiente.


