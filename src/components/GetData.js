import { db} from "./Firebase"
import {getDocs , collection, query, where} from "firebase/firestore"
import { MiToast } from './MiToast'
import { useState} from 'react';
import { useParams } from "react-router-dom"

//NO filtra
const GetData = (id)=>{
    console.log("en GetData")
    console.log("id en getdata",id)
    let productsCollection;
	let documentos; 
    if (id === undefined) {
        console.log("id en if getdata",id)
        productsCollection = collection(db, "productos");
        console.log("productsCollection en if de GetData", productsCollection)
    } else if (id !== undefined) {
        console.log("en else de GetData")
        productsCollection =  query(collection(db, "productos"), where("category", "==", id));
        console.log("productsCollection en else de GetData", productsCollection)
    }
    documentos = getDocs(productsCollection)
    documentos
    .then(documentos => console.log("documentos de GetData", documentos))
    
     return (
         documentos
    )
}   
    
export default GetData 