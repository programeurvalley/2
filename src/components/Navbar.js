import React from 'react'

// Assests
import logo from '../assests/logo.png'

export default function Navbar() {
    return (
        <nav className='navbar navbar-inverse navbar-fixed-top headroom' style={{opacity: 0.8}}>
            <div className='container' >
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <a href='#' className='navbar-brand'>
                        <img src={logo} alt='progreccuss' />
                    </a>
                </div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav pull-right'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contact</a></li>
                        <li><a href='#' className='btn'>Sign In / Sign Up</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
