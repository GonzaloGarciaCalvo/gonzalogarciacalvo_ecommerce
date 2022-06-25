import ItemList from './ItemList'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
/* import { db} from "./Firebase"
import {getDocs , collection, query, where} from "firebase/firestore"*/
import { MiToast } from './MiToast' 
import GetData from './GetData'
/* import GetData from './GetData' */
/* import { ProductContext } from "./ProductContext"; */


    
const ItemListContainer = (props) =>{

    const [loading, setLoading] = useState(true);
	const [productos, setProductos] = useState([]); 

	/* const {productos, setProductos, loading, setLoading} = useContext(ProductContext); */
	const {id} = useParams() 
    
	useEffect(() => {
		const llamadaFirebase = new Promise (
			GetData({id}))
			.then(respuesta => setProductos(respuesta.docs.map(doc=>({id:doc.id, ...doc.data()}))))
			.catch(() => MiToast())
			/* .finally(() => setLoading(false)); */	
	  
			console.log('estado de loading: ', loading) 
	}, [id]);

    return (
			<>
				{productos ? (
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