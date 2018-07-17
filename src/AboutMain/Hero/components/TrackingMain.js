import React from 'react';
import './components.css';
import Bitmap from './media/Bitmap.png';
import Tracking from './media/tracking.png';

const TrackingMain = () => {
	return (
		<div className="track-container" >
			<a className='a-h' href='././TrackingMain/TrackingMain'>
				<span>Перейти к отслеживанию</span>
				<img className='bitmap-img' src={Bitmap} />
			</a>
		</div>
)
};

export default TrackingMain; 
