import {db} from "./Firebase"
import {getDocs , collection, query, where, doc, getDoc} from "firebase/firestore"


export const getData = (id)=>{
    let productsCollection;
	let documentos; 
    if (id === undefined) {    
        productsCollection = collection(db, "productos");
    } else if (id !== undefined) { 
        productsCollection =  query(collection(db, "productos"), where("category", "==", id));
    }
    documentos = getDocs(productsCollection)

    console.log(getDocs)
    documentos
    .then(documentos => console.log("documentos de GetData", documentos))
    
    return (
        documentos
    )
}   

export const getItem =(id)=>{
    
    const docRef = doc(db, "productos", id);
    const docSnap =  getDoc(docRef);
    /*docSnap
     .then((respuesta) => {
        const itemRespuesta = {id: respuesta.id, ...respuesta.data()}
        setProducto(itemRespuesta)
    }) */
    return docSnap
    }