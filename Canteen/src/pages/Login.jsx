import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//css
import "../css/Login.css"

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (!email.trim() || !password.trim()) {
      setErrorMessage('Please enter your email and password.');
      return;
    }

    // Simulated authentication (replace with your actual authentication logic)
    const testUserEmail = 'user@kiit.com';
    const testUserPassword = 'user123';
    const testAdminEmail = 'admin@kiit.com';
    const testAdminPassword = 'admin123';

    if (email === testUserEmail && password === testUserPassword) {
      // Successful login as user
      onLogin('user');
      navigate('/home');
    } else if (email === testAdminEmail && password === testAdminPassword) {
      // Successful login as admin
      onLogin('admin');
      navigate('/home');
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label className='email' htmlFor="email">Email:</label>
        <input 
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <label className='password' htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button className='submit-btn' type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
