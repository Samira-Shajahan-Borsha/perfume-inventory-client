import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Offer from '../Offer/Offer';

const Home = () => {
    return (
        <div className='bg-yellow-50'>
            <Banner></Banner>
            <Offer></Offer>
            <Category></Category>
        </div>
    );
};

export default Home;