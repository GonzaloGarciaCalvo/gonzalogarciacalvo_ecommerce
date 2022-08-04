import ItemList from './ItemList'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import { MiToast } from './MiToast' 
import {GetAllData, GetDataByCategory} from './GetData'



    
const ItemListContainer = (props) =>{

    const [loading, setLoading] = useState(true);
	const [productos, setProductos] = useState([]); 

	/* const {productos, setProductos, loading, setLoading} = useContext(ProductContext); */
	const {category} = useParams() 
    console.log("category en ILC ", category)

		const getData = async () => {
			try {
				setLoading(true);
				console.log("category en getData ILC ", category)
				const value = (category)
					? await GetDataByCategory(category)
					: await GetAllData();
				setProductos(value);
				setLoading(false);
			} catch (error) {
				console.error('components/ItemListContainer/getProductsFromDb', error);
			}
			console.log("productos en ILC", productos)
			// LA quierie de GetDataByCategory llega vacia
		};
	/* const GetData = async (category)=> {
		let dataProducts;
		if (category === undefined) {
			dataProducts = GetAllData()
		}
		if (category !== undefined) {
			dataProducts = GetDataByCategory(category)
		}
		dataProducts
			.then(respuesta => {
				setProductos(respuesta.docs.map(doc=>({id:doc.id, ...doc.data()})))
				console.log("productos en ILC", productos)
				console.log("respuesta en ILC", respuesta)
			})
			.catch(() => MiToast())
			.finally(() => setLoading(false)); 
	    console.log("productos en ILC", productos)
			console.log("loading ", loading)
	} */

	useEffect(() => {
    getData()
	},[category]);

    return (
			<>
			 
				{loading ? (
					<div className="d-flex display-row justify-content-center m-5">
						<Spinner animation="border" role="status">
							{" "}
						</Spinner>
						<p className="ms-4 mt-1">Cargando...</p>
					</div>
				) : 
				("")
				}
				<ItemList productos={productos} className="d-flex flex-row justify-content-center pb-5"/>
				<h2>{category}</h2>
			</>
		);
}

export default ItemListContainer