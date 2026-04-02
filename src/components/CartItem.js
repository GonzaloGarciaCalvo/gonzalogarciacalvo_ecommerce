import { Button, Card } from "react-bootstrap"

const CartItem = ({ item, removeItem }) => {
  return (
    <Card
      key={item.producto.id}
      className="card col-2 col-md-3 mx-2 pb-3 mb-4 item item2"
    >
      <Card.Img variant="top" src={item.producto.imagen} />
      <Card.Title>
        <h5 className="text-center fs-6 fs-md-5">
          {item.producto.nombre}
        </h5>
      </Card.Title>
      <p> Cantidad {item.cantidad}</p>
      <Button
        onClick={() => removeItem(item.producto, item.cantidad)}
        variant="secondary"
        size="sm"
      >
        Borrar
      </Button>
    </Card>
  )
}
export default CartItem