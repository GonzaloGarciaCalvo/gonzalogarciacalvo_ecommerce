import React, {useState, createContext} from 'react';
import { MiToast } from './MiToast';
import {getDocs , collection, query, where} from "firebase/firestore"
import { useParams } from "react-router-dom"
import { db } from "./Firebase"


export const ProductContext = createContext({});
const {Provider} = ProductContext

export const ProductContextProvider = ({children}) => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);
	/* const {id} = useParams()   */
	const GetData = (id)=>{
		/* const {productos, setProductos, loading, setLoading} = useContext(ProductContext); */
		/* const {id} = useParams()  */
		let productsCollection;
		let documentos; 
		if (!id) {
			productsCollection = collection(db, "productos");
		} else {
			productsCollection = query(collection(db, "productos"), where("category", "==", id));
		}
		documentos = getDocs(productsCollection); 
		documentos
			
			.then(respuesta => setProductos(respuesta.docs.map(doc=>({id:doc.id, ...doc.data()}))))
			.catch(() => MiToast()) 
			.finally(() => setLoading(false));
		return({loading, productos})	
	}
		
    
	return (
		<ProductContextProvider
			value={{
				productos,
				setProductos,
				loading,
				setLoading,
				GetData
			}} 
        >
			{children}
		</ProductContextProvider>
	);
}