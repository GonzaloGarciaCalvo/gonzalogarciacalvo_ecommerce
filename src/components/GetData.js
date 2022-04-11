import { db} from "./Firebase"
import {getDocs , collection, query, where} from "firebase/firestore"
import { MiToast } from './MiToast'
import { useState} from 'react';
import { useParams } from "react-router-dom"


/* const GetData = (itemId)=>{ */
const GetData = (itemId, load, prod )=>{
    /* const [loading, setLoading] = useState(true);
	const [productos, setProductos] = useState([]);  */
 /* const {id} = useParams()   */
    let productsCollection;
	let documentos; 
    if (itemId === undefined) {
        productsCollection = collection(db, "productos");
    } else {
        productsCollection = query(collection(db, "productos"), where("category", "==", itemId));
    }
    documentos = getDocs(productsCollection); 
    documentos
        .then(respuesta => prod=(respuesta.docs.map(doc=>({itemId:doc.itemId, ...doc.data()}))))
        .catch(() => MiToast()) 
        .finally(() => load=false);
        const objectRes = {load, prod}
        return(objectRes)
}   
    
export default GetData 