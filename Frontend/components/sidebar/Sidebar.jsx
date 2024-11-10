import "./../sidebar/sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BloodtypeSharpIcon from "@mui/icons-material/BloodtypeSharp";
import MedicalInformationSharpIcon from "@mui/icons-material/MedicalInformationSharp";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import QueryStatsSharpIcon from "@mui/icons-material/QueryStatsSharp";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Epharmacy</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to={'/'}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/yourInventory">
            <li>
              <BloodtypeSharpIcon className="icon" />
              <span>Past order</span>
            </li>
          </Link>

          <Link to="/addorupdate">
            <li>
              <MedicalInformationSharpIcon className="icon" />
              <span>Current Order</span>
            </li>
          </Link>
          <Link to={"/updatedetails"}>
          <li>
            <PersonAddAltSharpIcon className="icon" />
            <span>Update Details of User</span>
          </li>
         </Link>
          <p className="title">USER</p>
          <li>
            <PersonSharpIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutSharpIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};
export default Sidebar;
