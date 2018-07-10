import React from 'react';
import AdvantageSub from './components/AdvantageSub';
import './About.css';
import Car from './components/media/Car.png'
import Map from './components/media/map.png'
import Search from './components/media/search.png'

const About = () => {
	return (
		<div className='about-container'>
			<AdvantageSub title='Большой парк автомобилей' text='У нас собственный автопарк грузовых и легковых машин, готовых выехать за грузом в любую минуту.' image={Car} />
			<AdvantageSub title='Детальное отслеживание' text='Трекинг ваших отправлений на каждом этапе транспортировки от отправителя к получателю.' image={Search} />
			<AdvantageSub title='Обширная география' text='Крупные города, села и аулы? Мы доставим груз почти в любую точку Казахстана!' image={Map} />
		</div>
)
};

export default About; 
