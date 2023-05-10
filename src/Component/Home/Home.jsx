import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Services from './Servies/Services';
import Product from './Product/Product';
import Team from './Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Product></Product>
            <Team></Team>
        </div>
    );
};

export default Home;