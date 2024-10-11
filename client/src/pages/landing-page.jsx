// essentials 
import React, { useRef } from 'react';
import "../styling/App.css"

const LandingPage = ({ scrollRef, opacity }) => {
    return (
        <div className='landing-page w-full h-screen fixed flex justify-start items-center bg-green-300' style={{ opacity: opacity }}>
            <div className="max-w-full text-9xl whitespace-nowrap overflow-hidden" ref={scrollRef}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nostrum iure excepturi...........................
            </div>
        </div>
    );
};

export default LandingPage;