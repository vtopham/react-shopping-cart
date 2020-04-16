import React, { useContext } from 'react';

import ProductContext from '../contexts/ProductContext' //import the context object we'll be using

// Components
import Product from './Product';

const Products = props => {

	const info = useContext(ProductContext)
	return (
		<div className="products-container">
			{info.products.map(product => (
				<Product
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default Products;
