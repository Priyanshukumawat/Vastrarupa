import React from 'react'
import ProductCard from '../ProductCard/ProductCard';

const products = [
    { id: 1, name: 'BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET ', price: 99.99, originalPrice: 199.99, rating: 3.5 },
    { id: 2, name: 'Product 2', price: 79.99, originalPrice: 149.99, rating: 5 },
    { id: 3, name: 'BEIGE 3D FLORAL EMBELLISHED SAREE SET', price: 29.99, originalPrice: 149.99, rating: 3.5 },
    { id: 4, name: 'BEIGE 3D FLORAL EMBELLISHED SAREE SET', price: 59.99, originalPrice: 149.99, rating: 4.5 },
    { id: 5, name: 'Product 5', price: 79.99, originalPrice: 149.99, rating: 2 },
    { id: 6, name: 'Product 6', price: 729.99, originalPrice: 149.99, rating: 5 },
    { id: 7, name: 'BEIGE 3D FLORAL EMBELLISHED SAREE SET', price: 791.99, originalPrice: 149.99, rating: 0 },
    { id: 8, name: 'Product 8', price: 19.99, originalPrice: 149.99, rating: 1.5 },
    // Add more products here
];
const RecentlyViewed = () => {

    return (
        <>
            <div className='mt-10'>
                <h1 className='text-center mb-10 text-md sm:text-lg md:text-3xl text-[#643843]'>RECENTLY VIEWED</h1>
                <div className="w-full overflow-x-auto">
                    <div className="grid grid-cols-4 gap-4 p-4">
                        {products.slice(0, 4).map((product, index) => (
                            <div key={product.id}>
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

            </div>
        </>
    )
}

export default RecentlyViewed