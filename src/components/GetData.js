import { db} from "./Firebase"
import {getDocs , collection, query, where} from "firebase/firestore"
import { MiToast } from './MiToast'
import { useContext} from 'react';
import { ProductContext } from "./ProductContext";
import { useParams } from "react-router-dom"


const GetData = ()=>{
    const {productos, setProductos, loading, setLoading} = useContext(ProductContext);
    const {id} = useParams() 
    let productsCollection;
	let documentos; 
    if (id === undefined) {
        productsCollection = collection(db, "productos");
    } else {
        productsCollection = query(collection(db, "productos"), where("category", "==", id));
    }
    documentos = getDocs(productsCollection); 
    documentos
        
        .then(respuesta => setProductos(respuesta.docs.map(doc=>({id:doc.id, ...doc.data()}))))
        .catch(() => MiToast()) //NO FUNCIONA
        .finally(() => setLoading(false));
        return(<></>)
}
    
export default GetData