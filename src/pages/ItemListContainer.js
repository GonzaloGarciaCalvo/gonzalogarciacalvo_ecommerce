import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { useGetData } from "../hooks/useGetData";
import Container from "react-bootstrap/Container";

const ItemListContainer = (props) => {
  const { categoryId } = useParams();
  const { loading, productos } = useGetData(categoryId);
  if (loading) {
    return (
      <Container
        as="main"
        className="d-flex display-row justify-content-center align-items-center"
      >
        <Spinner
          animation="border"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
          className="mySpinner"
        />
        <p className="ms-4 p-0 m-0">Cargando...</p>
      </Container>
    );
  }
  return (
    <Container as="main">
      <ItemList
        productos={productos}
        className="d-flex flex-row justify-content-center pb-5"
      />
    </Container>
  );
};

export default ItemListContainer;
