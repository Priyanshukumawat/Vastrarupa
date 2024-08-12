import React from 'react'
import ImageSlider from '../Components/Home/ImageSlider.jsx';
import Collections from '../Components/Home/Collections.jsx';
import Instagram from '../Components/Home/Instagram.jsx';

function Home() {
    return (
        <>
            <div className='bg-[#F0F0F0] '>
                <ImageSlider />
                <Collections />
                <Instagram />
            </div>
        </>
    )
}

export default Home