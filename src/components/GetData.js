import {db} from "./Firebase"
import {getDocs , collection, query, where} from "firebase/firestore"


//NO filtra
const GetData = (id)=>{
    console.log("en GetData")
    console.log("id en getdata",id)
    let productsCollection;
	let documentos; 
    if (id === undefined) {
        productsCollection = db.collection('productos');
        /* productsCollection = collection(db, "productos"); */
        console.log("productsCollection en if de GetData", productsCollection)
    } else if (id !== undefined) { 
        productsCollection =  query(collection(db, "productos"), where("category", "==", id));
        console.log("productsCollection en else de GetData", productsCollection)
    }
    documentos = getDocs(productsCollection)

    console.log(getDocs)
    documentos
    .then(documentos => console.log("documentos de GetData", documentos))
    
    return (
        documentos
    )
}   
    
export default GetData 