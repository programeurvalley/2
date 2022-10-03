import React, { useState } from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet , Route , Routes } from 'react-router-dom'

// Data
import { ABOUTCONTENT } from '../shared/AboutContent'
import {FAQ} from '../shared/FaqContent'
import {HighLights} from '../shared/HighLightContent' 
// if you want to use the Old Method replace props.hig with it HighLights
// Other method useContext

function Main(){
    return (
        <>
            <div>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}


export default function Layout() {

    const [aboutcontent , setaboutcontent] = useState(ABOUTCONTENT)
    const [faq , setfaq] = useState(FAQ)
    const [hig , sethig] = useState(HighLights)

    return (
        <>
        
        <Routes>
            <Route path='/' element={<Main />} >
                <Route path='home' element={<Home faq={faq} hig={hig} />} />
                <Route path='about' element={<About aboutcontent={aboutcontent} />} /> 
                <Route path='contact' element={<Contact />} />
            </Route>
        </Routes>

        </>
    )
}
