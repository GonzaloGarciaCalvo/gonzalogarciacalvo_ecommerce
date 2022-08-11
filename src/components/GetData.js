import {db} from "./Firebase"
import {getDocs , collection, query, where} from "firebase/firestore"


const GetData = (id)=>{
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
    
export default GetData 
