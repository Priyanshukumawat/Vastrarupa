import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Collections() {

    const naviagte = useNavigate();

    const handlelink = () => {
        naviagte('/product')
        window.scrollTo(0, 0);
    }


    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach((element) => {
                if (isElementInViewport(element)) {
                    element.classList.add('animate');
                }
            });
        };

        const isElementInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='mt-10 mb-10'>
                <div className='mt-10 mb-10'>
                    <h1 className='text-center mb-1 text-md sm:text-lg md:text-3xl text-[#643843]'>Assortment</h1>
                    <p className='text-center text-sm sm:text-sm md:text-sm text-[#AC7D88]'>Curated Elegance, Unveiled.</p>
                </div>
                <div class="p-5 sm:p-8">
                    <div className="p-5 sm:p-8">
                        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8" onClick={handlelink}>
                            <img className='cursor-pointer hover:scale-105 transition-all animate-on-scroll' src="https://5.imimg.com/data5/LE/VT/JJ/SELLER-49024477/women-clothes-500x500.jpg" />
                            <img className='cursor-pointer hover:scale-105 transition-all animate-on-scroll' src="https://images.shaadisaga.com/shaadisaga_production/photos/pictures/001/408/103/new_medium/Most_Bridal_Ever_-_pinterest.jpg?1579674264" />
                            <img className='cursor-pointer hover:scale-105 transition-all animate-on-scroll' src="https://www.zatki.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/i/nice-8.jpg" />
                            <img className='cursor-pointer hover:scale-105 transition-all animate-on-scroll' src="https://taruntahiliani.com/cdn/shop/products/BR-AWU-BDL-SA-1-CW-01_1_600x.jpg?v=1653220146" />
                            <img className='cursor-pointer hover:scale-105 transition-all animate-on-scroll' src="https://img101.urbanic.com/v1/goods-pic/975047b6a721477599adceb20758855fUR_w750_q90.webp" />
                            <img className='cursor-pointer hover:scale-105 transition-all animate-on-scroll' src="https://images.meesho.com/images/products/318959568/zyabv_512.webp" />
                            <img className='cursor-pointer hover:scale-105 transition-all animate-on-scroll' src="https://taruntahiliani.com/cdn/shop/products/BR-AWU-BDL-KL-9-CW-04_1_600x.jpg?v=1650753206" />
                            <img className='cursor-pointer hover:scale-105 transition-all animate-on-scroll' src="https://i.pinimg.com/736x/f5/fd/b8/f5fdb825d1e803d746bef4741b04b5c7.jpg" />
                            <img className='cursor-pointer hover:scale-105 transition-all animate-on-scroll' src="https://img.perniaspopupshop.com/catalog/product/g/o/GOVA112348_1.jpg?impolicy=detailimageprod" />
                            <img className='cursor-pointer hover:scale-105 transition-all animate-on-scroll' src="https://i.pinimg.com/736x/43/4b/43/434b43503aac324a1561363fba054c0b.jpg" />
                            <img className='cursor-pointer hover:scale-105 transition-all animate-on-scroll' src="https://ae01.alicdn.com/kf/S479e56fca30444beb4aac7fad7d0e7f7A/Sibybo-Sexy-Corset-Slit-Women-Dresses-Hollow-Backless-Woman-Autumn-Black-Dress-Banquet-Ceremony-Fashion-Temperament.jpg" />
                            <img className='cursor-pointer hover:scale-105 transition-all animate-on-scroll' src="https://img.perniaspopupshop.com/catalog/product/c/h/CHHI112222_1.JPG?impolicy=detailimageprod" />
                            <img className='cursor-pointer hover:scale-105 transition-all animate-on-scroll' src="https://static3.azafashions.com/tr:w-450/uploads/product_gallery/-0199579001671449281.jpg" />
                            <img className='cursor-pointer hover:scale-105 transition-all animate-on-scroll' src="https://img101.urbanic.com/v1/goods-pic/16bbea552b8c4ca5b2950f0b63edd160UR_w750_q90.webp" />
                            <img className='cursor-pointer hover:scale-105 transition-all animate-on-scroll' src="https://images.wedmegood.com/wp-content/uploads/2017/03/280233547_3080242988.jpg" />
                            <img className='cursor-pointer hover:scale-105 transition-all animate-on-scroll' src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/02/01143757/IMG-6956-1.jpg" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Collections