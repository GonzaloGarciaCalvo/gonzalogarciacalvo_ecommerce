import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const ItemCount  = ({stock, initial, onAdd}) => {
    
    const [contador, setContador] = useState(initial)

    const sumarCantidad = ()  =>{
        if (contador < stock) setContador(contador + 1)
        
    }

    const restarCantidad = () => {
         if (contador > 1) setContador(contador - 1) 
    }
    
    const agregarAlCarrito = () => {
        if (contador <= stock && contador > 0) {
            onAdd(contador);
        } 
    }
    
    
    return (
        <div>
            
            <div className='d-flex flex-direction-row justify-content-evenly'>
            <Button variant="secondary" size="sm" onClick={sumarCantidad} className=" btnCounter btn-sm"> + </Button>
            <p className='text-center'>Agregados : {contador}</p>
            <Button variant="secondary" size="sm" onClick={restarCantidad} className=" btnCounter" > - </Button>
            </div>
            <p className='text-center'>Stock disponible: {stock - contador}</p>
            <Button variant="secondary" size="sm" onClick={agregarAlCarrito} className="mx-5 d-inline text-center" >Agregar al carrito</Button>
        </div>
            
            
    )
}

export default ItemCount 