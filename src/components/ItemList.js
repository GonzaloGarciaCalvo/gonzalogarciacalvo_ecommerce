import Item from './Item'

const ItemList = (prop) =>{
    return (
        <ul className='listaDeProductos'>
            {prop.productos.map((producto,indice)=>{
                return <Item key={producto.id} nombre={producto.nombre} precio={producto.precio} imagen={producto.imagen} />
            })}
        </ul>
    )
}

export default ItemList