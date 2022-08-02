import { db} from "./Firebase"
import {getDocs , collection, query, where} from "firebase/firestore"
import { MiToast } from './MiToast'
import { useState} from 'react';
import { useParams } from "react-router-dom"


const GetData = (id)=>{

    
    let productsCollection;
	let documentos; 
    if (id === undefined) {
        productsCollection = collection(db, "productos");
    } else {
        productsCollection = query(collection(db, "productos"), where("category", "==", id));
    }

    documentos = getDocs(productsCollection); 
     return (
         documentos
        /* .then(respuesta => setProductos(respuesta.docs.map(doc=>({id:doc.id, ...doc.data()}))))
        .catch(() => MiToast()).finally(() => setLoading(false)) */
        /* documentos.then(respuesta => respuesta.docs) */
    )
}   
    
export default GetData 