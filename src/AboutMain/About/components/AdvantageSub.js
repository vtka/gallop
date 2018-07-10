import React from 'react';
import './components.css';
import ParHeader from './ParHeader'
import ParContent from './ParContent'

const AdvantageSub = ({ title, text, image }) => {
	return (
		<div className='about-sub-container'>
			<img src={image}/>
			<ParHeader name={title} />
			<ParContent name={text}/>
		</div>
		
)
};

export default AdvantageSub; 