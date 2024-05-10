import React from 'react';
import { BsCart3 ,BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
    BsListCheck,BsMenuButtonWideFill,BsFillGearFill } from 'react-icons/bs';
import logo from './assets/ButaLogo3.png'
function Sidebar({openSidebarToggle, OpenSidebar, changePage}){
    return(
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className="sidebar-title">
                <div className="sidebar-brand">
                   <img src={logo} style={{width:"220px", height:"40px"}}/>
                </div>
                <span className="icon close_icon" onClick={OpenSidebar}>X</span>
            </div>
            <ul className="sidebar-list"> 
                <li className="sidebar-list-item" onClick={() => changePage('home')}>
                    <a href="#">
                    <BsGrid1X2Fill className="icon"/> Dashboard
                    </a>
                </li>
                <li className="sidebar-list-item" onClick={() => changePage('calendar')}>
                    <a href="#">
                    <BsFillGrid3X3GapFill className="icon"/> Calendar
                    </a>
                </li>
                <li className="sidebar-list-item" onClick={() => changePage('customers')}>
                    <a href="#" >
                    <BsPeopleFill className="icon"/> Participants
                    </a>
                </li>
                <li className="sidebar-list-item" onClick={() => changePage('setting')}>
                    <a href="#">
                    <BsFillGearFill className="icon"/> Setting
                    </a>
                </li>
            </ul>
        </aside>
    )
}
export default Sidebar;