import { db} from "./Firebase"
import {getDocs , collection, query, where} from "firebase/firestore"
/* import { MiToast } from './MiToast'
import { useState} from 'react';
import { useParams } from "react-router-dom" */

//NO filtra
const GetData = async (category)=>{
    console.log("category en getdata",category)
    let productsCollection = collection(db, "productos");
    let documentos = await getDocs(productsCollection)
    console.log("documentos en if de GetData", documentos)
    return (documentos)
    
}   
    
export default GetData 