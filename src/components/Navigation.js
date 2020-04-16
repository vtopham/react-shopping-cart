import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import ProductContext from '../contexts/ProductContext'

const Navigation = props => {

	const info = useContext(ProductContext)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{info.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
