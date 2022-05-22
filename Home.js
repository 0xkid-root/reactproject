import React from 'react';
//import { NavLink } from 'react-router-dom';
import web from '../src/images/web1.png';
import Common from './Common';

const Home=()=>{
    return(
        <>
        <Common name='Grow Your Bussines' visit='/service' imgsrc={web} btname='Get Started' />
        </>
    );
}
export default Home;