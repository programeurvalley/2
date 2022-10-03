import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Content from '../components/about/Content'
import Sidebar from '../components/about/Sidebar'

export default function About(props) {

    return (
        <>
            <Navbar />
            <div className='container'>
                <ol className='breadcrumb'style={{marginTop : "100x", backgroundColor : 'white'}}>
                    <li><a href='#'>Home</a></li>
                    <li>About</li>
                </ol>
                <div className='row'>
                    <Content aboutcontent={props.aboutcontent} />
                    <Sidebar />
                </div>
            </div>
            <Footer />
        </>
    )
}
