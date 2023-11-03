import React from 'react';
import './home.scss';

function Home() {
    return (
        <div className='home'  id='home' 
         >
         <div>
         { <div className='img' >
            <img src={require('./photo.jpg')} alt=""  />

            </div> }
            </div>
             <div className='name' >
             <h1>Hello! I am</h1>
         <p>Amponsah Denis Boahen</p>
         <span>(A Software Developer)</span>
         <span>amponsahdenis53@gmail.com</span>
         <span>+233546636409</span>
        

          </div>
         
        </div>
    )
}

export default Home;
