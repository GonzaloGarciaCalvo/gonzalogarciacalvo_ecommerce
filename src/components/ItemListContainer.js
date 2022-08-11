import ItemList from './ItemList'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import { MiToast } from './MiToast' 
import {getData} from './GetData'



    
const ItemListContainer = (props) =>{

  const [loading, setLoading] = useState(true);
	const [productos, setProductos] = useState([]); 

	const {categoryId} = useParams() 

	useEffect(() => {

		const dataPorducts = getData(categoryId)
		dataPorducts
			.then(respuesta => {
				setProductos(respuesta.docs.map(doc=>({id:doc.id, ...doc.data()})))
			})
			.catch(() => MiToast())
			.finally(() => setLoading(false)); 
	}, [categoryId]);


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