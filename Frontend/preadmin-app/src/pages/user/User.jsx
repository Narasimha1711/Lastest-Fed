import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; // Use useParams to get the user ID
import "./user.css";
import axios from "axios";

export default function User() {
  const { id } = useParams(); // Get user ID from the route (if using react-router)
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // Fetch the user data when the component loads
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/users/:${id}`); // Fetch by user ID
        const userData = response.data;
        setEmail(userData.email);
        setName(userData.name);
        setPassword(userData.password);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, [id]);

  // Update user function
  const updateUser = async (e) => {
    e.preventDefault(); // Prevent page refresh

    // Construct the user data to be updated
    const updatedUser = {
      email,
      name,
      password,
    };

    try {
      const response = await axios.put(
        `http://localhost:3001/users/${id}`, // Use dynamic user ID in the URL
        updatedUser
      );
      console.log("User updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={updateUser}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="userUpdateInput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="userUpdateInput"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="userUpdateInput"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <button className="userUpdateButton" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
