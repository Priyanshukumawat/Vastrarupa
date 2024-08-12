import React, { useState } from 'react';
import Table from '../Common/Table';
import Button from '../Common/Button';
import AddProductForm from './AddProduct';

function ManageProduct() {
  const headings = ["Product Image", "Product Name", "Original Price", "Discounted Price", "Stock", "Date of Creation", "Action"];
  const [showAddProductForm, setShowAddProductForm] = useState(false); // State to control visibility of add product form

  const data = [
    ["https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp", "BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET", "Original Price", "Discounted Price", "Stock", "Date of Creation", <Button children="Edit" />],
    ["https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp", "BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET", "Original Price", "Discounted Price", "Stock", "Date of Creation", <Button children="Edit" />],
    ["https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp", "BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET", "Original Price", "Discounted Price", "Stock", "Date of Creation", <Button children="Edit" />],
    ["https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp", "BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET", "Original Price", "Discounted Price", "Stock", "Date of Creation", <Button children="Edit" />],
    ["https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp", "BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET", "Original Price", "Discounted Price", "Stock", "Date of Creation", <Button children="Edit" />],
    ["https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp", "BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET", "Original Price", "Discounted Price", "Stock", "Date of Creation", <Button children="Edit" />],
    ["https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp", "BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET", "Original Price", "Discounted Price", "Stock", "Date of Creation", <Button children="Edit" />],
    ["https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp", "BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET", "Original Price", "Discounted Price", "Stock", "Date of Creation", <Button children="Edit" />],
    ["https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp", "BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET", "Original Price", "Discounted Price", "Stock", "Date of Creation", <Button children="Edit" />],
    ["https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp", "BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET", "Original Price", "Discounted Price", "Stock", "Date of Creation", <Button children="Edit" />],
    // Add more rows as needed
  ];

  // Function to truncate the string to 25 characters and append "..."
  const truncateProductName = (productName) => {
    if (productName.length > 25) {
      return productName.substring(0, 25) + "...";
    }
    return productName;
  };

  const truncatedData = data.map(row => {
    const truncatedProductName = truncateProductName(row[1]);
    return [...row.slice(0, 1), truncatedProductName, ...row.slice(2)];
  });


  const handleAddProductClick = () => {
    setShowAddProductForm(true); // Show add product form when clicking "Add Product" button
  };

  const handleAddProductClose = () => {
    setShowAddProductForm(false); // Close add product form
  };

  return (
    <div className='p-5'>
      <div className='flex justify-start items-center gap-2 mb-2'>
        {showAddProductForm ? (
          <AddProductForm onClose={handleAddProductClose} />
        ) : (
          <>
            <Button type="button" children="Add Product" onClick={handleAddProductClick} />
            <Button type="button" children="Delete Product" />
          </>
        )}
      </div>
      {!showAddProductForm && (
        <div className='overflow-y-auto h-[550px] mt-5'>
          <Table headings={headings} data={truncatedData} />
        </div>
      )}
    </div>
  );
}

export default ManageProduct;
