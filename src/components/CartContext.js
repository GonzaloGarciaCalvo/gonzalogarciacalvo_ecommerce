import { createContext, useState } from "react"

export const contextoCarrito = createContext()
const { Provider } = contextoCarrito


const MiProvider = ({children}) => {

    const [carrito,setCarrito] = useState([])
    const [total,setTotal] = useState(0)
    /* const copiaCarrito = [] */
    
    const addItem = (producto,cantidad) => {
        let ordenDeItem = {producto, cantidad}
        let copiaCarrito = []
        if(isInCart(producto)){
            ordenDeItem = carrito.find(item => item.producto === producto)
            ordenDeItem.cantidad = ordenDeItem.cantidad + cantidad
            copiaCarrito = [...carrito]
            console.log(" se agraga cantidad a producto ya en carrito", copiaCarrito)
        }else{
            //1) siempre copio el estado primero si es tipo array u objeto
                /* copiaCarrito = carrito.slice(0) */ 
                copiaCarrito = [ordenDeItem, ...carrito]
                console.log(" se agraga producto nuevo a carrito",copiaCarrito)
                
            //... (Operador Rest/Spread)
        }
        setCarrito(copiaCarrito)
    }

    const removeItem = (producto) => {
        /* const copiaCarrito = [] */
        if (isInCart(producto)) {
           
            // 2. buscar dentro del carrito
            const copiaCarrito = carrito.filter(item => item.producto.id !== producto.id)
            // 3. actualizar carrito
            console.log("aplica removeItem")
            setCarrito(copiaCarrito)
          }
     }

    const clear = () => {
        setCarrito([])
    }

    const isInCart = (producto) => {
       /* return carrito.includes(id); */
       return carrito && carrito.some(item => item.producto.id === producto.id)
        
        
    }

    const valorDelContexto = {
        total : total,
        carrito : carrito,
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