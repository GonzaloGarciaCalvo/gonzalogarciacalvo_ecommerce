import NavBar from "./components/NavBar"

import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemCount from "./components/ItemCount"





function App() {


    return (
        <>
            <NavBar />
            <ItemListContainer greeting="Hola, ecommerce en construcción!"/>
            <ItemDetailContainer />
        </>
    )
}

export default App