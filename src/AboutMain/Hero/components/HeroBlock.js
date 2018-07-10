import React from 'react';
import './components.css';
import TrackingMain from './TrackingMain'

const HeroBlock = () => {
	return (
		<div className='hero-block-container'>
			<h1>Курьерская доставка</h1>
      <h1>по всему Казахстану</h1>
			<TrackingMain />
		</div>
)
};

export default HeroBlock; 