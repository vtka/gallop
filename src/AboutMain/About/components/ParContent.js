import React from 'react';
import './components.css';

const ParContent = (props) => {
	return (
		<p className='about-p-content'>{props.name}</p>
	)
};

export default ParContent