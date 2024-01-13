// src/components/Header.js
import React from 'react';
import cm from "../Assets/CM.jpg";
import mohit1 from "../Assets/mohit1.jpg";
import img2 from "../Assets/img2.jpg";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import '../Styles/Header.css'

const Headercomp = () => {
  return (
    <>
            <div className="header">
        {/*}  <div>
                <div><img src={apmap} className='apmap'/></div>
            </div>*/}
        <div className="three">
          <div className="exit">
            <button type="submit">
              <LogoutIcon />
            </button>
          </div>

          <div>
            <div>
              <img src={cm} className="cv-reddy" />
            </div>
          </div>

          <div>
            <div>
              <img src={img2} className="cm_logo" />
            </div>
          </div>

          <div>
            
            <div>
              <img src={mohit1} className="bs-reddy" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Headercomp

