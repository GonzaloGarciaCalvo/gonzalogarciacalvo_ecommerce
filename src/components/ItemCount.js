import {useState} from 'react'

const ItemCount  = ({stock, initial, onAdd}) => {
    
    const [contador, setContador] = useState(initial)

    const sumarCantidad = ()  =>{
        if (contador < stock) setContador(contador + 1)
        
    }

    const restarCantidad = () => {
         if (contador > 0) setContador(contador - 1) 
    }
    
    const agregarAlCarrito = () => {
        if (contador <= stock && contador > 0) {
            onAdd(contador);
        } 
    }
    
    return (
        <div>
            <p>Mi contador actual : {contador}</p>
            <button onClick={sumarCantidad} >Sumar cantidad</button>
            <button onClick={restarCantidad} >Restar cantidad</button>
            <p>Stock disponible: {stock - contador}</p>
            <button onClick={agregarAlCarrito} >Agregar al carrito</button>
        </div>
            
            
    )
}

export default ItemCount 