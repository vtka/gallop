import React from 'react';
import './components.css';
import Logo from './media/Logo.png';
import { Link } from 'react-router-dom'

const NavLogo = () => {
	return (
		<div className='sub-nav-properties nav-logo'>
			{/* <a href='/AboutMain'><img src={Logo}/></a> */}
			<Link to='about'><img src={Logo}/></Link>
		</div>
)
};

export default NavLogo; 
