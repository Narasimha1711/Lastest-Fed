// import "./productList.css";
// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { productRows } from "../../dummyData";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function ProductList() {
//   const [data, setData] = useState(productRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   const columns = [
//     { field: "id", headerName: "ID", width: 90 },
//     {
//       field: "product",
//       headerName: "Product",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="productListItem">
//             <img className="productListImg" src={params.row.img} alt="" />
//             {params.row.name}
//           </div>
//         );
//       },
//     },
//     { field: "stock", headerName: "Stock", width: 200 },
//     {
//       field: "status",
//       headerName: "Status",
//       width: 120,
//     },
//     {
//       field: "price",
//       headerName: "Price",
//       width: 160,
//     },
//     // {
//     //   field: "action",
//     //   headerName: "Action",
//     //   width: 150,
//     //   renderCell: (params) => {
//     //     return (
//     //       <>
//     //         {/* <Link to={"/product/" + params.row.id}>
//     //           <button className="productListEdit">Edit</button>
//     //         </Link> */}
//     //         {/* <DeleteOutline
//     //           className="productListDelete"
//     //           onClick={() => handleDelete(params.row.id)}
//     //         /> */}
//     //       </>
//     //     );
//     //   },
//     // },
//   ];

//   return (
//     <div className="productList">
//       <DataGrid
//         rows={data}
//         disableSelectionOnClick
//         columns={columns}
//         pageSize={8}
//         checkboxSelection
//       />
//     </div>
//   );
// }

import "./productList.css";
// import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductList() {
  const [data, setData] = useState(productRows);
  useEffect(() => {
    // Fetch user data from an API
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/medicine"); // Replace with actual API URL
        setData(response.data.message);
      } catch (error) {
        console.error("Error fetching the user data", error);
      }
    };
    fetchData();
  }, []);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  return (
    <div className="productList">
      <table className="productTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Stock</th>
            <th>Seller</th>
            <th>Price</th>
            <th>description</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            // <tr key={product.id}>
            <tr key={index}>
              <td>{product.name}</td>
              <td>
                <div className="productListItem">
                  <img className="productListImg" src={product.img} alt="" />
                  {product.name}
                </div>
              </td>
              <td>{product.count}</td>
              <td>{product.seller}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              {/* <td>
                <Link to={"/product/" + product.id}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  className="productListDelete"
                  onClick={() => handleDelete(product.id)}
                />
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
