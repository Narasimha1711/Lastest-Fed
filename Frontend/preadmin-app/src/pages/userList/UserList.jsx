// import "./userList.css";
// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function UserList() {
//   const [data, setData] = useState(userRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   const columns = [
//     { field: "id", headerName: "ID", width: 90 },
//     {
//       field: "user",
//       headerName: "User",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="userListUser">
//             <img className="userListImg" src={params.row.avatar} alt="" />
//             {params.row.username}
//           </div>
//         );
//       },
//     },
//     { field: "email", headerName: "Email", width: 200 },
//     {
//       field: "status",
//       headerName: "Status",
//       width: 120,
//     },
//     {
//       field: "transaction",
//       headerName: "Transaction Volume",
//       width: 160,
//     },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={"/user/" + params.row.id}>
//               <button className="userListEdit">Edit</button>
//             </Link>
//             <DeleteOutline
//               className="userListDelete"
//               onClick={() => handleDelete(params.row.id)}
//             />
//           </>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="userList">
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

//Needed oNe
// import "./userList.css";
// import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function UserList() {
//   const [data, setData] = useState(userRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   return (
//     <div className="userList">
//       <table className="userTable">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>User</th>
//             <th>Email</th>
//             <th>Status</th>
//             <th>Transaction Volume</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row) => (
//             <tr key={row.id}>
//               <td>{row.id}</td>
//               <td>
//                 <div className="userListUser">
//                   <img className="userListImg" src={row.avatar} alt="" />
//                   {row.username}
//                 </div>
//               </td>
//               <td>{row.email}</td>
//               <td>{row.status}</td>
//               <td>{row.transaction}</td>
//               <td>
//                 <Link to={"/user/" + row.id}>
//                   <button className="userListEdit">Edit</button>
//                 </Link>
//                 <DeleteOutline
//                   className="userListDelete"
//                   onClick={() => handleDelete(row.id)}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import "./userList.css";
// import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// const variable
export default function UserList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch user data from an API
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/users"); // Replace with actual API URL
        setData(response.data.message);
      } catch (error) {
        console.error("Error fetching the user data", error);
      }
    };
    fetchData();
  }, []);

  // const handleDelete = async (id) => {
  //   try {
  //     // Make delete request to API
  //     await axios.delete(`/api/users/${id}`); // Replace with actual delete API endpoint
  //     setData(data.filter((item) => item.id !== id));
  //   } catch (error) {
  //     console.error("Error deleting the user", error);
  //   }
  // };

  return (
    <div className="userList">
      <table className="userTable">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>User</th>
            <th>Email</th>
            <th>Status</th>
            {/* <th>Transaction Volume</th> */}
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row._id}>
              {/* <td>{row._id}</td> */}
              <td>
                <div className="userListUser">
                  {/* <img className="userListImg" src={row.avatar} alt="" /> */}
                  {row.username}
                </div>
              </td>
              <td>{row.email}</td>
              <td>active</td>
              {/* <td>{row.transaction}</td> */}
              <td>
                <Link to={"/user/" + row._id}>
                  {/* <button className="userListEdit">Edit</button> */}
                </Link>
                {/* <DeleteOutline
                  className="userListDelete"
                  onClick={() => handleDelete(row.id)}
                /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
