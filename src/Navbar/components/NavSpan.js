import React from 'react';
import './components.css';


const NavSpan = (props) => {
	return (
		<div className='sub-nav-properties'>
			<span className='nav-span'>{props.name}</span>
		</div>
)
};

export default NavSpan; 