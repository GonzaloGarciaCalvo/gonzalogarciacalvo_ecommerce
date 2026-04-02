import { useEffect, useState } from "react";
import { getData } from "../services/GetData";
import { MiToast } from "../components/MiToast";

export function useGetData(categoryId) {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const dataPorducts = getData(categoryId);
    dataPorducts
      .then((respuesta) => {
        setProductos(
          respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        );
      })
      .catch(() => MiToast())
      .finally(() => setLoading(false));
  }, [categoryId]);
  console.log("productos en useGetData", productos);
  return { loading, productos };
}
