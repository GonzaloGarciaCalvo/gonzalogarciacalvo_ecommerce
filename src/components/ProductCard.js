import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ProductCard({ producto, cantidad, onRemove, showLink }) {
  return (
    <Card className="item">
      <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>$ {producto.precio}</Card.Text>
        
        {cantidad && <p>Cantidad: {cantidad}</p>}
        
        {showLink && (
          <Button as={Link} to={`/item/${producto.id}`} variant="secondary" size="sm">
            Ver más
          </Button>
        )}
        
        {onRemove && (
          <Button onClick={() => onRemove(producto, cantidad)} variant="secondary" size="sm">
            Borrar
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
