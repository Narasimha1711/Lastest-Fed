/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./userYourInventory.css"; // Ensure you have your CSS for styling
// import Sidebar from "./UserSidebar";
import Sidebar from "../Components/UserSidebar";
import axios from "axios";

// Define columns for the table
const initialUserColumns = [
  { field: "image", headerName: "Image" },
  { field: "name", headerName: "Medicine Name" },
  { field: "price", headerName: "Price" },
  // { field: "count", headerName: "Quantity" }, // Quantity column
  { field: "seller", headerName: "Seller" },
];

export default function UserYourinventory() {

  const [rows, setRows] = useState([]);

  useEffect(() => {

    const call = async() => {

      
      const response = await axios.get('/userPastOrders');
      const data = response.data;
      // setItems(data);
      setRows(data)
      // console.log(rows)
    }

    call();

  }, [])


  const [sortConfig, setSortConfig] = useState(null);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sortedRows = [...rows].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
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
                    {sortConfig && sortConfig.key === column.field
                      ? sortConfig.direction === "ascending"
                        ? " ▲"
                        : " ▼"
                      : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row._id}>
                  {initialUserColumns.map((column) => (
                    <td key={column.field}>
                      {column.field === "image" ? (
                        <img
                          src={`http://localhost:9001/uploads/${row.image}`}
                          alt={row.name}
                          className="medicine-image"
                        />
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
