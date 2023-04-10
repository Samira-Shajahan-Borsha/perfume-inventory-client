import React from 'react';
import '../Offer/Offer.css';

const Offer = () => {
    const images = ['https://i.ibb.co/6PGc49j/banner-01.webp', 'https://i.ibb.co/0QstvMr/banner-02.webp', 'https://i.ibb.co/j6GHRq9/banner-03.webp']
    return (
        <div className='container w-full mx-auto my-8 p-4'>
            <div className='flex flex-col items-center md:flex md:flex-row md:justify-around lg:flex lg:flex-row lg:justify-around'>
                {
                    images.map((image, index) => <div key={index} className='img-hover-zoom--slowmo h-full p-3 md:px-2 lg:p-0'>
                        <img src={image} alt='img' className='h-44 md:h-full lg:h-full'/>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Offer;