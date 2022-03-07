import {useState} from 'react'

const ItemCount  = (prop) => {
    
    const [contador, setContador] = useState(prop.initial)

    const sumarCantidad = ()  =>{
        if (contador < prop.stock) setContador(contador + 1)
        
    }

    const restarCantidad = () => {
         if (contador > 0) setContador(contador - 1) 
    }
    const miOnAdd = () => {
        console.log("agregado al carrito")
    }
    const agregarAlCarrito = () => {
        if (contador <= prop.stock) {miOnAdd() }
    }
    
    return (
        <div>
            <p>Mi contador actual : {contador}</p>
            <button onClick={sumarCantidad} >Sumar cantidad</button>
            <button onClick={restarCantidad} >Restar cantidad</button>
            <button onClick={agregarAlCarrito} >Agregar al carrito</button>
        </div>
            
            
    )
}

export default ItemCount 