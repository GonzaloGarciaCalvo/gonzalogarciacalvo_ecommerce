import {getDocs , collection, query, where, doc, getDoc} from "firebase/firestore"
import { db } from "../services/Firebase";

export const getData = (id)=>{
  let productsCollection;
  let documentos; 
    if (id === undefined) {    
        productsCollection = collection(db, "productos");
    } else if (id !== undefined) { 
        productsCollection =  query(collection(db, "productos"), where("category", "==", id));
    }
    documentos = getDocs(productsCollection)
    documentos
    .then(documentos => console.log("documentos de GetData", documentos))
    
    return (
        documentos
    )
}   

export const getItem =(id)=>{
    
    const docRef = doc(db, "productos", id);
    const docSnap =  getDoc(docRef);
    return docSnap
    }