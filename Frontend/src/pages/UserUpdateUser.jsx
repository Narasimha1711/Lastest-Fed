/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./userUpdateuser.css";
import Sidebar from "../Components/UserSidebar.jsx";
import axios from "axios";






const UserUpdateUser = () => {
  // State to manage user details and form status
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful update

    const call = async () => {
      try {

        const response = await axios.put('/userUpdatedetails', userDetails);
        setSuccess(response.data.message)
      }

      catch(err) {
        console.log(err);
      }
    }
    

    call();
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        
        <div className="updateForm">
          <h2>Update User Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={userDetails.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={userDetails.password}
                onChange={handleChange}
                required
              />
            </div>
            <p style={{color: "red"}}>
            {error}
            </p>
            <p style={{color: "green"}}>
            {success}
            </p>
            <button type="submit" className="submitButton">
              Update Details
            </button>
          </form>
          {/* {successMessage && <p className="successMessage">{successMessage}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default UserUpdateUser;
