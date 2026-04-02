import { useContext, useState } from "react"
import { contextoCarrito } from "../components/CartContext"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import { addDoc , collection , serverTimestamp } from "firebase/firestore"
import Form from "../components/Form";
import validator from 'validator';
import Container from 'react-bootstrap/Container'
import { db } from "../services/Firebase";

const Cart = () => {

    const {carrito, total, clear, removeItem} = useContext(contextoCarrito)    
    const [nombre, setNombre]= useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [compraEfectuada, setCompraEfectuada]= useState(false)
    const [idFirebase, setIdFirebase] = useState("")


    const validaNombre = validator.isAlpha(nombre,"es-ES", {ignore:" "})
    const validaTelefono = validator.isNumeric(telefono)
    const validaEmail = validator.isEmail(email)
    const handleClick = (e) => {
        e.preventDefault()
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
            .then(res=> setIdFirebase(res.id)); 
            setCompraEfectuada(true)
            clear()
        }
    }

    console.log("carrito: ", carrito)
    return (
        <Container as="main">
            <h1 className="mt-3 fs-2" > Carrito</h1> 
            <div className="d-flex flex-row justify-content-evenly mt-3">
            {carrito.map(item => (
                <Card key={item.producto.id} className="card col-2 col-md-3 mx-2 pb-3 mb-4 item item2">
                    <Card.Img variant="top" src={item.producto.imagen} /> 
                    <Card.Title>
                        <h5 className="text-center fs-6 fs-md-5">{item.producto.nombre}</h5>
                    </Card.Title>
                    <p> Cantidad {item.cantidad}</p>
                    <Button onClick={()=>removeItem(item.producto,item.cantidad)} variant="secondary" size="sm">Borrar</Button>
                    <h2>id: {item.producto.id}</h2>
                </Card>
            ))
            }
            </div>
            {carrito.length?
            <section 
                className="d-flex flex-column align-items-center"
            >
                <div className="my-3">
                    {carrito.map(item => (
                        <article key={item.producto.id} className="mx-4 my-1">
                            <h5 className="itemNombre ">{item.producto.nombre} </h5>
                            <h6 className="ms-md-3  itemSubTotal">
                                
                                <span className=" ms-4 ps-2 border-start border-primary border-2">
                                    Subtotal ${item.cantidad*item.producto.precio}
                                </span>
                            </h6>
                        </article>
                    ))}

                    <p className="totalCarrito mx-4">Total: ${total}</p> 
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <Form 
                        setearNombre={setNombre} 
                        setearTelefono={setTelefono} 
                        setearEmail={setEmail} 
                        nombre={nombre} 
                        telefono={telefono} 
                        handleClick={handleClick}
                        clear={clear}
                    />
                </div>
            </section>
            : 
            <div className="d-flex flex-column align-items-center">
            <h2 className="pb-4 fs-4" >No tenés productos en el carrito</h2>
            <Button as={Link} to={`/`} variant="secondary"  >Ir a comprar</Button>
            </div>
            }
            { compraEfectuada? 
            <div>
                <p className="text-center p-5 fs-3">Gracias por tu compra!!.</p>
                <p className="text-center  fs-3" >El código de tu orden es:</p>
                <p className="text-center  fs-4"  >{idFirebase} Deshabilitado escritura de DB por seguridad</p>
            </div>: ""
        }
        </Container> 
    )
}

export default Cart

