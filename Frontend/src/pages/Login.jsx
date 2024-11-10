// import React, { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import './signup.css'
// import axios from "axios";
// import LinearProgress from '@mui/material/LinearProgress';
// import { ContextData } from "../Context";

// const Login = () => {
  
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('')
//   const [isLoading, setIsLoading] = useState(false);

//   const { userData, setUserData } = useContext(ContextData);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     try {
//       const response = await axios.post('/login', {
//         email,
//         password
//       })

//       const UserDetails = response.data.user;


//       setUserData(UserDetails);
//       setIsLoading(false);
//       navigate('/')


//     }
//     catch(err) {

//       setIsLoading(false);
//       // setError(err.response.data.message)
//       if (err.response && err.response.data) {
//         setError(err.response.data.message);
//       }

//     }
//   };

//   return (
//     <>
//     {isLoading && <LinearProgress />}
//     <div className='login-page'>
//     <div className="auth-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           required
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value)
//           }}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={password}
//           required
//           onChange={(e) => {
//             setPassword(e.target.value)
//           }}
//         />
//         <button type="submit">Login</button>
//       </form>
//       <span className="error">{error}</span>
//       <p>
//         Don't have an account? <Link to="/signup">Sign Up here</Link>
//       </p>
//     </div>
//     </div>
//     </>
//   );
// };

// export default Login;


import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signup.css';
import LinearProgress from '@mui/material/LinearProgress';
import { ContextData } from "../Context";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { userData, setUserData } = useContext(ContextData);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:9001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        }),
        credentials: 'include' // To include cookies (like `axios.defaults.withCredentials`)
      });

      const result = await response.json();

      if (response.ok) {
        const userDetails = result.user;
        setUserData(userDetails);
        setIsLoading(false);
        navigate('/');
      } else {
        // Handle error response
        setIsLoading(false);
        setError(result.message || 'An error occurred. Please try again.');
      }

    } catch (err) {
      setIsLoading(false);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <>
      {isLoading && <LinearProgress />}
      <div className='login-page'>
        <div className="auth-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <span className="error">{error}</span>
          <p>
            Don't have an account? <Link to="/signup">Sign Up here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
