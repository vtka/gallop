import React, { Component } from 'react';
import './ContactMain.css';

const ContactMain = () => {
	return (
		<div className='contact-main-container'>
			<div>
				<h1>Контактная информация</h1>
				<h2>Алматинский филиал</h2>
				<h4>Алматы, пр. Суюнбая, 37, этаж 2</h4>
				<p className='contact-info-p'>Городские телефоны</p>
				<p className='contact-info-p'><strong>+7 (727) 381-81-81</strong></p>
				<p className='contact-info-p'><strong>+7 (727) 381-81-81</strong></p>
			</div>
			<div className='contact-sub-container'>
				<h2>Шымкентский филиал</h2>
				<h4>Шымкент, пр. Абая, 237, этаж 4</h4>
				<p>Городские телефоны</p>
				<p className='contact-info-p'><strong>+7 (727) 381-81-81</strong></p>
				<p className='contact-info-p'><strong>+7 (727) 381-81-81</strong></p>
			</div>
		</div>
)
};

export default ContactMain;