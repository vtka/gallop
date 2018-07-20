import React from 'react';
import './components.css';
import Bitmap from './media/Bitmap.png';
// import Tracking from './media/tracking.png';
import { Link } from 'react-router-dom'

const TrackingMain = () => {
	return (
		<div className="track-container" >
			<Link className='a-h' to='tracking'>
				<span>Отследить отправление</span>
				<img className='bitmap-img' src={Bitmap} />
			</Link>
		</div>
)
};

export default TrackingMain; 
