import ItemList from './ItemList'
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import { useGetData } from '../hooks/useGetData'

const ItemListContainer = (props) =>{

	const {categoryId} = useParams() 
	const {loading, productos} = useGetData(categoryId)

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
			</>
		);
}

export default ItemListContainer