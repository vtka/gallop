import React, { Component } from 'react';
import Hero from './Hero/Hero';
import Partner from './Partner/Partner';
import About from './About/About';
import Footer from './Footer/Footer';

const AboutMain = () => {
	return (
		<div>
            <Hero />
            <Partner />
            <About />
            <Footer />
		</div>
)
};

export default AboutMain;