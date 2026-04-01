import { useEffect, useState } from "react";
import { getItem } from "../services/GetData";
import { MiToast } from "../components/MiToast";

export function useGetItem(id){
  const [loading, setLoading] = useState(true)
  const [producto, setProducto] = useState({}) 

  useEffect(()=>{
      getItem(id)
      .then((respuesta) => {
          const itemRespuesta = {id: respuesta.id, ...respuesta.data()}
          setProducto(itemRespuesta)
      })
      .catch(()=>MiToast())
      .finally(() => {
          setLoading(false);
      });
  },[id])

  return {loading, producto}
}