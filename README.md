   [![Netlify Status](https://api.netlify.com/api/v1/badges/e2ec3474-e680-40db-a3c1-4c4ed78f933b/deploy-status)](https://app.netlify.com/sites/ornate-creponne-7f057e/deploys)

# Descripción
Proyecto Final del curso React js de Coderhouse. Se implementa un simulador de E-commerce de venta de remeras.
Hay navegación a categoría hombre y categoría mujer, la navegación al carrito de habilita una vez seleccionado algún item.
En el inicio se puede seleccionar un producto, y se navega al detalle del producto, donde se puede
incrementar la cantidad hasta llegar al stock disponible, o disminuir la cantidad y se accede al carrito.
En carrito se muestran los productos seleccionados, el monto por cada iten y el total, con botón para cancelar y para terminar la compra. Hay un formulario validado con validator, en el cual el usuario debe ingresar nombre, teléfono e email. Al finalizar la compra se oculta el formulario y se despliega el id de operación dado por firebase.
En App.js se encuentra el provider y el Browserrouter.

# Herramientas
Aplicación creada con react-create-app

## Librerías
- "react-router-dom": "^6.2.2"
- "react-bootstrap": "^2.1.2"
- "react-toastify": "^8.2.0"
- "firebase": "^9.6.10"
- "validator": "^13.7.0"

# Proceso de instalación 
En consola ir a la carpeta de destino con:  cd <carpeta>
Clonar el repositorio con git clone <url repositorio>
Instalar npm con: npm install
Visualizar el proyecto en servidor local con: npm start

# Deploy
https://ornate-creponne-7f057e.netlify.app/

## Diagrama

App
   |components
             |ItemListContainer 
             |                 |ItemList
             |                          |Item
             |
             |
             |ItemDetailContainer
             |                   |ItemDetail
             |                              |ItemCount
             |
             |NavBar
             |       |CartWidget
             |Carrito

https://ornate-creponne-7f057e.netlify.app/Cart

          