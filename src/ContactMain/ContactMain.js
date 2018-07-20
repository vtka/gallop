import React, { Component } from 'react';
import './ContactMain.css';

const ContactMain = () => {
	return (
		<div className='contact-main-container'>
			<div>
				<h1>Контактная информация</h1>
				<h2>Головной офис</h2>
				<h4>050016, г. Алматы, ул. Райымбека 115/23</h4>
				<p className='contact-info-p'>Городские телефоны</p>
				<p className='contact-info-p'><strong>+7 (727) 339-33-59</strong></p>
				<a href="https://yandex.ru/maps/?um=constructor%3Aff09360e8d98f876c3541ccd9d7120842ed7ce4b44436c0a0c2458bb47bf46dc&amp;source=constructorStatic" target="_blank"><img className='contact-map' src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Aff09360e8d98f876c3541ccd9d7120842ed7ce4b44436c0a0c2458bb47bf46dc&amp;width=600&amp;height=450&amp;lang=ru_RU" alt="" style={{border: 0}} /></a>
			</div>
		</div>
)
};

export default ContactMain;