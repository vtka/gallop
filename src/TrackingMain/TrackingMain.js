import React, { Component } from 'react';
import Tracking from './Tracking/Tracking';
import './TrackingMain.css';


const TrackingMain = () => {
	return (
		<div className='tracking-main-container'>
			<h1>Трекинг отправлений</h1>
            {/* <h1>Трекинг</h1> */}
			<div className='tracking-container'>
            	<Tracking />
			</div>
		</div>
)
};

export default TrackingMain;