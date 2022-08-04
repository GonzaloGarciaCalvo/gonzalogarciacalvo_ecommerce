import Item from './Item'

const ItemList = (prop) =>{
    console.log("prop en IL ", prop)
    return (
        <section className='listaDeProductos'>
            {prop.productos.map((producto,indice)=>{
                return <Item key={producto.id} id={producto.id} item={producto.item} nombre={producto.nombre} precio={producto.precio} imagen={producto.imagen} category={producto.category}/>
            })}
        </section>
    )
}

export default ItemList