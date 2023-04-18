import React from 'react';
import backgroundImage from '../../../Assets/Background_Image/background.jpg';
import perfumeImage from '../../../Assets/Background_Image/perfume.png';
import '../Banner/Banner.css';

const Banner = () => {
    return (
        <div className="container mx-auto carousel ">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='carousel-image w-full'>
                    <img src={backgroundImage} className="w-full max-h-screen" alt='backgroundImage' />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-16 right-0 top-1/2">
                    <div data-aos="fade-right" data-aos-duration="3000" className='lg:mt-20'>
                        <h2 className='font-bold text-2xl md:text-5xl lg:text-5xl italic text-white text-start '>Everything's better <br /> with  a bit of fragrance. </h2>
                        <p className='text-white my-9 hidden lg:block md:block'>Break free from familiar scents. The fragrance of discovery. <br /> Share the sweet smell of success. A scent as soft as your skin. <br /> As famous perfumer Olivier Creed once said, your handbag may not <br /> be remembered, but your perfume will.</p>
                        <button className="btn hidden lg:block glass rounded-none normal-case my-4 lg:my-0 md:my-0 hover:bg-black">Discover More</button>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="3000">
                        <img src={perfumeImage} alt="perfume" className='hidden lg:block' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
