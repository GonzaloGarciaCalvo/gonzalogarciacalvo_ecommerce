import { useContext, useState } from "react"
import { addDoc , collection , serverTimestamp } from "firebase/firestore"
const Form = ()=>{
    /* const [datos, setDatos] = useState({
        nombre:"",
        telefono: "",
        email:" "
    }) 

    const handleInputChange = (event) => {

        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido + ' ' + datos.email)
    }


    const handleClick = () => {
        const orden = {
            buyer : {
                nombre : datos.nombre,
                telefono : datos.telefono,
                email : datos.email
            },
            items : carrito,
            date : serverTimestamp(),
            total : total
        }
        
        const ordenesCollection = collection(db, "ordenes")
        const pedido = addDoc(ordenesCollection,orden)
        pedido
        .then(res=>{
            console.log(res.id)
            
        });
    } */
}
export default Form