import React from 'react';
import Banner from './Banner';
import Assignment from './Assignment';
import About from './About';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Assignment></Assignment>
            <Services></Services>
        </div>
    );
}

export default Home;
