import React from 'react';
import Navigation from '../../shared/Navigation/Navigation';
import About from '../About/About';
import Blog from '../blog/Blog';
import Contact from '../Contact/Contact';
import HomeBanner from '../HomeBanner/HomeBanner';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <About></About>
            <Portfolio></Portfolio>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;