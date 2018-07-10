import React from 'react';
import './components.css';
import Logo from './media/Logo.png';

const NavLogo = () => {
	return (
		<div className='sub-nav-properties nav-logo'>
			<a href='/AboutMain'><img src={Logo}/></a>
		</div>
)
};

export default NavLogo; 
