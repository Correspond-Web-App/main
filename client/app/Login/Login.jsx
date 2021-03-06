import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = ({ loggedIn, setLoggedIn, username, setUsername }) => {
  const [password, setPassword] = useState('');


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Authentication, Route to main page
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    axios.post('/login', {
      username: username,
      password: password
    })
      .then((response) => {
        // console.log('Login success');
        // console.log(`response`, response);
        setLoggedIn(true);
      })
      .catch((error) => {
        console.log('Login failure');
        console.log(`error`, error);
        toast('Invalid login credentials')
      })
  }

  if (loggedIn) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <div className="login-page">
      <ToastContainer />
      <div className="title-and-catchphrase" >
        <h1 className="login-page-title" >Correspond</h1>
        <div className="catchphrase">Turn The Page. Meet A Friend.</div>
      </div>
      <div id="login-containter">
        <div className="login-header header">Welcome!</div>
        <form onSubmit={handleLogin}>
          <label>
            {'Username '}<br></br>
            <input type="text" onChange={handleUsernameChange} className="login-input"></input>
          </label><br></br>
          <label>
            {'Password '}<br></br>
            <input type="password" onChange={handlePasswordChange} className="login-input"></input>
          </label><br></br>
          <input type="submit" value="LOGIN" className="login-button"></input>
        </form>
        <Link to="/signup" className="sign-up-link" >Don't have an account? Sign up here!</Link>
      </div>
    </div>
  )
}

export default Login
