// import "./SellerAddMedicine.css";

// import SellerSidebar from "../Components/SellerSidebar.jsx";

// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { SellerContextData } from "../SellerContext.jsx";


// const SellerAddMedicine = () => {

//   const [file, setFile] = useState(null);
//   const [medicineName, setMedicineName] = useState("");
//   const [price, setPrice] = useState("");
//   const [count, setCount] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");

//   const { sellerData, setSellerData } = useContext(SellerContextData);

//   // Handle file selection and image preview
//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

  

//   useEffect(() => {
//     const UserDetails = async () => {
//         try {
//             const response = await axios.get('/seller-info');
//             const data = response.data; 
//             setSellerData(data);
//             // console.log(data)
//             // setCartCount(data.cart.length);
//             localStorage.setItem("SellerDetails", JSON.stringify(sellerData));

//         } catch (err) {
//             console.log(err);
//             if (err.response.data.path === "/login") {
//               navigate('/sellerLogin');
//             }
//         }
//     };
//     UserDetails();
// }, []);

//   // Handle form submission

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("medicineName", medicineName);
//     formData.append("price", price);
//     formData.append("count", count);
//     formData.append("description", description);
//     formData.append("category", category);
//     formData.append("image", file);

//     // Log all the details including image name
//     console.log("Medicine Name:", medicineName);
//     console.log("Price:", price);
//     console.log("Count:", count);
//     console.log("Description:", description);
//     console.log("Category:", category);
//     console.log("File:", file ? file.name : "No file selected");
    
//     try {

      
//       const response = await axios.post('/addMedicine', formData, {
//         headers: {
//           "Content-Type": "multipart/form-data", // This is necessary for file uploads
//         },
//       });
      
//       const data = response.data;
//       console.log("Added Successfully")
//     }
//     catch(err) {
//       console.log(err);
//       navigate('/sellerLogin')
//     }

//     // Reset the form fields after submission
//     setMedicineName("");
//     setFile(null); // Reset file state
//     setPrice("");
//     setCount("");
//     setDescription("");
//     setCategory("");
//   };

//   return (
//     <div className="new">
//       <SellerSidebar />
//       <div className="newContainer">
//         {/* <Navbar /> */}
//         <div className="top">
//           <h1>Add Your Medicine</h1>
//         </div>
//         <div className="bottom">
//           <div className="left">
//             {/* Display the selected image or a default image */}
//             <img
//               src={
//                 file
//                   ? URL.createObjectURL(file) // Preview the selected file
//                   : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" // Default image
//               }
//               alt="Selected"
//             />
//           </div>
//           <div className="right">
//             <form onSubmit={handleSubmit}>
//               <div className="formInput">
//                 <label htmlFor="file">
//                   Image :<DriveFolderUploadOutlinedIcon className="icon" />
//                 </label>
//                 {/* Trigger the hidden file input */}
//                 <input
//                   type="file"
//                   id="file"
//                   onChange={handleFileChange}
//                   style={{ display: "none" }}
//                   required
                  
//                 />
//               </div>
//               <div className="formInput">
//                 <label>Medicine Name</label>
//                 <input
//                   type="text"
//                   placeholder="Medicine Name"
//                   value={medicineName}
//                   onChange={(e) => setMedicineName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="formInput">
//                 <label>Price</label>
//                 <input
//                   type="text"
//                   placeholder="Cost"
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                 />
//               </div>
//               <div className="formInput">
//                 <label>Count of the Medicine</label>
//                 <input
//                   type="text"
//                   placeholder="Count"
//                   value={count}
//                   onChange={(e) => setCount(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="formInput">
//                 <label>Category</label>
//                 <input
//                   type="text"
//                   placeholder="Category"
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                 />
//               </div>
//               <div className="formInput">
//                 <label>Description of Medicine</label>
//                 <textarea
//                   rows="10"
//                   width="300px"
//                   type="text"
//                   placeholder="Description of the Medicine"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                 />
//               </div>
//               <button type="submit">Send</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerAddMedicine;


import "./SellerAddMedicine.css";
import SellerSidebar from "../Components/SellerSidebar.jsx";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SellerContextData } from "../SellerContext.jsx";

const SellerAddMedicine = () => {
  const [file, setFile] = useState(null);
  const [medicineName, setMedicineName] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const { sellerData, setSellerData } = useContext(SellerContextData);
  const navigate = useNavigate();

  // Handle file selection and image preview
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  useEffect(() => {
    const UserDetails = async () => {
      try {
        const response = await fetch('http://localhost:9001/seller-info', {
          method: 'GET',
          credentials: 'include', // To include cookies if required
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch seller info');
        }

        const data = await response.json();
        setSellerData(data);
        localStorage.setItem("SellerDetails", JSON.stringify(data));
      } catch (err) {
        console.log(err);
        navigate('/sellerLogin'); // Redirect on error
      }
    };
    UserDetails();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("medicineName", medicineName);
    formData.append("price", price);
    formData.append("count", count);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("image", file);

    // Log all the details including image name
    console.log("Medicine Name:", medicineName);
    console.log("Price:", price);
    console.log("Count:", count);
    console.log("Description:", description);
    console.log("Category:", category);
    console.log("File:", file ? file.name : "No file selected");

    try {
      const response = await fetch('http://localhost:9001/addMedicine', {
        method: 'POST',
        body: formData,
        credentials: 'include', // To include cookies if required
      });

      if (!response.ok) {
        throw new Error('Failed to add medicine');
      }

      const data = await response.json();
      console.log("Added Successfully");
    } catch (err) {
      console.log(err);
      navigate('/sellerLogin'); // Redirect on error
    }

    // Reset the form fields after submission
    setMedicineName("");
    setFile(null); // Reset file state
    setPrice("");
    setCount("");
    setDescription("");
    setCategory("");
  };

  return (
    <div className="new">
      <SellerSidebar />
      <div className="newContainer">
        <div className="top">
          <h1>Add Your Medicine</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file) // Preview the selected file
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" // Default image
              }
              alt="Selected"
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image :<DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  required
                />
              </div>
              <div className="formInput">
                <label>Medicine Name</label>
                <input
                  type="text"
                  placeholder="Medicine Name"
                  value={medicineName}
                  onChange={(e) => setMedicineName(e.target.value)}
                  required
                />
              </div>
              <div className="formInput">
                <label>Price</label>
                <input
                  type="text"
                  placeholder="Cost"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Count of the Medicine</label>
                <input
                  type="text"
                  placeholder="Count"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  required
                />
              </div>
              <div className="formInput">
                <label>Category</label>
                <input
                  type="text"
                  placeholder="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Description of Medicine</label>
                <textarea
                  rows="10"
                  width="300px"
                  type="text"
                  placeholder="Description of the Medicine"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerAddMedicine;
