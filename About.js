import React from 'react';
import web from '../src/images/about1.png';
import Common from './Common';

const About=()=>{
    return(
        <>
       <Common name='Welcome To My About Page' imgsrc={web} visit='/contact' btname='Contact Now'/>
        </>
    );
}
export default About;