import React from 'react';
import { BsJustify , BsBoxArrowRight} from 'react-icons/bs';
import './App.css';
function Header({ OpenSidebar, currentPage, onLogout }) {
    const handleLogout = () => {
       onLogout();
        window.location.href = '/'; 
    };

    return (
        <header className="header">
            <div className="menu-icon">
                <BsJustify className="icon" onClick={OpenSidebar}/>
            </div>
            <div className="header-left">
               
            </div>
            <div className="header-right">
               <button onClick={handleLogout} className="btn1">LOG OUT </button>
            </div>
        </header>
    );
}

export default Header;
