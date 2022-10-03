import React  from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/home/Header'
import Intro from '../components/home/Intro'
import HighLights from '../components/home/HighLights'
import Faq from '../components/home/Faq'
import Footer from '../components/Footer'


export default function Home(props){

    return (
        <>
            <Navbar />
            <Header />
            <Intro />
            <HighLights hig={props.hig} />
            <Faq faq={props.faq}  />
            <Footer />
        </>
    )
}