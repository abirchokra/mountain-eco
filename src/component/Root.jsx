import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Home from './Home';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto font-poppins'>
            <Navbar></Navbar>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;