import "./sellerSidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BloodtypeSharpIcon from "@mui/icons-material/BloodtypeSharp";
import MedicalInformationSharpIcon from "@mui/icons-material/MedicalInformationSharp";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SellerSidebar = () => {
  const location = useLocation(); // Get the current location
  const [activeLink, setActiveLink] = useState(location.pathname); // Set initial active link based on the current path

  // Handle navigation and active state change
  const handleLinkClick = (path) => {
    setActiveLink(path); // Update active link state
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" onClick={() => handleLinkClick("/")}>
          <span className="logo">Epharmacy</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/dashboard" onClick={() => handleLinkClick("/dashboard")}>
            <li className={activeLink === "/dashboard" ? "active" : ""}>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">LISTS</p>
          <Link
            to="/inventory"
            onClick={() => handleLinkClick("/inventory")}
          >
            <li className={activeLink === "/inventory" ? "active" : ""}>
              <BloodtypeSharpIcon className="icon" />
              <span>Your Inventory</span>
            </li>
          </Link>

          <Link
            to="/updateMedicine"
            onClick={() => handleLinkClick("/updateMedicine")}
          >
            <li className={activeLink === "/updateMedicine" ? "active" : ""}>
              <MedicalInformationSharpIcon className="icon" />
              <span>Add and Update Medicine</span>
            </li>
          </Link>

          <Link to="/updateinfo" onClick={() => handleLinkClick("/updateinfo")}>
            <li className={activeLink === "/updateinfo" ? "active" : ""}>
              <PersonAddAltSharpIcon className="icon" />
              <span>Update Details of User</span>
            </li>
          </Link>

          <p className="title">USER</p>
          <Link to="/profile" onClick={() => handleLinkClick("/profile")}>
            <li className={activeLink === "/profile" ? "active" : ""}>
              <PersonSharpIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>

          <li
            className={activeLink === "/logout" ? "active" : ""}
            onClick={() => {
              handleLinkClick("/logout");
              // Handle logout logic here if necessary
            }}
          >
            <LogoutSharpIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SellerSidebar;
