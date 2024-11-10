/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// import "./App.css";
// import IMAGE from "../assets/New Gif.gif"

// const App =()=>{

//     return(
//         <div className="backgroundcolor">
//             <img src={IMAGE} alt="image" className="image" />
//             <div className="text">
//                 <h1>Discover a human pharmacy</h1>
//                 <div className="subtext">
//                     <h3>We are dedicated healthcare professionals, </h3>
//                     <h3>committed to taking care of every detail of your health.</h3>
//                     <h3> You deserve it!</h3>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default App;


// 

import React from "react";
import "./App.css";
// import backgroundImage from "./assets/narasimha 2.jpg"; // Replace with your actual image file name

const App = () => {
  return (
    <div className="hero-section">
      <div className="content">
        <h5 className="subheading">WE'RE THE PHARMEDIC</h5>
        <h1 className="main-heading">Delivering Wellness with Every Prescription</h1>
        <p className="description">
          Euismod sapien eros mus imperdiet commodo tellus luctus. Eleifend
          ultrices primis litora turpis nisl donec euismod habitant erat dolor.
        </p>
        <button className="btn">Discover More</button>
      </div>
    </div>
  );
};

export default App;
