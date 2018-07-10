import React from 'react';
import './components.css';

const ParHeader = (props) => {
	return (
		<p className='about-p-header'>{props.name}</p>
	)
};

export default ParHeader