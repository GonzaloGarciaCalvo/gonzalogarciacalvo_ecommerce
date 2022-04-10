import ItemList from './ItemList'
import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import { ProductContext } from './ProductContext'
/* import { db} from "./Firebase"
import {getDocs , collection, query, where} from "firebase/firestore"
import { MiToast } from './MiToast' */
/* import GetData from './GetData' */
/* import { ProductContext } from "./ProductContext"; */


    
const ItemListContainer = (prop) =>{
	const getProdContext = useContext(ProductContext)
	const productos = getProdContext.productos
	const SetProductos = getProdContext.SetProductos
	const loading = getProdContext.loading
	const setLoading = getProdContext.setLoading
	const GetData = getProdContext.GetData
    /* const [loading, setLoading] = useState(true);
	const [productos, setProductos] = useState([]);  */

	/* const {productos, setProductos, loading, setLoading} = useContext(ProductContext); */
	const {id} = useParams() 
	useEffect(() => {
		GetData(id)
		/* let productsCollection;
		let documentos;  */
	/* 	itemId, prod, sProd, load, sLoad  */
		///* prop.GetData(id, productos, setProductos, loading, setLoading); */
		console.log("productos:  ",productos)
		/* if (id === undefined) {
			productsCollection = collection(db, "productos");
		} else {
			productsCollection = query(collection(db, "productos"), where("category", "==", id));
		}
		documentos = getDocs(productsCollection); 
		documentos
			.then(respuesta => setProductos(respuesta.docs.map(doc=>({id:doc.id, ...doc.data()}))))
			.catch(() => MiToast()) */ //NO FUNCIONA
			/* .finally(() => setLoading(false)); */
			
	}, [id]);

    return (
			<>
				{ loading?  <div className='d-flex display-row justify-content-center m-5'>
                                <Spinner animation="border" role="status"> </Spinner>
								<p className="ms-4 mt-1">Cargando...</p>
							</div> : ""
				}
				<ItemList productos={productos} className="d-flex flex-row justify-content-center pb-5" />
			</>
	);
}

export default ItemListContainer