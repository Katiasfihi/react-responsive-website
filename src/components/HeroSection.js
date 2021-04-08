import React from 'react'
import './HeroSection.css'
import '../App.css';

function HeroSection() {

    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' type="video/mp4" autoPlay loop muted />
     
            <h1>ADVENTURE AWAIT</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btn'>
                <button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
                </button>
                <button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
                WATCH TRAILER <i className='far fa-play-circle'></i>
                </button>
            </div>
        </div>

    )
}

export default HeroSection