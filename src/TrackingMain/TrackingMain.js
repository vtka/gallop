import React, { Component } from 'react';
import Tracking from './Tracking/Tracking';
import './TrackingMain.css';


const TrackingMain = (props) => {
	return (
		<div className='tracking-main-container'>
			<h1>Трекинг отправлений</h1>
            {/* <h1>Трекинг</h1> */}
			<div className='tracking-container'>
            	<Tracking number={props.match.params.number} />
			</div>
		</div>
)
};

export default TrackingMain;