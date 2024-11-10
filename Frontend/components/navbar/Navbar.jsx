import "./../navbar/navbar.css";
import SupervisedUserCircleTwoToneIcon from "@mui/icons-material/SupervisedUserCircleTwoTone";
import ContactPhoneTwoToneIcon from "@mui/icons-material/ContactPhoneTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
// import { DarkModeContext } from "../../context/darkModeContext";
// eslint-disable-next-line no-unused-vars
import { useContext } from "react";

const Navbar = () => {
//   const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchTwoToneIcon />
        </div>
        <div className="items">
          <div className="item">
            <ContactPhoneTwoToneIcon className="icon" />
             ContactUs
          </div>
          <div className="item">
            <DarkModeTwoToneIcon
              className="icon"
            //   onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <SupervisedUserCircleTwoToneIcon className="icon" />
             AboutUs
          </div>
          <div className="item">
            <AccountCircleSharpIcon className="icon"/>
            User
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
