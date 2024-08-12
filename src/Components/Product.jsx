import React, { useState } from 'react';
import ProductCard from '../Components/ProductCard/ProductCard';
import { PiSquaresFourBold, PiSquareBold } from "react-icons/pi";
import { HiOutlineAdjustmentsHorizontal, HiMiniChevronDown } from "react-icons/hi2";


const Product = ({ selectedTitle }) => {
    const [numProducts, setNumProducts] = useState(4);
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [expandedSubcategories, setExpandedSubcategories] = useState({});
    const [filtersVisible, setFiltersVisible] = useState(true);
    const [sortOption, setSortOption] = useState(null);

    // Array of product data
    const products = [
        { id: 1, name: 'BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET ', price: 99.99, originalPrice: 199.99, rating: 3.5 },
        { id: 2, name: 'Product 2', price: 79.99, originalPrice: 149.99, rating: 5 },
        { id: 3, name: 'BEIGE 3D FLORAL EMBELLISHED SAREE SET', price: 29.99, originalPrice: 149.99, rating: 3.5 },
        { id: 4, name: 'BEIGE 3D FLORAL EMBELLISHED SAREE SET', price: 59.99, originalPrice: 149.99, rating: 4.5 },
        { id: 5, name: 'Product 5', price: 79.99, originalPrice: 149.99, rating: 2 },
        { id: 6, name: 'Product 6', price: 729.99, originalPrice: 149.99, rating: 5 },
        { id: 7, name: 'BEIGE 3D FLORAL EMBELLISHED SAREE SET', price: 791.99, originalPrice: 149.99, rating: 0 },
        { id: 8, name: 'Product 8', price: 19.99, originalPrice: 149.99, rating: 1.5 },
        { id: 9, name: 'Product 9', price: 89.99, originalPrice: 149.99, rating: 5 },
        { id: 10, name: 'Product 10', price: 2349.99, originalPrice: 149.99, rating: 5 },
        { id: 11, name: 'Product 11', price: 72349.99, originalPrice: 149.99, rating: 4.5 },
        { id: 12, name: 'Product 12', price: 83.99, originalPrice: 149.99, rating: 1 },
        { id: 13, name: 'Product 13', price: 790.99, originalPrice: 149.99, rating: 3 },
        { id: 14, name: 'Product 14', price: 971.99, originalPrice: 149.99, rating: 4.5 },
        { id: 15, name: 'Product 15', price: 856.99, originalPrice: 149.99, rating: 4 },
        { id: 16, name: 'Product 16', price: 983.99, originalPrice: 149.99, rating: 2.5 },
        { id: 17, name: 'Product 17', price: 2342.99, originalPrice: 149.99, rating: 5 },
        { id: 18, name: 'Product 18', price: 2349.99, originalPrice: 149.99, rating: 4 },
        { id: 19, name: 'Product 19', price: 7456.99, originalPrice: 149.99, rating: 5 },
        { id: 20, name: 'Product 20', price: 746.99, originalPrice: 149.99, rating: 1.5 },
        // Add more products here
    ];
    const handleButtonClick = () => {
        // Toggle between 4 and 2 products
        setNumProducts(num => (num === 4 ? 2 : 4));
    };


    const handleCategoryClick = (category) => {
        if (expandedCategory === category) {
            setExpandedCategory(null);
        } else {
            setExpandedCategory(category);
        }
    };

    const handleSubcategoryClick = (subcategory) => {
        setExpandedSubcategories(prevState => ({
            ...prevState,
            [subcategory]: !prevState[subcategory]
        }));
    };


    // Toggle visibility of filters
    const toggleFilters = () => {
        setFiltersVisible(prevState => !prevState);
    };


    const colors = [
        { name: 'Red', value: '#FF0000' },
        { name: 'Blue', value: '#0000FF' },
        { name: 'Green', value: '#008000' },
        { name: 'Yellow', value: '#FFFF00' },
        { name: 'Orange', value: '#FFA500' },
        { name: 'Purple', value: '#800080' },
        { name: 'Pink', value: '#FFC0CB' },
        { name: 'Brown', value: '#A52A2A' },
        { name: 'Gray', value: '#808080' },
        { name: 'Black', value: '#000000' }
    ];


    // Function to handle changes in the sort option
    const handleSortChange = (option) => {
        setSortOption(option);
    };


    return (
        <>
            <div className='bg-[#F0F0F0] p-5'>
                <h2 className='text-center mb-1 text-md sm:text-lg md:text-3xl text-[#643843]'>New In</h2>
                <div className='flex justify-between pl-8 pr-9'>
                    <button onClick={toggleFilters} className='flex flex-row gap-2 items-center text-[#643843]'>
                        <HiOutlineAdjustmentsHorizontal /> FILTERS</button>

                    <div className='flex flex-row gap-5'>

                        <select onChange={(e) => handleSortChange(e.target.value)} defaultValue="" className=' bg-transparent text-[#643843] outline-none'>
                            <option value="" disabled hidden>Select Sort Option</option>
                            <option value="newestAdded">Newest Added</option>
                            <option value="priceLowToHigh">Price: Low to High</option>
                            <option value="priceHighToLow">Price: High to Low</option>
                            <option value="popularityHighToLow">Popularity: High to Low</option>
                        </select>

                        <button className='text-[#643843]' onClick={handleButtonClick}>
                            {numProducts === 4 ? <PiSquareBold /> : <PiSquaresFourBold />}
                        </button>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-2 p-5'>

                    {/* Left Part */}
                    {filtersVisible && (
                        <div className='w-full sm:w-1/5 pl-3 p-4'>
                            <div
                                className={`flex flex-row justify-between items-center font-bold cursor-pointer text-[#FDF0D1] bg-[#AC7D88] p-2 rounded-md ${expandedCategory === 'shopbycategory' ? 'rounded-b-none' : ''}`}
                                onClick={() => handleCategoryClick('shopbycategory')}
                            >
                                SEARCH BY CATEGORY
                                <HiMiniChevronDown className={`transition-transform transform ${expandedCategory === 'shopbycategory' ? 'rotate-180' : 'rotate-0'}`} />
                            </div>
                            {expandedCategory === 'shopbycategory' && (
                                <div className='pl-2 bg-[#FDF0D1] text-[#85586F] rounded-b-md p-2'>

                                    <div className='flex flex-row justify-between items-center font-bold cursor-pointer' onClick={() => handleSubcategoryClick('bridal')}>
                                        BRIDAL <HiMiniChevronDown className={`transition-transform transform ${expandedSubcategories['bridal'] ? 'rotate-180' : 'rotate-0'}`} />
                                    </div>
                                    {expandedSubcategories['bridal'] && (
                                        <div className='pl-2'>
                                            <div className='hover:scale-105 cursor-pointer'>Haldi</div>
                                            <div className='hover:scale-105 cursor-pointer'>Mehandi</div>
                                            <div className='hover:scale-105 cursor-pointer'>Pool Party</div>
                                            <div className='hover:scale-105 cursor-pointer'>Sangeet</div>
                                            <div className='hover:scale-105 cursor-pointer'>Cocktail</div>
                                            <div className='hover:scale-105 cursor-pointer'>Phere</div>
                                            <div className='hover:scale-105 cursor-pointer'>Reception</div>
                                            <div className='hover:scale-105 cursor-pointer'>Barat</div>
                                        </div>
                                    )}
                                    <div className='font-bold cursor-pointer flex flex-row justify-between items-center' onClick={() => handleSubcategoryClick('suits')}>
                                        SUITS
                                        <HiMiniChevronDown className={`transition-transform transform ${expandedSubcategories['suits'] ? 'rotate-180' : 'rotate-0'}`} />
                                    </div>
                                    {expandedSubcategories['suits'] && (
                                        <div className='pl-2'>
                                            <div className='hover:scale-105 cursor-pointer'>Designer</div>
                                            <div className='hover:scale-105 cursor-pointer'>Anarkali</div>
                                            <div className='hover:scale-105 cursor-pointer'>Patyala</div>
                                            <div className='hover:scale-105 cursor-pointer'>Simple</div>
                                        </div>
                                    )}

                                    <div className='font-bold cursor-pointer flex flex-row justify-between items-center' onClick={() => handleSubcategoryClick('bottomwear')}>
                                        BOTTOM WEAR
                                        <HiMiniChevronDown className={`transition-transform transform ${expandedSubcategories['bottomwear'] ? 'rotate-180' : 'rotate-0'}`} />
                                    </div>
                                    {expandedSubcategories['bottomwear'] && (
                                        <div className='pl-2'>
                                            <div className='hover:scale-105 cursor-pointer'>Pants</div>
                                            <div className='hover:scale-105 cursor-pointer'>Plazo</div>
                                            <div className='hover:scale-105 cursor-pointer'>Garara</div>
                                            <div className='hover:scale-105 cursor-pointer'>Skirt</div>
                                        </div>
                                    )}
                                    <div className='font-bold cursor-pointer flex flex-row justify-between items-center' onClick={() => handleSubcategoryClick('western')}>
                                        WESTERN
                                        <HiMiniChevronDown className={`transition-transform transform ${expandedSubcategories['western'] ? 'rotate-180' : 'rotate-0'}`} />
                                    </div>
                                    {expandedSubcategories['western'] && (
                                        <div className='pl-2'>
                                            <div className='hover:scale-105 cursor-pointer'>Shirt</div>
                                            <div className='hover:scale-105 cursor-pointer'>One Piece</div>
                                            <div className='hover:scale-105 cursor-pointer'>Bodycon</div>
                                            <div className='hover:scale-105 cursor-pointer'>Strapless</div>
                                            <div className='hover:scale-105 cursor-pointer'>Slip</div>
                                        </div>
                                    )}
                                    <div className='font-bold cursor-pointer flex flex-row justify-between items-center' onClick={() => handleSubcategoryClick('ethnic')}>
                                        ETHNIC
                                        <HiMiniChevronDown className={`transition-transform transform ${expandedSubcategories['ethnic'] ? 'rotate-180' : 'rotate-0'}`} />
                                    </div>
                                    {expandedSubcategories['ethnic'] && (
                                        <div className='pl-2'>
                                            <div className='hover:scale-105 cursor-pointer'>Lahanga</div>
                                            <div className='hover:scale-105 cursor-pointer'>Sharara</div>
                                            <div className='hover:scale-105 cursor-pointer'>Gown</div>
                                            <div className='hover:scale-105 cursor-pointer'>Shrugs</div>
                                            <div className='hover:scale-105 cursor-pointer'>Tie Die</div>
                                            <div className='hover:scale-105 cursor-pointer'>Jump Suit</div>
                                            <div className='hover:scale-105 cursor-pointer'>Ethnic Maxis</div>
                                        </div>
                                    )}
                                </div>
                            )}


                            <hr className='w-full p-2 border-0 border-b-2 border-[#AC7D88] mb-3' />
                            <div className={`flex flex-row justify-between items-center font-bold cursor-pointer text-[#FDF0D1] bg-[#AC7D88] p-2 mt-2 rounded-md ${expandedCategory === 'collection' ? 'rounded-b-none' : ''}`} onClick={() => handleCategoryClick('collection')}>COLLECTION
                                <HiMiniChevronDown className={`transition-transform transform ${expandedCategory === 'collection' ? 'rotate-180' : 'rotate-0'}`} /></div>
                            {expandedCategory === 'collection' && (
                                <div className='pl-2 bg-[#FDF0D1] text-[#85586F] rounded-b-md p-2'>
                                    <div className='hover:scale-105 cursor-pointer'>Bridal</div>
                                    <div className='hover:scale-105 cursor-pointer'>Sakhi</div>
                                    <div className='hover:scale-105 cursor-pointer'>Print Mania</div>
                                    <div className='hover:scale-105 cursor-pointer'>The Hand Crafted</div>
                                    <div className='hover:scale-105 cursor-pointer'>Beyond Wardrobe</div>
                                    <div className='hover:scale-105 cursor-pointer'>Weeding Collection</div>
                                    <div className='hover:scale-105 cursor-pointer'>HOD - House Of Drapes</div>
                                </div>
                            )}


                            <hr className='w-full p-2 border-0 border-b-2 border-[#AC7D88] mb-3' />

                            <div className={`flex flex-row justify-between items-center font-bold cursor-pointer text-[#FDF0D1] bg-[#AC7D88] p-2 mt-2 rounded-md ${expandedCategory === 'color' ? 'rounded-b-none' : ''}`} onClick={() => handleCategoryClick('color')}>COLOR                                 <HiMiniChevronDown className={`transition-transform transform ${expandedCategory === 'color' ? 'rotate-180' : 'rotate-0'}`} /></div>
                            {expandedCategory === 'color' && (
                                <div className='pl-2 bg-[#FDF0D1] text-[#85586F] rounded-b-md p-2'>
                                    {colors.map((color, index) => (
                                        <div key={index} className='flex items-center'>
                                            <div className='w-4 h-4 mr-2 rounded-full' style={{ backgroundColor: color.value }}></div> {/* Color circle */}
                                            <div className='hover:scale-105 cursor-pointer'>{color.name}</div>
                                        </div>
                                    ))}
                                </div>
                            )}


                            <hr className='w-full p-2 border-0 border-b-2 border-[#AC7D88] mb-3' />

                            <div className={`flex flex-row justify-between items-center font-bold cursor-pointer text-[#FDF0D1] bg-[#AC7D88] p-2 mt-2 rounded-md ${expandedCategory === 'price' ? 'rounded-b-none' : ''}`} onClick={() => handleCategoryClick('price')}>PRICE                                 <HiMiniChevronDown className={`transition-transform transform ${expandedCategory === 'price' ? 'rotate-180' : 'rotate-0'}`} /></div>
                            {expandedCategory === 'price' && (
                                <div className='pl-2 bg-[#FDF0D1] text-[#85586F] rounded-b-md p-2'>
                                    coming soon
                                </div>
                            )}
                            <hr className='w-full p-2 border-0 border-b-2 border-[#AC7D88] mb-3' />

                        </div>
                    )}
                    {/* Right Part */}

                    <div className={`grid w-full ${numProducts === 4 ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2'} gap-4 p-4`}>

                        {products.map((product, index) => (
                            <div key={product.id} >
                                <ProductCard
                                    name={product.name}
                                    price={product.price}
                                    originalPrice={product.originalPrice}
                                    rating={product.rating}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div >
        </>
    );
}

export default Product;