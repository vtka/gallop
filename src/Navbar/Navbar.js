import React from 'react';
import './Navbar.css';
import NavLogo from './components/NavLogo'
import NavSpan from './components/NavSpan'
import NavContactInfo from './components/NavContactInfo'

const Navbar = (props) => {
	return (
		<div className='nav-container'>
			<NavLogo />
			<a href='/TrackingMain'><NavSpan name='Трекинг' /></a>
			<a href='/ServicesMain'><NavSpan name='Услуги' /></a>
			<a href='/ContactMain'><NavSpan name='Контакты' /></a>
			<NavContactInfo />
		</div>
)
};

export default Navbar; 
