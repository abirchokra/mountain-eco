import React from 'react';
import bannerOne from '../assets/dima-dallacqua-wIp_S4tHT5w-unsplash.jpg'
import bannerOTwo from '../assets/kitera-dent-3iJ2LaOGu3s-unsplash.jpg'
import bannerThree from '../assets/ross-joyner-a5ylyBkA7d8-unsplash.jpg'

const Home = () => {
    return (
        <div className='relative mx-auto max-w-7xl'>
            <div className="carousel w-full relative  max-w-7xl mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={bannerOne}
                        className="md:w-full w-0 rounded-lg" />
                    <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={bannerOTwo}
                        className="md:w-full w-0  rounded-lg" />
                    <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={bannerThree}
                        className="md:w-full w-0 rounded-lg" />
                    <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;