// // on the page
// /* eslint-disable no-unused-vars */
// import "./../assets/SellerSignup.css";
// import DELIVERY_MEDICINE from "./../images/DeliveryMedicine.gif";
// import { FaLock } from "react-icons/fa";
// import { IoMdMailOpen } from "react-icons/io";
// import { GiShop } from "react-icons/gi";
// import { Link } from "react-router-dom";
// import GST from "./../images/gst.png";
// import React, { useState } from "react";

// export default function SellerSignup() {
//   const [userLocation, setUserLocation] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false); // New loading state

//   const getUserLocation = (e) => {
//     e.preventDefault(); // Prevent form submission
//     setLoading(true); // Set loading to true when the button is clicked
//     setError(null); // Clear any existing errors

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setUserLocation({ latitude, longitude }); // Update the location
//           setLoading(false); // Stop loading once location is retrieved
//           setError(null); // Clear any errors
//         },
//         (error) => {
//           console.error("Error getting user location:", error);
//           setLoading(false); // Stop loading on error
//           setError("Failed to get location. Please try again.");
//           setUserLocation(null); // Clear previous location on error
//         }
//       );
//     } else {
//       setLoading(false); // Stop loading if geolocation not supported
//       setError("Geolocation is not supported by this browser.");
//       setUserLocation(null); // Clear previous location if unsupported
//     }
//   };

//   return (
//     <div>
//       <div className="back-ground-image">
//         <img
//           src={DELIVERY_MEDICINE}
//           alt="back-ground-image"
//           className="img-background"
//         />
//       </div>
//       <div className="leftBox">
//         <div className="wrapper1">
//           <form action="">
//             <h1>Signup</h1>
//             <div className="input-box1">
//               <input type="email" name="email" placeholder="Email" required />
//               <IoMdMailOpen className="icon1" />
//             </div>
//             <div className="input-box1">
//               <input
//                 type="text"
//                 name="shopname"
//                 placeholder="Shop Name"
//                 required
//               />
//               <GiShop className="icon1" />
//             </div>
//             <div className="input-box1">
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 required
//               />
//               <FaLock className="icon1" />
//             </div>
//             <div className="input-box1">
//               <input type="text" name="gstin" placeholder="GSTIN" required />
//               <img src={GST} alt="gst" className="icon1gst" />
//             </div>

//             <button
//               className="submit1-locate-me"
//               onClick={getUserLocation}
//             >
//               Locate Me
//             </button>
//             <button type="submit" className="submit">
//               Sign In
//             </button>

//             <div className="register-link1">
//               <p>
//                 Already Having an Account ?
//                 <Link to="/Login">
//                   <span> Login </span>
//                 </Link>
//               </p>
//             </div>

//             {/* Display loading, location, or error */}
//             {loading && <p>Fetching your location...</p>}
//             {userLocation && (
//               <div>
//                 <h2>User Location</h2>
//                 <p>Latitude: {userLocation.latitude}</p>
//                 <p>Longitude: {userLocation.longitude}</p>
//               </div>
//             )}
//             {error && <p style={{ color: "red" }}>{error}</p>}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

//From console log






/* eslint-disable no-unused-vars */
// import "./SellerSignup.css";
// import DELIVERY_MEDICINE from "../assets/DeliveryMedicine.gif";
// import { FaLock } from "react-icons/fa";
// import { IoMdMailOpen } from "react-icons/io";
// import { GiShop } from "react-icons/gi";
// import { Link, useNavigate, useNavigation } from "react-router-dom";
// import GST from "../assets/gst.png";
// import React, { useState } from "react";
// import axios from "axios";

// export default function SellerSignup() {

//   const [loading, setLoading] = useState(false); // Loading state
//   const [location, setLocation] = useState([]); 

//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setpassword] = useState('');
//   const [shopName, setshopName] = useState('');
//   const [gstin, setgstin] = useState('');
//   const [error, setError] = useState('')

//   const onSubmit = async (e) => {

//     e.preventDefault();

    

//       try {

//         const response = await axios.post('/sellerSignup', { email, shopName, password, location, gstin });
//         console.log(response.data)
//         navigate('/sellerLogin')
//       }
//       catch(err) {
//         console.log(err);
//         setError(err.response.data.message);
//       }

//     }

    
      



    




//   const getUserLocation = (e) => {
//     e.preventDefault(); // Prevent form submission
//     setLoading(true); // Set loading to true when button is clicked

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setLocation([latitude, longitude]);
//           setLoading(false); // Stop loading once location is retrieved
//           console.log(`User Location: Latitude: ${latitude}, Longitude: ${longitude}`);
//         },
//         (error) => {
//           setLoading(false); // Stop loading on error
//           console.error("Error getting user location:", error.message);
//         }
//       );
//     } else {
//       setLoading(false); // Stop loading if geolocation is not supported
//       console.error("Geolocation is not supported by this browser.");
//     }
//   };

//   return (
//     <div>
//       <div className="back-ground-image">
//         <img
//           src={DELIVERY_MEDICINE}
//           alt="back-ground-image"
//           className="img-background"
//         />
//       </div>
//       <div className="leftBox">
//         <div className="wrapper1">
//           <form onSubmit={onSubmit} action="POST">
//             <h1>Signup</h1>
//             <div className="input-box1">
//               <input type="email" name="email" placeholder="Email" required value={email} onChange={(e) => { setEmail(e.target.value)}}/>
//               <IoMdMailOpen className="icon1" />
//             </div>
//             <div className="input-box1">
//               <input
//                 type="text"
//                 name="shopname"
//                 placeholder="Shop Name"
//                 required
//                 value={shopName}
//                 onChange={(e) => {setshopName(e.target.value)}}
//               />
//               <GiShop className="icon1" />
//             </div>
//             <div className="input-box1">
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 required
//                 value={password}
//                 onChange={(e) => { setpassword(e.target.value)}}
//               />
//               <FaLock className="icon1" />
//             </div>
//             <div className="input-box1">
//               <input type="text" name="gstin" placeholder="GSTIN" required value={gstin} onChange={(e) => { setgstin(e.target.value)}}/>
//               <img src={GST} alt="gst" className="icon1gst" />
//             </div>

//             <button
//               className="submit1-locate-me"
//               onClick={getUserLocation}
//             >
//               Locate Me
//             </button>
//             <button type="submit" className="submit">
//               Sign Up
//             </button>

//             <div style={{color: 'red', marginLeft: '50rem', fontWeight: '800', position: 'relative', top: '8rem', left: '12rem'}}>
//             {error}
//             </div>

//             <div className="register-link1">
//               <p>
//                 Already Having an Account ?
//                 <Link to="/sellerLogin">
//                   <span> Login </span>
//                 </Link>
//               </p>
//             </div>

//             {/* Show loading message in case the location is being fetched */}
//             {loading && <p>Fetching your location...</p>}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


import "./SellerSignup.css"; 
import DELIVERY_MEDICINE from "../assets/DeliveryMedicine.gif";
import { FaLock } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { GiShop } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import GST from "../assets/gst.png";
import React, { useState } from "react";

export default function SellerSignup() {
  const [loading, setLoading] = useState(false); // Loading state
  const [location, setLocation] = useState([]); 
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [shopName, setshopName] = useState('');
  const [gstin, setgstin] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:9001/sellerSignup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, shopName, password, location, gstin }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed');
      }

      console.log(await response.json());
      navigate('/sellerLogin');
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  const getUserLocation = (e) => {
    e.preventDefault(); // Prevent form submission
    setLoading(true); // Set loading to true when button is clicked

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation([latitude, longitude]);
          setLoading(false); // Stop loading once location is retrieved
          console.log(`User Location: Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          setLoading(false); // Stop loading on error
          console.error("Error getting user location:", error.message);
        }
      );
    } else {
      setLoading(false); // Stop loading if geolocation is not supported
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <div className="back-ground-image">
        <img
          src={DELIVERY_MEDICINE}
          alt="back-ground-image"
          className="img-background"
        />
      </div>
      <div className="leftBox">
        <div className="wrapper1">
          <form onSubmit={onSubmit} action="POST">
            <h1>Signup</h1>
            <div className="input-box1">
              <input type="email" name="email" placeholder="Email" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
              <IoMdMailOpen className="icon1" />
            </div>
            <div className="input-box1">
              <input
                type="text"
                name="shopname"
                placeholder="Shop Name"
                required
                value={shopName}
                onChange={(e) => { setshopName(e.target.value) }}
              />
              <GiShop className="icon1" />
            </div>
            <div className="input-box1">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => { setpassword(e.target.value) }}
              />
              <FaLock className="icon1" />
            </div>
            <div className="input-box1">
              <input type="text" name="gstin" placeholder="GSTIN" required value={gstin} onChange={(e) => { setgstin(e.target.value) }} />
              <img src={GST} alt="gst" className="icon1gst" />
            </div>

            <button
              className="submit1-locate-me"
              onClick={getUserLocation}
            >
              Locate Me
            </button>
            <button type="submit" className="submit">
              Sign Up
            </button>

            <div style={{ color: 'red', marginLeft: '50rem', fontWeight: '800', position: 'relative', top: '8rem', left: '12rem' }}>
              {error}
            </div>

            <div className="register-link1">
              <p>
                Already Having an Account ?
                <Link to="/sellerLogin">
                  <span> Login </span>
                </Link>
              </p>
            </div>

            {/* Show loading message in case the location is being fetched */}
            {loading && <p>Fetching your location...</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

