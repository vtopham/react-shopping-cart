import React, { useContext } from 'react';

import ProductContext from '../contexts/ProductContext' //import the context object we'll be using


const Product = props => {

	const info = useContext(ProductContext)
	return (
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>

			<button onClick={() => info.addItem(props.product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
