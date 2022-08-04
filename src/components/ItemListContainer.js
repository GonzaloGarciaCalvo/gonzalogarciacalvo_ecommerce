import ItemList from './ItemList'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import { MiToast } from './MiToast' 
import GetData from './GetData'



    
const ItemListContainer = (props) =>{

    const [loading, setLoading] = useState(true);
	const [productos, setProductos] = useState([]); 

	/* const {productos, setProductos, loading, setLoading} = useContext(ProductContext); */
	const { id } = useParams() 
    /* console.log("id en ILC ", id) */

	const GetDataMiddleware = ()=> {
		let allProducts = GetData(id)
		allProducts
			.then(respuesta => {
				setProductos(respuesta.docs.map(doc=>({id:doc.id, ...doc.data()})))
				setLoading(false)
				/* console.log("productos en ILC", productos)  */
				/*console.log("respuesta en ILC", respuesta) */
			})
			.catch(() => MiToast())
			/* .finally(() => setLoading(false));  */
	    /* console.log("productos en ILC", productos) */

			if (id !== undefined) {
				const filtrado = productos.filter(item=> item.category === id)
				console.log("FILTRADO", filtrado)
				 setProductos(filtrado)
				console.log("prod filtrados", productos)
				console.log("id en ILC ", id)
			}
	}
	/* const filterProducts = (prodId)=>{
		if (prodId !== undefined) {
			const filtrado = productos.filter(item=> item.category === prodId)
			console.log("FILTRADO", filtrado)
			 setProductos(filtrado)
			console.log("prod filtrados", productos)
		}
	} */

	useEffect(() => {
    GetDataMiddleware()
		/* filterProducts(id) */
		/* console.log("en useEffect") */
	},[id]);

    return (
			<>
			 
				{loading ? (
					<div className="d-flex display-row justify-content-center m-5">
						<Spinner animation="border" role="status">
							{" "}
						</Spinner>
						<p className="ms-4 mt-1">Cargando...</p>
					</div>
				) : 
				("")
				}
				<ItemList productos={productos} className="d-flex flex-row justify-content-center pb-5"/>
				
			</>
		);
}

export default ItemListContainer