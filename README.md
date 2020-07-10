# Gueno-Challenge-MERN
 Coding Challenge for Güeno using the MERN stack

 Node.JS version: 12.18.2 LTS

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
<p>La funcionalidad de la app es la de permitir a un cliente, en este caso una aseguradora, tener acceso a la información de sus clientes a través del ingreso de su ID. Esta app, entonces, ingresará esa información en la url del servidor montado por Express, utilizado para buscar la información.</p>

__Por ejemplo:__ Si el ID ingresado es 11111111 entonces, la url será 'http://localhost:3001/11111111'
