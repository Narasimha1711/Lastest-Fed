import React, { useState } from 'react'
import { TextField } from '@mui/material'
import './signup.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';



const Signup = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  
  const navigate = useNavigate();

  async function handleSubmit(e) {

    e.preventDefault();
    setIsLoading(true);
    

    try{

      await axios.post('/register', {
        username,
        password,
        email
      })

      setIsLoading(false);
      navigate('/login')
    }

    catch(err) {
      
      setIsLoading(false);
      setError(err.response.data.message);
      
    }

    setEmail('')
    setUsername('')
    setPassword('')

  }



  return (
    <>

  { isLoading && <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>}

        {/* <div className='form'>

        <form onSubmit={submitForm}>

          <div className='content'>

              <label htmlFor='username'>UserName</label>
              <TextField id="outlined-basic" label="UserName" required variant="outlined" className='input1' onChange={(e) => {
                setUsername(e.target.value)
              }}
              value={username}
              />


            <label htmlFor='password'>Password</label>
              <TextField id="password" label="Password" variant="outlined" required type='password' className='input1' onChange={(e) => {
                setPassword(e.target.value)
              }}
              value={password}
              />
               <label htmlFor='email'>Email</label>
              <TextField id="email" label="Email" variant="outlined" type='email' required className='input1' onChange={(e) => {
                setEmail(e.target.value)
              }}
              value={email}
              />

              <div className='error'>
                {error}
              </div>

              
              <button type='submit' className='submit'>Signup</button>
        </div>
        
          <div>
        
          </div>
        </form>

        </div> */}
        
        <div className='login-page'>
        <div  className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <button type="submit">Sign Up</button>
        
      </form>
      <span className='error'>{error}</span>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
          </div>

        
    </>
  )
}

export default Signup
