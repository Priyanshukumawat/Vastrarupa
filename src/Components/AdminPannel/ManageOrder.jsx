import React, { useState, useEffect } from 'react';
import PannelCard from '../Common/PannelCard';
import { FaAnglesRight, FaBoxOpen, FaCubesStacked, FaParachuteBox, FaPenToSquare, FaStairs } from "react-icons/fa6";
import Table from '../Common/Table';
import Button from '../Common/Button';

function ManageOrder() {
  const headings = ["Product Image", "Customer ID", "Product ID", "Customer Name", "Product Name", "Order Status", "Action"];
  const [data, setData] = useState(JSON.parse(localStorage.getItem('orders')) || [
    ["https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp", "123", "456", "Customer 1", "Product Name 1", "New", "2024-04-13 10:00", "In Process"],
    ["https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp", "789", "012", "Customer 2", "Product Name 2", "In Process", "2024-04-12 09:00", "Transit"],
    ["https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp", "123", "456", "Customer 3", "Product Name 3", "New", "2024-04-13 10:00", "In Process"],
    ["https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp", "789", "012", "Customer 4", "Product Name 4", "In Process", "2024-04-12 09:00", "Delivered"],
    ["https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp", "789", "012", "Customer 5", "Product Name 5", "In Process", "2024-04-12 09:00", "Transit"],
    // Add more rows as needed
  ]);

  const [selectedStatus, setSelectedStatus] = useState("All");

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(data));
  }, [data]);

  // Function to handle action button click
  const handleActionButtonClick = (rowIndex, currentStatus) => {
    let updatedData = [...data];

    // Implement logic to change the order status based on the current status
    switch (currentStatus) {
      case "New":
        updatedData[rowIndex][5] = "In Process";
        break;
      case "In Process":
        updatedData[rowIndex][5] = "Transit";
        break;
      case "Transit":
        updatedData[rowIndex][5] = "Delivered";
        break;
      case "Delivered":
        updatedData[rowIndex][5] = "Cancel"; // Change from Delivered back to Cancel
        break;
      case "Cancel":
        updatedData[rowIndex][5] = "New"; // Change from Cancel back to New
        break;
      default:
        break;
    }

    setData(updatedData); // Update the state with the modified data
  };

  // Function to handle card click
  const handleCardClick = (status) => {
    setSelectedStatus(status);
  };

  // Filter data based on selected status
  let filteredData;
  switch (selectedStatus) {
    case "All":
      filteredData = data;
      break;
    case "New":
    case "In Process":
    case "Transit":
    case "Delivered":
    case "Cancel":
      filteredData = data.filter(row => row[5] === selectedStatus);
      break;
    default:
      filteredData = data;
      break;
  }

  return (
    <div className='p-5'>
      <div className="grid grid-cols-3 gap-4 mb-5">
        <PannelCard title="Total Orders" color="[#AC7D88]" icon={<FaBoxOpen />} onClick={() => handleCardClick("All")}>
          100
        </PannelCard>
        <PannelCard title="New Orders" color="[#AC7D88]" icon={<FaPenToSquare />} onClick={() => handleCardClick("New")}>
          20
        </PannelCard>
        <PannelCard title="In-process Orders" color="[#AC7D88]" icon={<FaStairs />} onClick={() => handleCardClick("In Process")}>
          30
        </PannelCard>
        <PannelCard title="In-Transit Orders" color="[#AC7D88]" icon={<FaAnglesRight />} onClick={() => handleCardClick("Transit")}>
          30
        </PannelCard>
        <PannelCard title="Delivered Orders" color="[#AC7D88]" icon={<FaParachuteBox />} onClick={() => handleCardClick("Delivered")}>
          30
        </PannelCard>
        <PannelCard title="Cancel Orders" color="[#AC7D88]" icon={<FaCubesStacked />} onClick={() => handleCardClick("Cancel")}>
          30
        </PannelCard>
      </div>
      <div>
        <Table headings={headings} data={filteredData.map((row, index) => {
          // For each row, render a button that changes based on the order status
          const status = row[5]; // Order status is at index 5
          return [
            ...row.slice(0, 6), // Render first 6 cells as they are
            <Button className="w-full" onClick={() => handleActionButtonClick(index, status)}>
              {status === "New" ? "In Process" : status === "In Process" ? "Transit" : status === "Transit" ? "Delivered" : status === "Delivered" ? "Cancel" : "New"}
            </Button>
          ];
        })} />
      </div>
    </div>
  );
}

export default ManageOrder;
