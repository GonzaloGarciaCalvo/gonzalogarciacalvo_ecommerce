import { db} from "./Firebase"
import {getDocs , collection, query, where} from "firebase/firestore"
import { MiToast } from './MiToast'
import { useState} from 'react';
import { useParams } from "react-router-dom"

//NO filtra
const GetData = (id)=>{
    console.log("en GetData")
    let productsCollection;
	let documentos; 
    if (id === undefined) {
        productsCollection = collection(db, "productos");
    } else {
        console.log("en else de GetData")
        productsCollection = query(collection(db, "productos"), where("category", "==", id));
    }
    documentos = getDocs(productsCollection)
    documentos
    .then(documentos => console.log("else doc2 de GetData", documentos))
    
     return (
         documentos
    )
}   
    
export default GetData 