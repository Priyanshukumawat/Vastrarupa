// Table.js
import React, { useState, useEffect } from 'react';

function Table({ headings, data }) {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {
        setSelectAll(selectedRows.length === data.length);
    }, [selectedRows, data]);

    const handleSelectAll = (e) => {
        const isChecked = e.target.checked;
        setSelectAll(isChecked);
        setSelectedRows(isChecked ? data.map((_, index) => index) : []);
    };

    const handleRowCheckboxChange = (index, isChecked) => {
        setSelectedRows((prevSelectedRows) => {
            const updatedSelectedRows = [...prevSelectedRows];
            if (isChecked) {
                updatedSelectedRows.push(index);
            } else {
                const indexToRemove = updatedSelectedRows.indexOf(index);
                updatedSelectedRows.splice(indexToRemove, 1);
            }
            return updatedSelectedRows;
        });
    };


    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-start">
                            <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                        </th>
                        {headings.map((heading, index) => (
                            <th key={index} className="px-4 py-2 text-start text-[#643843]">{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td className="border px-4 py-2">
                                <input
                                    type="checkbox"
                                    checked={selectedRows.includes(rowIndex)}
                                    onChange={(e) => handleRowCheckboxChange(rowIndex, e.target.checked)}
                                />
                            </td>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="border text-[#85586F] px-4 py-2">
                                    {cellIndex === 0 && typeof cell === 'string' ? (
                                        <img src={cell} alt="product" className="h-20 w-20 object-contain object-center" />
                                    ) : (
                                        // Ensure date/time values are visible
                                        <span className="whitespace-nowrap">{cell}</span>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default Table;
