import React, { useContext } from 'react';
import ProductContext from '../contexts/ProductContext'

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = props => {

	const info = useContext(ProductContext)
	const getCartTotal = () => {
		return info.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{info.cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
