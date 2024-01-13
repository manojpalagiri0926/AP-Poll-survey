import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import partylogo from "../Assets/partylogo.jpg";
import cm from "../Assets/CM.jpg";
import mohit1 from "../Assets/mohit1.jpg";
import img2 from "../Assets/img2.jpg";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ChecklistIcon from "@mui/icons-material/Checklist";
import BlockIcon from "@mui/icons-material/Block";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import LogoutIcon from "@mui/icons-material/Logout";
import {useState} from 'react'

//import { Sidebardata } from './Sidebardata';

function Sidebar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMenuOpen2, setMenuOpen2] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const toggleMenu2 = () => {
    setMenuOpen2(!isMenuOpen2);
  };
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <>

      
      <div className="back">
      <div className="sidebar">
        <div className="menu">
          <div>
            <img src={partylogo} className="party-logo" />
          </div>
          <div className="name">
            <b>
              CHANDRAGIRI
              <br /> CONSTITUENCY
            </b>
            <hr className="new1"/>
          </div>

          <div className="mlist">
            <div className="hom">
              <li style={{
            backgroundColor: activeItem === 'item1' ? '#07BE1F' : 'transparent',width:'90%',borderRadius:'8px',marginLeft:'10px',height:'40px',padding:'4px'
          }}
          onClick={() => handleItemClick('item1')}>
<Link to="" className="active">
  <HomeIcon /> Home
</Link>
              </li>
            </div>
            <div className="vot">
              <li style={{
            backgroundColor: activeItem === 'item2' ? '#07BE1F' : 'transparent',width:'90%',marginLeft:'10px',borderRadius:'8px',height:'40px',padding:'4px'
          }}
          onClick={() => handleItemClick('item2')}>
              <Link to="/voter/">
              <HowToRegIcon /> Voters
              </Link>
              </li>
            </div>
            <button  id = 'nav' onClick={toggleMenu}><ConfirmationNumberIcon/> Tickets</button>
      {isMenuOpen && (
        <div className="nav-elements">
          <li style={{
            backgroundColor: activeItem === 'item3' ? '#07BE1F' : 'transparent',width:'90%',marginLeft:'10px',borderRadius:'8px',height:'40px',padding:'4px'
          }}
          onClick={() => handleItemClick('item3')}><Link to="/viewticket/">
          <ConfirmationNumberIcon/> View Tickets
        </Link></li><br/>
        

                  <li style={{
            backgroundColor: activeItem === 'item4' ? '#07BE1F' : 'transparent',width:'90%',marginLeft:'10px',borderRadius:'8px',height:'40px',padding:'4px'
          }}
          onClick={() => handleItemClick('item4')}><Link id = 'link' to="resolved/">
                    <ChecklistIcon/> 
                     Resolved Tickets
                  </Link></li><br/>
                  <li style={{
            backgroundColor: activeItem === 'item5' ? '#07BE1F' : 'transparent',width:'90%',marginLeft:'10px',borderRadius:'8px',height:'40px',padding:'4px'
          }}
          onClick={() => handleItemClick('item5')}><Link id = 'link' to="closed/">
                    <BlockIcon/> 
                    Closed Tickets
                  </Link></li>
          {/* Add more menu items as needed */}
         
        </div>
        
      )}<br></br>
       <button id = 'nav' onClick={toggleMenu2}> <SupervisorAccountIcon /> Admin</button>
       {isMenuOpen2 && (
        <div className="nav-elements">
          <li style={{
            backgroundColor: activeItem === 'item6' ? '#07BE1F' : 'transparent',width:'90%',marginLeft:'10px',borderRadius:'8px',height:'40px',padding:'4px'
          }}
          onClick={() => handleItemClick('item6')}><Link id = 'link' to="permissions/">Access&Permissions</Link></li><br/>
          <li style={{
            backgroundColor: activeItem === 'item7' ? '#07BE1F' : 'transparent',width:'90%',marginLeft:'10px',borderRadius:'8px',height:'40px',padding:'4px'
          }}
          onClick={() => handleItemClick('item7')}><Link id = 'link' to="mapping/">User Mapping</Link></li><br/>
          <li style={{
            backgroundColor: activeItem === 'item8' ? '#07BE1F' : 'transparent',width:'90%',marginLeft:'10px',borderRadius:'8px',height:'40px',padding:'4px'
          }}
          onClick={() => handleItemClick('item8')}><Link id = 'link'to="political/">Political Parties</Link></li><br/>
          <li style={{
            backgroundColor: activeItem === 'item9' ? '#07BE1F' : 'transparent',width:'90%',marginLeft:'10px',borderRadius:'8px',height:'40px',padding:'4px'
          }}
          onClick={() => handleItemClick('item9')}><Link id = 'link' to="constituencies/">Constituencies</Link></li><br/>
          <li style={{
            backgroundColor: activeItem === 'item10' ? '#07BE1F' : 'transparent',width:'90%',marginLeft:'10px',borderRadius:'8px',height:'40px',padding:'4px'
          }}
          onClick={() => handleItemClick('item10')}><Link id = 'link' to="districts/">Districts</Link></li><br/>
          <li style={{
            backgroundColor: activeItem === 'item11' ? '#07BE1F' : 'transparent',width:'90%',marginLeft:'10px',borderRadius:'8px',height:'40px',padding:'4px'
          }}
          onClick={() => handleItemClick('item11')}><Link id = 'link' to="addconstituencies/">Add Constituencies</Link></li><br/>
          <li style={{
            backgroundColor: activeItem === 'item12' ? '#07BE1F' : 'transparent',width:'90%',marginLeft:'10px',borderRadius:'8px',height:'40px',padding:'4px'
          }}
          onClick={() => handleItemClick('item12')}><Link id = 'link' to="mandal/">Mandals</Link></li><br/>
          <li style={{
            backgroundColor: activeItem === 'item13' ? '#07BE1F' : 'transparent',width:'90%',marginLeft:'10px',borderRadius:'8px',height:'40px',padding:'4px'
          }}
          onClick={() => handleItemClick('item13')}><Link id = 'link' to="panchayat/">Panchayaties&Cities</Link></li><br/>
          <li style={{
            backgroundColor: activeItem === 'item14' ? '#07BE1F' : 'transparent',width:'90%',marginLeft:'10px',borderRadius:'8px',height:'40px',padding:'4px'
          }}
          onClick={() => handleItemClick('item14')}><Link id = 'link' to="villages/">Villages and Wards</Link></li>
          {/* Add more menu items as needed */}
          
         
        </div>

)}
          </div>
        </div>
      </div>
      </div>
      
      {/*<footer>
      <p>&copy; 2023 Your Website Name</p>
    </footer>*/}
    </>
  );
}

export default Sidebar;
