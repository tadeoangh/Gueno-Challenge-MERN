# Gueno-Challenge-MERN
 Coding Challenge for Güeno using the MERN stack

_by Tadeo Angheben Martin_

 __Node.JS version: 12.18.2 LTS__

## Quick Start

1. Para utilizar este código [clónalo](https://github.com/tadeoangh/Gueno-Challenge-MERN.git)

2. Abre la carpeta en la consola

3. Ingresa el siguiente comando:

```
  npm start
```
Esto permitirá que el backend de nuestra app esté escuchando nuestros pedidos.

4. Abre nuevamente la carpeta en otra consola (__Sin cerrar la que ya tienes abierta!__) e ingresa los siguientes comandos:

```
  cd dashboard-prestamos/
```
```
  npm start
```

  Esto abrirá automáticamente nuestra app de React en el navegador, que ya está lista para ser utilizada.
  
  ****
  
  __IDs a probar para ver que el fetch funciona:__
  
  + 11111111
  
  + 99999999
  
  ****
  
  Además, para probar el manejo de errores en el ingreso de información, ingrese cualquier otro caracter.
  
  Si desea probar el manejo de errores de red desconecte el servidor de la app de Express.

## Acerca del proyecto:

El proyecto fue desarrollado en el marco de una prueba para la empresa [Güeno](https://gueno.com/). El desafío consistía en desarrollar una app cuyo Backend funcionase con **Express de NodeJS** y su Frontend con **React**.
La funcionalidad de la app es la de permitir a un cliente, en este caso una administradora de préstamos, tener acceso a la información de sus clientes a través del ingreso de su ID. Esta app, entonces, ingresará esa información en la url del servidor montado por Express, utilizado para buscar la información.

__Por ejemplo:__ Si el ID ingresado es 11111111 entonces, la url será 'http://localhost:3001/11111111'

De este modo, se realiza un _fetch_ con la librería de Axios(_get(url)_) para evitar tener que transformar la información a formato JSON. Este fetch va a la sección del Backend, donde Express se encargará de procesar la información requerida. La app de Express reliza un _fetch_ en la API de Güeno a partir de la cual se obtiene el CUIT perteneciente al ID indicado. Si la información ingresada no coincide con un cliente existente entonces directamente se devuelve un mensaje diciendo que no hay un cliente con ese ID y que se debe revisar la información ingresada. En caso de encontrarse un CUIT se utilizará para hacer un segundo _fetch_ y obtener definitivamente la información requerida.

La misma será procesada por la app y se devolverá en un formato legible y sencillo para que el front de React lo disponga en pantalla de manera sencilla.
