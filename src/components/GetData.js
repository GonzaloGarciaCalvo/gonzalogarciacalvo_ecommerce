import { db} from "./Firebase"
import {getDocs , collection, query, where} from "firebase/firestore"
import { MiToast } from './MiToast'

//NO filtra
export const GetAllData = async (category)=>{
    /* console.log("en GetAllData")
    console.log("category en GetAllData",category) */

   /*  const snapshot = await db.collection('users').get();
snapshot.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
});index.js */
    
    //const ref = db.collection( 'productos' ); no funciona


    /* const ref = collection(db, "productos");
    console.log("ref en if de GetALLData", ref)
    const docSnapshot = await getDocs(ref)
    docSnapshot
    .then(docSnapshot => console.log("docSnapshot de GetALLData", docSnapshot))
    return (docSnapshot) */
  

    try{

        const ref = collection(db, "productos");
        console.log("ref en if de GetALLData", ref)
        const docSnapshot = await getDocs(ref)
        /* docSnapshot
        .then(docSnapshot => console.log("docSnapshot de GetALLData", docSnapshot)) */
        return docSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('GetAllData', error);
    }
}
    
    

export async function GetDataByCategory (category){
    try {
        console.log("category en GetDataByCategory", category)
        const q = query(collection(db, "productos"), where("category", "==", category));
        const docSnapshot = await getDocs(q)
        /* docSnapshot
        .then(docSnapshot => console.log("docSnapshot de GetDataByCategory", docSnapshot)) */
        return docSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch(error){
        console.error('GetDataByCategory', error);
    }
}  
/* GetDataByCategory() */