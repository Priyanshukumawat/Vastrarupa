import React, { useState } from 'react';

function ZoomedImage({ src }) {
  const [showZoomed, setShowZoomed] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setShowZoomed(true);
    setCursorPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const handleMouseLeave = () => {
    setShowZoomed(false);
  };

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  return (
    <div
      className='relative w-full justify-center items-center overflow-hidden'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img src={src} alt="Product" className='w-full h-full object-cover' />
      {showZoomed && (
        <div
          className='absolute top-0 left-0 w-full h-full overflow-hidden '
          style={{
            transformOrigin: `${cursorPosition.x}px ${cursorPosition.y}px`,
            transform: 'scale(3)',
          }}
        >
          <img src={src} alt="Product" className='w-full h-full object-cover' />
        </div>
      )}
    </div>
  );
}

function ProductImage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const imageUrls = [
    "https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp",
    "https://assets.ajio.com/medias/sys_master/root/20230621/4C3P/6492c01242f9e729d76f079d/-1117Wx1400H-464137737-blue-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20230605/h6cD/647de44e42f9e729d722d039/-473Wx593H-466234020-blue-MODEL.jpg",
    "https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/a/o/7/m-n-ma280-hasmi-trendz-original-imagqc5ukkh7fbug.jpeg?q=20&crop=false",
    "https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/o/y/i/xl-a-ma284-miss-ayse-original-imagrzgkz2gcenyq.jpeg?q=90",
  ];

  // Function to handle click on a thumbnail image
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className='flex flex-row gap-5 p-5 w-full'>
      <div className='flex flex-col p-5'>
        <div className='sticky top-0 flex flex-col gap-5'>
          {imageUrls.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Product ${index + 1}`}
              className={`w-[100px] object-cover object-center cursor-pointer ${index === selectedImageIndex ? 'border-2 border-[#85586F]' : ''}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
      <div className='w-full p-5'>
        <div className='sticky top-0 '>
          <ZoomedImage src={imageUrls[selectedImageIndex]} />
        </div>
      </div>
    </div>
  );
}

export default ProductImage;
