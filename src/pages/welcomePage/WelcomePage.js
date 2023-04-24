
import React from 'react';
import { Link } from 'react-router-dom';

import './WelcomePage.css'

function WelcomePage() {
  return (
    <div className='welcomepage'>
      <div className='wp_maincontainer'>
        <div className='wp_main'><div className='wp_header'></div>
          <><div className='wp_h1'><h1 className='wp_h1'>Mars Rover <br /> Images Galery</h1></div>
            <p className='wp_p'>Online gallery with the latest and most breathtaking views of the Red Planet's surface, captured by NASA's Curiosity, Spirit, Opportunity, and Perseverance rovers. Explore the vast Martian landscapes and marvel at the intricate details of the planet's geology, all from the comfort of your own screen. Immerse yourself in the wonder and excitement of space exploration with our selection of high-resolution photos and panoramic views. Start your journey to Mars today!</p>
            <Link className='wp_link' to="/gallery"> Discover</Link>
          </></div>
      </div>
    </div>
  );
}

export default WelcomePage;