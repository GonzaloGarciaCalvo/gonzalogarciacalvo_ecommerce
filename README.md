


# Descripción
Proyecto Final del curso React js de Coderhouse. Se implementa un simulador de E-commerce de venta de remeras.
Hay navegación a categoría hombre y categoría mujer, la navegación al carrito de habilita una vez seleccionado algún item.
En el inicio se puede seleccionar un producto, y se navega al detalle del producto, donde se puede
incrementar la cantidad hasta llegar al stock disponible, o disminuir la cantidad y se accede al carrito.
En carrito se muestran los productos seleccionados, el monto por cada iten y el total, con botón para cancelar y para terminar la compra


De App se desperende:
                    | ItemListContainer / ItemList/ Item / ItemCount
                    | ItemDetailContainer / ItemDetail
                    | Navbar / CartWidget
                    | Cart
                    | Context

# Herramientas
Aplicación creada con react-create-app
React-routrer-dom
React-bootstrap
React-tostify
"firebase": "^9.6.10"
validator





App
   |components
             |ItemListContainer 
             |                 |ItemList
             |                          |Item
             |
             |
             |ItemDetailContainer
                                |ItemDetail
                                           |ItemCount
             |
             |NavBar
                    |CartWidget

             |Carrito