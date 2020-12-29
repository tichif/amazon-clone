import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Login.css';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/');
        }
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();

    // do some fancy stuff with firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push('/');
        }
      })
      .catch((err) => console.log(err));
  };

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
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={signIn}
            type='submit'
            className='login__signInButton'
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in, you agree to the Amazon Fake Clone Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-based Ads Notice
        </p>
        <button onClick={register} className='login__registerButton'>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
