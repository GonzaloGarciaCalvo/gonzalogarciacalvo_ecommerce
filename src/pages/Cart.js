import { useContext, useState } from "react"
import { contextoCarrito } from "../components/CartContext"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import Form from "../components/Form"
import validator from "validator"
import Container from "react-bootstrap/Container"
import { db } from "../services/Firebase"
import CartItem from "../components/CartItem"

const Cart = () => {
  const { carrito, total, clear, removeItem } = useContext(contextoCarrito)
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
  const [compraEfectuada, setCompraEfectuada] = useState(false)
  const [idFirebase, setIdFirebase] = useState("")

  const validaNombre = validator.isAlpha(nombre, "es-ES", { ignore: " " })
  const validaTelefono = validator.isNumeric(telefono)
  const validaEmail = validator.isEmail(email)
  const handleClick = (e) => {
    e.preventDefault()
    if (validaNombre & validaTelefono & validaEmail) {
      const orden = {
        buyer: {
          nombre: nombre,
          telefono: telefono,
          email: email,
        },
        items: carrito,
        date: serverTimestamp(),
        total: total,
      }
      const ordenesCollection = collection(db, "ordenes")
      const pedido = addDoc(ordenesCollection, orden)
      pedido.then((res) => setIdFirebase(res.id))
      setCompraEfectuada(true)
      clear()
    }
  }

  return (
    <Container as="main">
      <h1 className="mt-3 fs-2"> Carrito</h1>
      <div className="d-flex flex-row justify-content-evenly mt-3 flex-wrap">
        {carrito.map((item) => (
          <CartItem key={item.producto.id} item={item} removeItem={removeItem} />
          
        ))}
      </div>
      {carrito.length ? (
        <section className="d-flex flex-column align-items-center">
          <div className="my-3">
            {carrito.map((item) => (
              <article key={item.producto.id} className="mx-2 mx-sm-4  my-1">
                <p className="itemNombre ">{item.producto.nombre} </p>
                <p className="ms-md-3  itemSubTotal">
                  <span className="d-inline-block ms-0 ms-sm-4 ps-2 border-start border-primary border-2">
                    Subtotal ${item.cantidad * item.producto.precio}
                  </span>
                </p>
              </article>
            ))}

            <p className="totalCarrito mx-2 mx-sm-4">Total: ${total}</p>
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
      ) : (
        <div className="d-flex flex-column align-items-center">
          <h2 className="pb-4 fs-4">No tenés productos en el carrito</h2>
          <Button as={Link} to={"/"} variant="secondary">
            Ir a comprar
          </Button>
        </div>
      )}
      {compraEfectuada ? (
        <div>
          <p className="text-center p-5 fs-3">Gracias por tu compra!!.</p>
          <p className="text-center  fs-3">El código de tu orden es:</p>
          <p className="text-center  fs-4">
            {idFirebase} Deshabilitado escritura de DB por seguridad
          </p>
        </div>
      ) : (
        ""
      )}
    </Container>
  )
}

export default Cart
