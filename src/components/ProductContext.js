import React, {useState, createContext} from 'react';


export const ProductContext = createContext({});
const {Provider} = ProductContext

export const ProductContextProvider = ({children}) => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);
    
	return (
		<ProductContextProvider
			value={{
				productos,
				setProductos,
				loading,
				setLoading,
			}} 
        >
			{children}
		</ProductContextProvider>
	);
}