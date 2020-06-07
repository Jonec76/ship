import React from 'react'
import './Nav-bar.css'
export default function Nav_bar() {
    const logo = require('../images/logo.png')
    const book = require('../images/book.png')
    const rudder = require('../images/rudder.png')
    return (
        <div className='nav'>
            {/* <img src={logo} className='logo'/> */}
            {/* <div className='tags'>
                <div className="container1">
                    <img src={book} className='book'></img> 
                    <div className="story">My Story</div>
                </div>
                <div className="container2">
                    <img src={rudder} className='rudder'></img> 
                    <div className="about-me">About me</div>
                </div>

            </div> */}
        </div>
    )
}
