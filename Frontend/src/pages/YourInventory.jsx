/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./yourInventory.css"; // Ensure you have your CSS for styling
import SellerSidebar from "../Components/SellerSidebar";
import axios from "axios";

const initialUserColumns = [
  { field: "image", headerName: "Image" },
  { field: "medicine", headerName: "Medicine Name" },
  { field: "price", headerName: "Price" },
  { field: "count", headerName: "Quantity" },
];

export default function YourInventory() {

  // const [items, setItems] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {

    const call = async() => {

      
      const response = await axios.get('/inventory');
      const data = response.data;
      // setItems(data);
      setRows(data)
      console.log(rows)
    }

    call();

  }, [])

  
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
        <SellerSidebar />
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

          {rows && rows.map((row) => (
            <tr key={row.id}>
              {initialUserColumns.map((column) => (
                <td key={column.field}>
                  {column.field === "image" ? (
                    <img style={{transform: "scale(1)"}} src={`http://localhost:9001/uploads/${row.image}`} alt={row.medicineName} className="medicine-image" />
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


