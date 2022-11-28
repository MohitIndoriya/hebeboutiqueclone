import React from 'react';
import './home.css';

function Home(){
    return (
        <div>
            <div className='hero-section'>
                <div className='hero-text' >
                <h1>Blak / Resort</h1>
                <button>Shop Now</button>
                </div>
            </div>
            <div className='about-section'>
                <p>
                Curators of ethical fashion and New Zealand designed. Hebe is a destination concept store and online haven for style-seekers. A fashion selection lovingly handpicked for you, sealed with personal touch. Open six days.
                </p>
            </div>
            <div className='slider-section'>
                <h1>Must Haves</h1>
                <p>Some of our favourite picks this week.</p>
            </div>
            <div className='video-section'>
                <video width="100%" height="auto" autoPlay muted loop>
                <source src="https://cdn.shopify.com/s/files/1/1132/3440/files/cutdown_1_1080_1.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
                </video>
            </div>
            <div className='brand-section'>
                
            </div>
            <h2>home component</h2>

        </div>
    )
}
export default Home;