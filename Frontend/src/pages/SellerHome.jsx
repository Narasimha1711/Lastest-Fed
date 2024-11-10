import "./sellerHome.css";


import BloodtypeSharpIcon from "@mui/icons-material/BloodtypeSharp";
import MedicalInformationSharpIcon from "@mui/icons-material/MedicalInformationSharp";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import SellerSidebar from "../Components/SellerSidebar.jsx";
import Widgets from "./Widgets.jsx";

export default function SellerHome() {
  return (
    <div className="home">
      <SellerSidebar />
      <div className="homeContainer">
        
        {/* <Carousel/> */}
        <div className="widgets">
          <Widgets name="Your Inventory" count={123} see="See The Medicines" icon={<BloodtypeSharpIcon/>}/>
          <Widgets name="Add or Upadate The Medicine" count={123} see="See The Medicines" icon={<MedicalInformationSharpIcon/>}/>
          <Widgets name="Update Details Of The User" see="See The Details" icon={<PersonAddAltSharpIcon/>}/>
        </div>
      </div>
    </div>
  );
}

