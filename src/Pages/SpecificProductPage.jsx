import React from 'react'
import ProductDescription from '../Components/SpecificProduct/ProductDescription'
import ProductImage from '../Components/SpecificProduct/ProductImage'
import RecentlyViewed from '../Components/SpecificProduct/RecentlyViewed'

function SpecificProductPage() {
    return (
        <>
            <div className='gap-5 bg-[#F0F0F0] w-full'>
                <div className='flex flex-row gap-5 bg-[#F0F0F0] w-full'>
                    <ProductImage />
                    <ProductDescription />
                </div>
                <RecentlyViewed />
            </div>
        </>
    )
}

export default SpecificProductPage