import React, { Component } from 'react';
import Tracking from './Tracking/Tracking';
import './TrackingMain.css';


const TrackingMain = () => {
	return (
		<div className='tracking-main-container'>
            <h1>Трекинг</h1>
			<span>С услугами и тарифами можно ознакомиться скачав наше коммерческое приложение</span>
            <Tracking />
		</div>
)
};

export default TrackingMain;