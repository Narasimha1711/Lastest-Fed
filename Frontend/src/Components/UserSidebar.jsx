import "./userSidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BloodtypeSharpIcon from "@mui/icons-material/BloodtypeSharp";
import MedicalInformationSharpIcon from "@mui/icons-material/MedicalInformationSharp";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
// eslint-disable-next-line no-unused-vars
import QueryStatsSharpIcon from "@mui/icons-material/QueryStatsSharp";
import { Link } from "react-router-dom";

const UserSidebar = () => { 
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Epharmacy</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to={"/userDashboard"}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/userInventory">
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
          <Link to={"/userUpdatedetails"}>
            <li>
              <PersonAddAltSharpIcon className="icon" />
              <span>Update Details of User</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default UserSidebar;
