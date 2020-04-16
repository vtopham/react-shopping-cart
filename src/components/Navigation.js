import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import CartContext from '../contexts/CartContext'

const Navigation = props => {

	const info = useContext(CartContext)
	
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{info.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
