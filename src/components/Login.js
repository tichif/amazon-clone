import React from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

const Login = () => {
  return (
    <div className='login'>
      <Link to='/'>
        <img
          src='https://cdn.1min30.com/wp-content/uploads/2017/12/logo-amazon-1.jpg'
          alt='amazon'
          className='login__logo'
        />
      </Link>
      <div className='login__container'>
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type='email' />

          <h5>Password</h5>
          <input type='password' />

          <button className='login__signInButton'>Sign In</button>
        </form>
        <p>
          By signing in, you agree to the Amazon Fake Clone Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-based Ads Notice
        </p>
        <button className='login__registerButton'>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
