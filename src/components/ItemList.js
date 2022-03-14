import Item from './Item'

const ItemList = (prop) =>{
    return (
        <ul className='listaDeProductos'>
            {prop.productos.map((producto,indice)=>{
                return <Item key={producto.id} id={producto.id} item={producto.item} nombre={producto.nombre} precio={producto.precio} imagen={producto.imagen} category={producto.category}/>
            })}
        </ul>
    )
}

export default ItemList