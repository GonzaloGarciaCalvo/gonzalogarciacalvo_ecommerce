import ItemList from './ItemList'
import Container from 'react-bootstrap/Container'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import { db} from "./Firebase"
import {getDocs , collection, query, where} from "firebase/firestore"
import { MiToast } from './MiToast'

    
const ItemListContainer = () =>{
    const [loading, setLoading] = useState(true);
	const [productos, setProductos] = useState([]);
	
	const {id} = useParams() 
	useEffect(() => {
		let productsCollection;
		
		if (id === undefined) {
			productsCollection = collection(db, "productos");
		} else {
			productsCollection = query(collection(db, "productos"), where("category", "==", id));
		}
		const documentos = getDocs(productsCollection); 
		documentos
			.then(respuesta => setProductos(respuesta.docs.map(doc=>({id:doc.id, ...doc.data()}))))
			.catch(()=> {
				MiToast()
				console.log("error en carga de datos")
			}) 
			.finally(() => setLoading(false));
	},[id])

    return (
			<Container as="main">
				<h2 className='slogan'>Remeras para tus deportes outdoor</h2>
				{loading?  <div className='d-flex display-row justify-content-center m-5'>
                                <Spinner animation="border" role="status"> </Spinner>
								<p className="ms-4 mt-1">Cargando...</p>
							</div> : 
							<ItemList productos={productos} className="d-flex flex-row justify-content-center" />}
			</Container>
	);
}

export default ItemListContainer