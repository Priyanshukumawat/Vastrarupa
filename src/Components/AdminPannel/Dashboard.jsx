import React from 'react';
import PannelCard from '../Common/PannelCard';
import { FaBoxesStacked } from "react-icons/fa6";
import { BiSolidPurchaseTag } from "react-icons/bi";

function Dashboard() {
  return (
    <div className='p-5'>
      <div className='flex flex-row gap-5 items-center'>
        <PannelCard title="Total Products" children={"2560"} icon={<FaBoxesStacked />} color="[#AC7D88]" />
        <PannelCard title="Total Orders" children={"8060"} icon={<BiSolidPurchaseTag />} color="[#AC7D88]" />
        <PannelCard title="Total Sales" children={"₹ 255265660"} color="[#AC7D88]" />
      </div>
    </div>
  );
}
onabort
export default Dashboard;
