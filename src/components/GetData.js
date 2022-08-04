import { db} from "./Firebase"
import {getDocs , collection, query, where} from "firebase/firestore"
/* import { MiToast } from './MiToast'
import { useState} from 'react';
import { useParams } from "react-router-dom" */

//NO filtra
const GetData = async (category)=>{
    let productsCollection = collection(db, "productos");
    let documentos = await getDocs(productsCollection)
	const productosFormateados = documentos.docs.map(doc=>({
						id:doc.id, ...doc.data()
	}))
    console.log("prodFormateados en if de GetData", productosFormateados)
    return (productosFormateados)
    
}   
    
export default GetData 