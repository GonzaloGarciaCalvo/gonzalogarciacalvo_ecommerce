
const Form = ({setearNombre, setearEmail, setearTelefono, nombre, telefono, enviarDatos})=>{
    
    return(
        <div className="pb-5"> 
                <form onSubmit={enviarDatos} >
                    <p className="mx-5">Ingresa tus datos para la entrega</p>
                    <input required type="text" placeholder="Nombre" onChange={e=>setearNombre(e.target.value)} name="nombre" value={nombre} className="m-5" />
                    <input required type="text" placeholder="telefono" onChange={e=>setearTelefono(e.target.value)} name="telefono" value={telefono} className="m-5"/>
                    <input required type="text" placeholder="email" onChange={e=>setearEmail(e.target.value)} name="email" className="m-5"/>
                </form> 
        </div>
    )
}
export default Form