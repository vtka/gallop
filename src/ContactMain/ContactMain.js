import React, { Component } from 'react';
import './ContactMain.css';

const ContactMain = () => {
	return (
		<div className='contact-main-container'>
			<div>
				<h1>Контактная информация</h1>
				<h2>Алматинский филиал</h2>
				<h4>050016, г. Алматы, ул. Райымбека 115/23</h4>
				<p className='contact-info-p'>Городские телефоны</p>
				<p className='contact-info-p'><strong>+7 (727) 339-33-59</strong></p>
			</div>
		</div>
)
};

export default ContactMain;