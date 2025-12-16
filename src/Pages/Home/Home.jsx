import React from 'react';
import TrendingApp from '../../Components/TrendingApp/TrendingApp';
import Slider from '../../Components/Slider/Slider';

const Home = () => {
    return (
        <div className='my-10 space-y-10'>
            <header>
                <Slider></Slider>
            </header>
            <TrendingApp></TrendingApp>
        </div>
    );
};

export default Home;