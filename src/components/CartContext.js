import { createContext, useState } from "react"

export const contextoCarrito = createContext()
const { Provider } = contextoCarrito

const MiProvider = ({children}) => {

    const [carrito,setCarrito] = useState([])
    const [total,setTotal] = useState(0)
    const [cantidadDeItems, setCantidadDeItems] = useState(0)
    
    const addItem = (producto,cantidad) => {
        let ordenDeItem = {producto, cantidad}
        let copiaCarrito = []
        if(isInCart(producto)){
            ordenDeItem = carrito.find(item => item.producto === producto)
            ordenDeItem.cantidad = ordenDeItem.cantidad + cantidad
            copiaCarrito = [...carrito]
        }else{
            copiaCarrito = [ordenDeItem, ...carrito]  
        }
        setCantidadDeItems(cantidadDeItems + cantidad)
        setCarrito(copiaCarrito)
        setTotal(total + producto.precio*cantidad)
        console.log("total",total) /* este no muestra el valor correcto, muetra el anterior */
    }
    console.log("total",total)/*  este muestra el monto adecuado */

    const removeItem = (producto,cantidad) => {
        let ordenDeItem = {producto, cantidad}
        let copiaTotal;
        
        console.log(typeof("typeof copiaTotal",copiaTotal)) //da number
        console.log("copiatotal",copiaTotal)
        const copiaCarrito = carrito.filter(item => item.producto.id !== producto.id)
        setTotal(total - producto.precio*cantidad) /* muestra NaN */
        setCantidadDeItems(cantidadDeItems - cantidad)
        setCarrito(copiaCarrito)    
    }

    const clear = () => {
        setCarrito([])
    }

    const isInCart = (producto) => {
       return carrito && carrito.some(item => item.producto.id === producto.id)
        
        
    }

    const valorDelContexto = {
        total : total,
        carrito : carrito,
        cantidadDeItems : cantidadDeItems,
        removeItem : removeItem,
        addItem : addItem,
        clear : clear,
    }
    
    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider