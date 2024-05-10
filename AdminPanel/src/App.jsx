import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Customers from './Customers';
import Calendar from './Calendar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

  const handleLogin = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
    setCurrentPage('home'); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setCurrentPage('login'); 
  };

  const changePage = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <div className="grid-container">
      {isLoggedIn ? (
     
        <>
          <Header onLogout={handleLogout} />
          <Sidebar changePage={changePage} />
         
          {currentPage === 'home' && <Home />}
          {currentPage === 'customers' && <Customers />}
          {currentPage === 'calendar' && <Calendar />}
        </>
      ) : (
       
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
