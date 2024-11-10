import React, { useEffect, useState } from "react";
import "./datatable.css"; // Ensure you have your CSS for styling
import SellerSidebar from "../Components/SellerSidebar";
import { useNavigate } from "react-router-dom";

// Define columns for the table
const initialUserColumns = [
  { field: "image", headerName: "Image" },
  { field: "medicine", headerName: "Medicine Name" },
  { field: "price", headerName: "Price" },
  { field: "count", headerName: "Quantity" },
];

export default function Datatable() {
  const [rows, setRows] = useState([]); // Original rows of data
  const [editQuantity, setEditQuantity] = useState({}); // Tracks changes to the Quantity field
  const [sortConfig, setSortConfig] = useState(null); // Sort configuration state
  const [change, setChange] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch('http://localhost:9001/inventory', {
          method: 'GET',
          credentials: 'include', // To include cookies
        });

        if (!response.ok) {
          throw new Error('Failed to fetch inventory');
        }

        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    };

    fetchInventory();
  }, [change]);

  // Handles the quantity update in the state and sends it to the server
  const handleQuantityChange = async (id) => {
    try {
      const response = await fetch('http://localhost:9001/updateCount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id, count: editQuantity[id] }),
        credentials: 'include', // To include cookies
      });

      if (!response.ok) {
        throw new Error('Failed to update quantity');
      }

      console.log("Quantity updated successfully on the server");
    } catch (error) {
      console.error("Error updating quantity on the server:", error);
    }
  };

  // Handles the input change event for quantity, updating the state
  const handleInputChange = (id, value) => {
    setEditQuantity((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Request sorting by column
  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
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

    setRows(sortedRows); // Set the sorted rows
  };

  // Handle adding a new medicine
  const handleAddMedicine = () => {
    navigate('/sellerAddMedicine');
  };

  return (
    <div className="list">
      <SellerSidebar />
      <div className="listContainer">
        <div className="simple-table">
          <div className="header">
            <button className="add-medicine-button" onClick={handleAddMedicine}>
              Add Medicine
            </button>
          </div>
          <table>
            <thead>
              <tr>
                {initialUserColumns.map((column) => (
                  <th key={column.field} onClick={() => requestSort(column.field)} className="sortable">
                    {column.headerName}
                    {sortConfig && sortConfig.key === column.field ? (
                      sortConfig.direction === "ascending" ? " ▲" : " ▼"
                    ) : null}
                  </th>
                ))}
                <th>Update Quantity</th>
              </tr>
            </thead>
            <tbody>
              {rows &&
                rows.map((row) => (
                  <tr key={row._id}>
                    {initialUserColumns.map((column) => (
                      <td key={column.field}>
                        {column.field === "image" ? (
                          <img
                            style={{ transform: "scale(1)" }}
                            src={`http://localhost:9001/uploads/${row.image}`}
                            alt={row.medicineName}
                            className="medicine-image"
                          />
                        ) : (
                          row[column.field]
                        )}
                      </td>
                    ))}
                    <td>
                      <input
                        type="number"
                        value={editQuantity[row._id] !== undefined ? editQuantity[row._id] : row.count}
                        onChange={(e) => handleInputChange(row._id, e.target.value)}
                        className="quantity-input"
                      />
                      <button
                        onClick={() => handleQuantityChange(row._id)}
                        className="change-button"
                      >
                        Change
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
