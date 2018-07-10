import React from 'react';
import './Partner.css';
import Group from './components/media/Group.png'
import PartnerSub from './components/PartnerSub'

const Partner = () => {
	return (
		<div className='partner-container'>
      <img src={Group}/>
      <PartnerSub />
		</div>
)
};

export default Partner; 
