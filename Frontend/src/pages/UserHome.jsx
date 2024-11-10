import "./userHome.css";

import BloodtypeSharpIcon from "@mui/icons-material/BloodtypeSharp";
import MedicalInformationSharpIcon from "@mui/icons-material/MedicalInformationSharp";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import Sidebar from "../Components/UserSidebar.jsx";

import { Link } from "react-router-dom";
import Widgets from "../Components/UserWidgets.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
export default function UserHome() {

  const [userPastOrders, setUserPastOrders] = useState(0);
  useEffect(() => {

    const call = async () => {
      const resp = await axios.get('/userPastOrders');
      setUserPastOrders(resp.data.length);
    }
    call();

  }, [userPastOrders])
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        
        {/* <Carousel/> */}
        <div className="widgets">
          <Link to={"/userInventory"}>
            {" "}
            <Widgets
              name="Past Orders"
              count={userPastOrders}
              see="See The Medicines"
              icon={<BloodtypeSharpIcon />}
            />{" "}
          </Link>
          <Link to={"/addorupdate"}>
            {" "}
            <Widgets
              name="Current Orders"
              count={"Current Orders"}
              see="See The Medicines"
              icon={<MedicalInformationSharpIcon />}
            />{" "}
          </Link>
          <Link to={"/userUpdatedetails"}>
            {" "}
            <Widgets
              name="Update Details Of The User"
              count={"Update Details"}
              see="See The Details"
              icon={<PersonAddAltSharpIcon />}
            />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
