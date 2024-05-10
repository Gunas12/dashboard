import React, { useState } from 'react';
import './Login.css';
import './App.css';
import login from './assets/image.jpg';
function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '12345') {
      onLogin(username); 
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
       <img src={login} alt="Login" /> 
    <div className='lg'>
      <h2 className="login-title">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button ">
        Login
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
    
    </div>
  );
}

export default Login;
