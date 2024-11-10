/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./../yourInventoryTable/yourInventory.css"; // Ensure you have your CSS for styling
import IMAGE_9 from "../../assets/AD10.jpg";
import IMAGE_8 from "../../assets/LACTO BALLICUS.jpg";
import IMAGE_7 from "../../assets/B COMPLEX.webp";
import IMAGE_6 from "../../assets/METAXL 50.webp";
import IMAGE_5 from "../../assets/PAN 40.webp";
import IMAGE_4 from "../../assets/MOUNT AIR LC.jpg";
import IMAGE_3 from "../../assets/ASPIRIN.jpg";
import IMAGE_2 from "../../assets/HHAZI 500.webp";
import IMAGE_1 from "../../assets/DOLO 650.jpeg";
import Sidebar from "../sidebar/Sidebar";

// Updated data with Quantity and Seller
const data = [
  { id: 1, price: 100, medicineName: "Dolo-650", Seller: "Rony", quantity: 10, img: IMAGE_1 },
  { id: 2, price: 120, medicineName: "HHazi-500", Seller: "Koushik", quantity: 5, img: IMAGE_2 },
  { id: 3, price: 30, medicineName: "Asprin", Seller: "Tharun", quantity: 20, img: IMAGE_3 },
  { id: 4, price: 47, medicineName: "Mount Air LC", Seller: "Narasimha", quantity: 15, img: IMAGE_4 },
  { id: 5, price: 57, medicineName: "Pan 40", Seller: "Surya", quantity: 8, img: IMAGE_5 },
  { id: 6, price: 146, medicineName: "MetaXL 50", Seller: "Anand", quantity: 3, img: IMAGE_6 },
  { id: 7, price: 75, medicineName: "B Complex", Seller: "Dola", quantity: 12, img: IMAGE_7 },
  { id: 8, price: 88, medicineName: "Lacto Bacillus", Seller: "Ramesh", quantity: 7, img: IMAGE_8 },
  { id: 9, price: 99, medicineName: "AD 10", Seller: "Suresh", quantity: 6, img: IMAGE_9 },
];

// Define columns for the table
const initialUserColumns = [
  { field: "img", headerName: "Image" },
  { field: "medicineName", headerName: "Medicine Name" },
  { field: "price", headerName: "Price" },
  { field: "quantity", headerName: "Quantity" }, // Quantity column
  { field: "Seller", headerName: "Seller" },
];

export default function YourInventory() {
  const [rows, setRows] = useState(data);
  const [sortConfig, setSortConfig] = useState(null);

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
        <h1></h1>
        <div className="simple-table">
          <table>
            <thead>
              <tr>
                {initialUserColumns.map((column) => (
                  <th
                    key={column.field}
                    onClick={() => requestSort(column.field)}
                    className="sortable"
                  >
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}






