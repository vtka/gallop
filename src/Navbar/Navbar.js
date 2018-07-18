import React from 'react';
import './Navbar.css';
import NavLogo from './components/NavLogo'
import NavSpan from './components/NavSpan'
import NavContactInfo from './components/NavContactInfo'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
	return (
		<div className='nav-container'>
			<NavLogo />
			<Link to='/tracking'><NavSpan name='Трекинг' /></Link>
			<Link to='/services'><NavSpan name='Услуги' /></Link>
			<Link to='/contacts'><NavSpan name='Контакты' /></Link>
			<NavContactInfo />
		</div>
)
};

export default Navbar; 
