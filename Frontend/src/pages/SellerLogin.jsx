// /* eslint-disable react/no-unescaped-entities */
// // import "./../assets/SellerLogin.css";
// import './SellerLogin.css'
// import IMAGE from "../assets/MedicineGif.gif";
// import IMAGE_2 from "../assets/Medicine2Gif.gif";
// import { FaUser, FaLock } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { useContext, useState } from 'react';
// import axios from 'axios';
// import SellerContext, { SellerContextData } from '../SellerContext';
// export default function SellerLogin() {

//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setpassword] = useState('');
//   const [error, setError] = useState('')
//   // const { sellerDetails, setSellerDetails } = useContext(SellerC);
//   const { sellerData, setSellerData } = useContext(SellerContextData);
  

//   const onSubmit = async (e) => {

//     e.preventDefault();

    
    
//       try {

//         const response = await axios.post('/sellerLogin', { email, password });

//         const sellerd = response.data.seller;
//         setSellerData(sellerd)
//         navigate('/sellerAddMedicine')
//       }
//       catch(err) {
//         console.log(err);
//         setError(err.response.data.message);
//       }

//     }



//   return (
//     <div>
//       <div className="Back-ground-image">
//         <img src={IMAGE} alt="img" className="img" />
//         <img src={IMAGE_2} alt="img" className="img2" />
//       </div>

//       <div className="wrapper">
//         <form action="POST" onSubmit={onSubmit}>
//           <h1>Login</h1>
//           <div className="input-box">
//             <input type="email" name="email" style={{paddingLeft: '1rem'}} placeholder="Email" required value={email} onChange={(e) => { setEmail(e.target.value)}}/>
//             <FaUser className="icon" />
//           </div>
//           <div className="input-box">
//             <input type="password" name='password' style={{paddingLeft: '1rem'}} placeholder="Password" required value={password} onChange={(e) => { setpassword(e.target.value)}}/>
//             <FaLock className="icon" />
//           </div>

//           <div className="remember-forget">
//             <label>
//               <input type="checkbox" />
//               Remember me
//             </label>
//             <a href="#">Forget Password</a>
//           </div>

//           <button type="submit">Login</button>

//           <div style={{color: 'red', fontWeight: '800', position: 'relative', top: '1rem', left: '8rem'}}>
//             {error}
//             </div>

//           <div className="register-link">
//             <p>
//               Don't Have an Account ?
//               <Link to="/sellersignup">
//                 <span> Register</span>
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


import './SellerLogin.css';
import IMAGE from "../assets/MedicineGif.gif";
import IMAGE_2 from "../assets/Medicine2Gif.gif";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import SellerContext, { SellerContextData } from '../SellerContext';

export default function SellerLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { sellerData, setSellerData } = useContext(SellerContextData);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:9001/sellerLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // To include cookies if required
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      const sellerd = data.seller;
      setSellerData(sellerd);
      navigate('/sellerAddMedicine');
    } catch (err) {
      console.log(err);
      setError(err.message || 'Something went wrong');
    }
  };

  return (
    <div>
      <div className="Back-ground-image">
        <img src={IMAGE} alt="img" className="img" />
        <img src={IMAGE_2} alt="img" className="img2" />
      </div>

      <div className="wrapper">
        <form onSubmit={onSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="email"
              name="email"
              style={{ paddingLeft: '1rem' }}
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              name='password'
              style={{ paddingLeft: '1rem' }}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forget Password</a>
          </div>

          <button type="submit">Login</button>

          <div style={{ color: 'red', fontWeight: '800', position: 'relative', top: '1rem', left: '8rem' }}>
            {error}
          </div>

          <div className="register-link">
            <p>
              Don't Have an Account ?
              <Link to="/sellersignup">
                <span> Register</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
