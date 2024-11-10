/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./userYourInventory.css";

import Sidebar from "./Sidebar.jsx";
// Sample data data with image URLs
// const data = [
//   { id: 1, price: 100, medicineName: "Dolo-650", Quantity: "rony", img: IMAGE_1 },
//   { id: 2, price: 120, medicineName: "HHazi-500", Quantity: 42, img: IMAGE_2 },
//   { id: 3, price: 30, medicineName: "Asprin", Quantity: 45, img: IMAGE_3},
//   { id: 4, price: 47, medicineName: "Mount Air LC", Quantity: 16, img: IMAGE_4 },
//   { id: 5, price: 57, medicineName: "Pan 40", Quantity: 20, img: IMAGE_5 },
//   { id: 6, price: 146, medicineName: "MetaXL 50", Quantity: 150, img: IMAGE_6 },
//   { id: 7, price: 75, medicineName: "B Complex", Quantity: 44, img: IMAGE_7},
//   { id: 8, price: 88, medicineName: "Lacto Bacillus", Quantity: 36, img: IMAGE_8 },
//   { id: 9, price: 99, medicineName: "AD 10", Quantity: 65, img: IMAGE_9 },
// ];

// Define columns for the table
const initialUserColumns = [
  { field: "img", headerName: "Image" },
  { field: "medicineName", headerName: "Medicine Name" },
  { field: "price", headerName: "Price" },
  { field: "Quantity", headerName: "Seller" },
];

export default function UserUpdate() {
  const [rows, setRows] = useState(data);
  const [editQuantity, setEditQuantity] = useState({});
  const [sortConfig, setSortConfig] = useState(null);

  const handleQuantityChange = (id) => {
    const newQuantity = editQuantity[id];
    if (newQuantity !== undefined) {
      const updatedRows = rows.map((row) =>
        row.id === id ? { ...row, Quantity: newQuantity } : row
      );
      setRows(updatedRows);
    }
  };

  const handleInputChange = (id, value) => {
    setEditQuantity((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    const sortedRows = [...rows].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    setRows(sortedRows);
  };

  return (
    <div className="list">
        <Sidebar />
        <div className="listContainer">
        <div className="simple-table">
      <table>
        <thead>
          <tr>
            {initialUserColumns.map((column) => (
              <th key={column.field} onClick={() => requestSort(column.field)} className="sortable">
                {column.headerName}
                {sortConfig && sortConfig.key === column.field ? (
                  sortConfig.direction === 'ascending' ? ' ▲' : ' ▼'
                ) : null}
              </th>
            ))}
            {/* <th>Add or Decrease</th> */}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {initialUserColumns.map((column) => (
                <td key={column.field}>
                  {column.field === "img" ? (
                    <img src={row[column.field]} alt={row.medicineName} className="medicine-image" />
                  ) : (
                    row[column.field]
                  )}
                </td>
              ))}
              {/* <td> */}
                {/* <input
                  type="number"
                  value={editQuantity[row.id] || row.Quantity}
                  onChange={(e) => handleInputChange(row.id, e.target.value)}
                  className="quantity-input"
                /> */}
                {/* <button
                  onClick={() => handleQuantityChange(row.id)}
                  className="change-button"
                >
                  Change
                </button> */}
              {/* </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    </div>
  );
}


