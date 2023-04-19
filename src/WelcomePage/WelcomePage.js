import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../GenericComponents/GenericButton/Button';
import './WelcomePage.css'

function WelcomePage() {
  return (
    <div className='WelcomePage'>
      <div className='WPMaincontainer'>
        <div className='WPmain'><div className='WPheader'></div>
          <><div className='WPh1'><h1 className='WPh1'>Mars Rover Images Galery</h1></div>
            <p className='WPp'>Online gallery with the latest and most breathtaking views of the Red Planet's surface, captured by NASA's Curiosity, Spirit, Opportunity, and Perseverance rovers. Explore the vast Martian landscapes and marvel at the intricate details of the planet's geology, all from the comfort of your own screen. Immerse yourself in the wonder and excitement of space exploration with our selection of high-resolution photos and panoramic views. Start your journey to Mars today!</p>
            <div className='WPbutton'><Link to="/gallery"><Button className='WPbutton' >Discover</Button></Link></div>
          </></div>
      </div>

    </div>
  );
}

export default WelcomePage;