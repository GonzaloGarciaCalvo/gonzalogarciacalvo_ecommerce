import { db} from "./Firebase"
import {getDocs , collection, query, where} from "firebase/firestore"
import { MiToast } from './MiToast'

//NO filtra
export const GetAllData = (category)=>{
    /* console.log("en GetAllData")
    console.log("category en GetAllData",category) */
    const ref = collection(db, "productos");
    console.log("ref en if de GetALLData", ref)
    const docSnapshot = getDocs(ref)
    docSnapshot
    .then(docSnapshot => console.log("docSnapshot de GetALLData", docSnapshot))
    
    return (docSnapshot)
}   

export async function GetDataByCategory (category){
    console.log("category en GetDataByCategory", category)
    const q = query(collection(db, "productos"), where("category", "==", category));
    const docSnapshot = await getDocs(q)
    /* docSnapshot
    .then(docSnapshot => console.log("docSnapshot de GetDataByCategory", docSnapshot)) */
    
    return (docSnapshot)
}  
/* GetDataByCategory() */