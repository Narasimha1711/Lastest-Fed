/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./../datatable/datatable.css"; // Ensure you have your CSS for styling
import IMAGE_9 from "../../assets/AD10.jpg";
import IMAGE_8 from "../../assets/LACTO BALLICUS.jpg";
import IMAGE_7 from "../../assets/B COMPLEX.webp";
import IMAGE_6 from "../../assets/METAXL 50.webp";
import IMAGE_5 from "../../assets/PAN 40.webp";
import IMAGE_4 from "../../assets/MOUNT AIR LC.jpg";
import IMAGE_3 from "../../assets/ASPIRIN.jpg";
import IMAGE_2 from "../../assets/HHAZI 500.webp";
import IMAGE_1 from "../../assets/DOLO 650.jpeg"
// Sample data data with image URLs

const data = [
  { Status : "delivered" , id: 1, price: 100, medicineName: "Dolo-650", Quantity: 35, img: IMAGE_1 },
  { Status : "delivered" , id: 2, price: 120, medicineName: "HHazi-500", Quantity: 42, img: IMAGE_2 },
  { Status : "delivered" , id: 3, price: 30, medicineName: "Asprin", Quantity: 45, img: IMAGE_3},
  { Status : "delivered" , id: 4, price: 47, medicineName: "Mount Air LC", Quantity: 16, img: IMAGE_4 },
  { Status : "delivered" , id: 5, price: 57, medicineName: "Pan 40", Quantity: 20, img: IMAGE_5 },
  { Status : "delivered" , id: 6, price: 146, medicineName: "MetaXL 50", Quantity: 150, img: IMAGE_6 },
  { Status : "delivered" , id: 7, price: 75, medicineName: "B Complex", Quantity: 44, img: IMAGE_7},
  { Status : "delivered" , id: 8, price: 88, medicineName: "Lacto Bacillus", Quantity: 36, img: IMAGE_8 },
  { Status : "delivered" , id: 9, price: 99, medicineName: "AD 10", Quantity: 65, img: IMAGE_9 },
];

// Define columns for the table
const initialUserColumns = [
  { field: "img", headerName: "Image" },
  { field: "medicineName", headerName: "Medicine Name" },
  { field: "price", headerName: "Price" },
  { field: "Quantity", headerName: "Quantity" },
  { field: "Status", headerName: "Status" },
];

export default function Datatable() {
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
           
             {/* {data.map((row) => (
                <td key={row.id}>
                  {row.Status}
                </td>
              ))} */}

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


