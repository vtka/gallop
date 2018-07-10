import React from 'react';
import './components.css';
import Bitmap from './media/Bitmap.png';
import Tracking from './media/tracking.png';

const TrackingMain = () => {
	return (
		<div class="track-container">
			<span>Трекинг по номеру накладной</span>
			<a href="#">
					<div class="track-sub-container">
						<img src={Tracking} />
						<img className='bitmap-img' src={Bitmap} />
					</div>
			</a>
		</div>
)
};

export default TrackingMain; 
