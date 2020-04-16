import React, { useState, createContext } from 'react';
import { useCart } from './hooks/useCart'
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Context
import ProductContext from './contexts/ProductContext'
import CartContext from './contexts/CartContext'
function App() {
	const [products] = useState(data);
	// const [cart, setCart] = useState([]);
	const [cart, setCart] = useCart([])
	

	const addItem = item => {
		// add the given item to the cart
		setCart([
			...cart,
			item
		])
	};

	const removeItem = id => {
		setCart(cart.filter(product => {
			return product.id != id
		}))
	}

	return (
		<div className="App">
			<CartContext.Provider value = {cart}>
				<Navigation/>
			</CartContext.Provider>

				{/* Routes */}
			<ProductContext.Provider value = {{ products, addItem, cart}}>
				<Route exact path="/">
					<Products />
				</Route>
			</ProductContext.Provider>
			<CartContext.Provider value = {{cart, removeItem}}>
				<Route path="/cart">
					<ShoppingCart/>
				</Route>
			</CartContext.Provider>
			
		</div>
	);
}

export default App;
