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
	const {id} = useParams() 
    console.log("id  ", id)
	useEffect(() => {

		const dataPorducts = GetData(id)
		dataPorducts
			.then(respuesta => {
				setProductos(respuesta.docs.map(doc=>({id:doc.id, ...doc.data()})))
				console.log("respuesta en efecto", respuesta)
			})
			.catch(() => MiToast())
			.finally(() => setLoading(false)); 
	    console.log("productos en efecto", productos)
			
			/* console.log('estado de loading: ', loading)  */
	}, [id]);

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
				<h2>{id}</h2>
			</>
		);
}

export default ItemListContainer