import { useContext, useState } from "react"
import { contextoCarrito } from "./CartContext"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import { addDoc , collection , serverTimestamp } from "firebase/firestore"
import { db } from "./Firebase"
import Form from "./Form";
import validator from 'validator';

const Cart = () => {
    const resultado = useContext(contextoCarrito)
    const carrito = resultado.carrito
    const total = resultado.total
    const clear = resultado.clear
    const removeItem = resultado.removeItem
    
    const [nombre, setNombre]= useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [myForm, setMyForm] = useState(true)
    const [compraEfectuada, setCompraEfectuada]= useState(false)
    const [idFirebase, setIdFirebase] = useState("")
   
    /* const handleInputChange1 = (event) => {
        setNombre(event.target.value)
        console.log(nombre)
    } 
    const handleInputChange2 = (event) => {
        setTelefono(event.target.value)
        console.log(event.target.value)
    } 
    const handleInputChange3 = (event) => {
        setEmail(event.target.value)
        console.log(email)
    } */

    const enviarDatos = (event) => {
        event.preventDefault()
    } 

    const validaNombre = validator.isAlpha(nombre,"es-ES", {ignore:" "})
    const validaTelefono = validator.isNumeric(telefono)
    const validaEmail = validator.isEmail(email)
    const handleClick = () => {
        if(validaNombre & validaTelefono & validaEmail){
            const orden = { 
                buyer : {
                    nombre : nombre,
                    telefono : telefono,
                    email : email
                },
                items : carrito,
                date : serverTimestamp(),
                total : total
            }
            const ordenesCollection = collection(db, "ordenes")
            const pedido = addDoc(ordenesCollection,orden)
            pedido
            .then(res=>{
                console.log("dentro",idFirebase)
                setIdFirebase(res.id)
            }); 
            setCompraEfectuada(true)
            clear()
            setMyForm(false)
            console.log(myForm)
        }
    }
    return (
        <div>
            <h1 className="m-4" > Carrito</h1> 
            <div className="d-flex flex-row justify-content-evenly mt-5">
            {carrito.map(item => (
                <Card key={item.producto.id} className="card col-2 col-md-3 mx-2 pb-3 mb-4 item item2">
                    <Card.Img variant="top" src={item.producto.imagen} /> 
                    <Card.Title>
                        <h5 className="text-center">{item.producto.nombre}</h5>
                    </Card.Title>
                    <p> Cantidad {item.cantidad}</p>
                    <Button onClick={()=>removeItem(item.producto,item.cantidad)} variant="secondary" size="sm">Borrar</Button>
                </Card>
            ))
            }
            </div>
            {carrito.length?
            <div>
                {carrito.map(item => (
                    <div key={item.producto.id} className="mx-4">
                        <h5 className=" itemNombre ">{item.producto.nombre}</h5>
                        <h6 className="ms-3  itemSubTotal">| Subtotal ${item.cantidad*item.producto.precio}</h6>
                    </div>
                ))}
                <p className="totalCarrito mx-4">Total: ${total}</p> 
                <div className="d-flex flex-column justify-content-center">
                    <Button  onClick={handleClick} variant="secondary" size="sm" className="mb-4 mx-3 d-flex  align-self-center">Terminar compra</Button>
                    <Button onClick={clear} variant="secondary" size="sm" className="mb-5 mx-3 d-flex align-self-center">Cancelar</Button>
                </div>
            </div>
            : 
            <div className="d-flex flex-column align-items-center">
            <h2 className="pb-4" >No tenés productos en el carrito</h2>
            <Button as={Link} to={`/`} variant="secondary" size="sm" >Ir a comprar</Button>
            </div>
            }
        {carrito.length?  <Form setearNombre={setNombre} setearTelefono={setTelefono} setearEmail={setEmail} nombre={nombre} telefono={telefono} enviarDatos={enviarDatos} /> 
        : ""
        }
        { compraEfectuada? 
            <div>
                <p className="text-center p-5 fs-3 text">Gracias por tu compra, el código de tu compra es: </p>
                <p className="text-center  fs-3 text" >{idFirebase} </p>
            </div>: ""
        }
        </div> 
    )
}

export default Cart

