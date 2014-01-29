---
layout: es_post
title: Como configurar OpenDNS, que hago cuando tengo problemas de DNS
created: 1259674875
categories: Personal
tags: ['dns', 'opendns', 'como', 'configurar', 'problemas']
language: es
permalink: es/2009/12/01/como-configurar-opendns-que-hago-cuando-tengo-problemas-dns-1466
---
<p><img width="93" height="37" border="0" align="left" src="http://www.opendns.com/img/opendns.gif" alt="OpenDNS como configurarlo" />&nbsp;Si sueles tener problemas de <strong>DNS</strong>, si vives en <strong>Costa Rica</strong> probablemente de vez en cuando los tienes con el <strong>ICE, RACSA o CableModem</strong>, o simplemente quieres tener más <strong>control para restringir accesso a páginas o sitios con contenidos obsenos</strong> o quieres estar un poco más seguro en contra del <strong>phishing</strong>, entonces <strong>OpenDNS</strong> es una buena opcción.</p>

<p><strong>Qué es un DNS?</strong><br />
<strong>DNS es la nomenclatura de Domain Name Server</strong>, cuando usas internet siempre tienes por lo menos 1 DNS asignado, este es un servidor que se encarga de traducir cada <strong>dominio</strong> (por ejemplo nestor.profesional.co.cr) por una <strong>dirección IP</strong> (por ejemplo 67.23.36.248) que es la dirección de como llegar al servidor de internet que buscas.<br />
Ocasionalmente el DNS de tu proveedor de internet puede fallar y como resultado aunque tengas conexión a internet no puedes ingresar a ninguna página debido a que tu computadora no sabe como traducir el dominio a una dirección IP.</p>
<p><strong>Qué es OpenDNS?</strong><br />
<strong>OpenDNS</strong> es una serie de <strong>servidores DNS</strong> optimizados, balanceados y distribuidos de muy alta confiabilidad y con la opción de ser utilizados de manera gratuita para reemplazar los DNS's que te asigna tu proveedor de internet.<br />
Además de ser más confiables y con mejor velocidad de respuesta, tienen opciones adicionales, puedes simplemente configurarlos y listo, pero también puedes crear una cuenta con ellos y te daría la oportunidad de configurar opciones o pagar y tener aun más opciones.<br />
Dentro de las opciones que te ofrecen esta la de <strong>filtrado de dominios</strong> y<strong> revisión del historial de páginas visitadas</strong>. La opción de filtrado te permite indicar si debe negarse el acceso a páginas pornograficas y sitios de <strong>phishing</strong>, o si además filtrar sitios de cracks y hacks y cosas así, o además filtrar todo acceso a redes sociales y sitios de este tipo o simplemente no filtrar nada, esto puede ayudarte a filtrar y asegurar más las computadoras de tu casa u oficina. Las opciones pagadas te dan más opciones muy utiles como para oficinas.</p>
<p><strong>Como configuro OpenDNS?</strong><br />
La mejor opción sería configurarlo en tu router para que con solo configurarlo una vez todas las computadoras de la casa automaticamente queden configuradas, esto es un poco variable dependiendo del router y tienes que tener la clave, si usas el ICE o Racsa es probable que no tengas acceso al modem de internet que normalmente estaria en http://192.168.0.1, si tienes un router inhalambrico, tienes la clave de este y sabes la dirección IP entonces puedes ingresar a la parte administrativa del router y configurar los <strong>Static DNS</strong> con las direcciónes que ya te daré.<br />
Si todo esto que te he dicho de routers suena muy complicado o no tienes acceso, puedes configurarlo directamente en tu computadora:</p>
<p><strong>Windows XP:</strong></p>
<ul>
    <li>Ir a &quot;Inicio&quot; -&gt; &quot;Panel de control&quot; -&gt; &quot;Conexiones de Red&quot; o &quot;Red&quot;</li>
    <li>Ahi verás al menos una conexión, ya sea que uses inhalambrica o por cable de red, elije la que usas y abrela.</li>
    <li>Aparece una ventana con información, haz click en el boton de &quot;Propiedades&quot;</li>
    <li>Busca la opción &quot;Protocolo de Internet (TCP/IPv4)&quot; y seleccionalo.</li>
    <li>Luego haz click en el boton &quot;Propiedades&quot;.</li>
    <li>En la parte de abajo selecciona la opción que dice algo como &quot;Utilizar las siguientes direcciones para el servidor DNS&quot; y abajo de este escribir las siguientes 2 direcciones IP:<br />
    208.67.222.222 <br />
    208.67.220.220</li>
</ul>
<ul>
    <li>Luego dale &quot;OK&quot; y listo.</li>
</ul>
<p>&nbsp;</p>
<p><strong>Windows Vista/Windows 7:</strong></p>
<ul style="margin: 0px; padding: 0px 0px 0px 1em;">
    <li style="margin: 0px; padding: 0px; line-height: 1.6em;">Ir a &quot;Inicio&quot; -&gt; &quot;Panel de control&quot; -&gt; &quot;Redes e Internet&quot; -&gt; &quot;Ver estado de red y tareas&quot;</li>
    <li style="margin: 0px; padding: 0px; line-height: 1.6em;">Ahi verás al menos una conexión de red, ya sea que uses inhalambrica o por cable de red, elije la que usas y dale &quot;Ver estado&quot;</li>
    <li style="margin: 0px; padding: 0px; line-height: 1.6em;">Aparece una ventana con información, haz click en el boton de &quot;Propiedades&quot;</li>
    <li style="margin: 0px; padding: 0px; line-height: 1.6em;">Busca la opción &quot;Protocolo de Internet (TCP/IPv4)&quot; y seleccionalo.</li>
    <li style="margin: 0px; padding: 0px; line-height: 1.6em;">Luego haz click en el boton &quot;Propiedades&quot;.</li>
    <li style="margin: 0px; padding: 0px; line-height: 1.6em;">En la parte de abajo selecciona la opción que dice algo como &quot;Utilizar las siguientes direcciones para el servidor DNS&quot; y abajo de este escribir las siguientes 2 direcciones IP: <br />
    208.67.222.222 <br />
    208.67.220.220</li>
</ul>
<ul style="margin: 0px; padding: 0px 0px 0px 1em;">
    <li style="margin: 0px; padding: 0px; line-height: 1.6em;">Luego dale &quot;OK&quot; y listo.</li>
</ul>
<p><br />
Espero esto pueda ser de ayuda a más de una persona.</p>
<p>&nbsp;</p>
<p><strong>DNS's de OpenDNS:</strong><br />
208.67.222.222<br />
208.67.220.220</p>
<p><strong>Página de OpenDNS:</strong> <a href="http://www.opendns.com" rel="nofollow">http://www.opendns.com</a></p>
<p><strong>Más información de como configurar OpenDNS en diferentes plataformas y sistemas</strong>:<br />
<a href="http://www.opendns.com/support/category/3" rel="nofollow">http://www.opendns.com/support/category/3</a></p>
