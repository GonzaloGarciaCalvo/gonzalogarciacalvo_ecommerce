import {getDocs , collection, query, where} from "firebase/firestore"
import { useState} from "react"
import { toast } from "react-toastify"
import { db} from "./Firebase"


const GetProducts = (id,miSetProductos, miSetLoading)=>{
    /* const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);  */  //si lo comento tira error
    let productsCollection;
    let documentos; 
            if (id === undefined) {
                productsCollection = collection(db, "productos");
            } else {
                productsCollection = query(collection(db, "productos"), where("category", "==", id));
            }
            documentos = getDocs(productsCollection); 
            documentos
              .then((respuesta) => {
                  const aux = [];
                  respuesta.forEach((documento) => {
                      const producto = {id: documento.id, ...documento.data(),};
                      aux.push(producto);
                  });
                  miSetProductos(aux);
              })
              .catch(() => {
                  toast.error("Error en la carga, intente nuevamente", {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      hideProgressBar: true,
                  });
              })
              .finally(() => miSetLoading(false));
    return(<></>)
}
export default GetProducts