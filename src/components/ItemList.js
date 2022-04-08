import Item from './Item'

const ItemList = (prop) =>{
    return (
        <section className='listaDeProductos pb-5'>
            {prop.productos.map((producto)=>{
                return <Item key={producto.id} producto={producto} />
            })}
        </section>
    )
}

export default ItemList