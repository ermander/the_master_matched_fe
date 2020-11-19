import React, { Component } from "react";
import { MDBNavbarBrand } from "mdbreact";
import { Link } from 'react-router-dom';
import "./navbar.css"

class NavbarPage extends Component {
state = {
  collapseID: ""
};

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

render() {
  return (
    <div style={{display: "flex"}}>
      <MDBNavbarBrand>
       {/*} <img src="https://res.cloudinary.com/dnadfuxk0/image/upload/v1600363858/photo_2020-03-25_21.25.52_2_qsz4ss.png" alt="TheMasterMatchedLogo" id="logo"/>*/}
        <img src="https://res.cloudinary.com/dnadfuxk0/image/upload/v1600095327/Solo%20Capstone/Immagine_k8ekqo.jpg" alt="IlDiarioDelMatchedBettista" id="logo" />
      </MDBNavbarBrand>
      <button className="dropbtn ml-auto">
        <Link to="/oddsmatcher" style={{fontWeight: "400"}}>HOME</Link>
      </button>
      <button className="dropbtn">GUIDES</button>
      <div className="dropdown">
        <button className="dropbtn">OFFERS</button>
        <div className="dropdown-content">
          <Link>
            WELCOME BONUS
          </Link>
          <Link>
            RECURRING BONUS
          </Link>
          <Link>
            TELEGRAM CHANNEL
          </Link>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">TOOLS</button>
        <div className="dropdown-content">
          <Link to="/oddsmatcher">
            ODDSMATCHER
          </Link>
          <Link to="/dutcher">
            DUTCHER
          </Link>
          <Link to="/trimatcher">
            TRIMATCHER
          </Link>
          <Link>
            TARGETER
          </Link>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">CALCULATORS</button>
        <div className="dropdown-content">
        <Link to="/punta-banca">
            BACK - LAY
          </Link>
          <Link to="/punta-punta">
            BACK - BACK
          </Link>
          <Link to="/multi-tool">
            DUTCH - TOOL
          </Link>
          <Link to="/casino">
            MULTI- TOOL
          </Link>
          <Link to="">
            CONDITIONED
          </Link>
          <Link to="">
            COMBO - TOOL
          </Link>
          <Link to="/converter">
            CONVERTER
          </Link>
          <Link>
            CASINO
          </Link>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">ACCOUNT</button>
        <div className="dropdown-content">
          <Link>PROFILE</Link>
          <Link to="/profit_tracker/in-progress">PROFIT TRACKER</Link>
          <Link>LOG OUT</Link>
        </div>
      </div>
      
      <button className="dropbtn mr-3">FORUM</button>
      </div>
    );
  }
}

export default NavbarPage;