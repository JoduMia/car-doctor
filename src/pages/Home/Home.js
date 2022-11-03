import React from 'react';
import About from '../../components/others/About';
import Banner from '../../components/others/Banner';
import Services from '../../components/others/Services';
import Footer from '../../components/Shared/Footer';



const Home = () => {
    return (
        <div className='px-3'>
            <Banner />
            <About />
            <Services />
            <Footer />
        </div>
    )
}

export default Home