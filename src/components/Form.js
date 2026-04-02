import { Button } from "react-bootstrap";

const Form = ({
  setearNombre,
  setearEmail,
  setearTelefono,
  nombre,
  telefono,
  enviarDatos,
  handleClick,
  clear,
}) => {
  return (
    <form onSubmit={handleClick} className="pb-1 mx-4 d-flex flex-column my-2">
      <p className="mx-0">Ingresa tus datos para la entrega</p>
      <input
        required
        type="text"
        placeholder="mombre"
        onChange={(e) => setearNombre(e.target.value)}
        name="nombre"
        value={nombre}
        className="my-2 max-vw-25"
      />
      <input
        required
        type="text"
        placeholder="telefono"
        onChange={(e) => setearTelefono(e.target.value)}
        name="telefono"
        value={telefono}
        className="my-2"
        title="ingrese un telefono valido"
      />
      <input
        required
        type="text"
        placeholder="email"
        onChange={(e) => setearEmail(e.target.value)}
        name="email"
        className="my-2"
        title="ingrese un email valido"
      />
      <Button
        type="submit"
        variant="secondary"
        size="sm"
        className="mb-4 mt-3 mx-3 d-flex  align-self-center"
      >
        Terminar compra
      </Button>
      <Button
        onClick={clear}
        variant="secondary"
        size="sm"
        className="mb-4 mx-3 d-flex align-self-center"
      >
        Cancelar
      </Button>
    </form>
  );
};
export default Form;
