import React, { Component } from 'react';
import { Nav, NavDropdown, Navbar, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./navbar.css"

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" className="navbar-backgroundcolor" style={{padding: "0 16px"}}>
                    <Navbar.Brand>
                        <Image 
                        src="https://res.cloudinary.com/dnadfuxk0/image/upload/v1600363858/photo_2020-03-25_21.25.52_2_qsz4ss.png"
                        style={{minWidth: "50px", paddingRight : "5vw", paddingLeft: "1vw"}}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto links">
                        <Nav.Link className="links mx-3">HOME</Nav.Link>
                        <Nav.Link className="links mx-3">GUIDE</Nav.Link>
                        <Nav.Link className="links mx-3">FORUM</Nav.Link>

                        {/* OFFERTE DI BENVENUTO E  RICORRENTI */}

                        <NavDropdown title="OFFERTE" id="collasible-nav-dropdown" className="mx-3">
                            <NavDropdown.Item>BONUS DI BENVENUTO</NavDropdown.Item>
                            <NavDropdown.Item>BONUS RICORRENTI</NavDropdown.Item>
                            <NavDropdown.Item>BONUS PERSONALI</NavDropdown.Item>
                        </NavDropdown>

                        {/* ODDSMATCHER, DUTCHER, TRIMATCHER E BEST ODDS */}

                        <NavDropdown title="STRUMENTI" id="collasible-nav-dropdown" className="mx-3">
                            <Link to="/oddsmatcher" className="dropdown-item">
                                ODDSMATCHER
                            </Link>
                            <Link to="/dutcher" className="dropdown-item">
                                DUTCHER
                            </Link>
                            <Link to="/trimatcher" className="dropdown-item">
                                TRIMATCHER
                            </Link>
                            <NavDropdown.Divider />
                            <Link to="/bestodds" className="dropdown-item">
                                BEST ODDS
                            </Link>
                        </NavDropdown>

                        {/* CALCOLATORI PUNTA-BANCA, PUNTA-PUNTA, PUNTA 1X2, MULTITOOL, CONVERTER, CASINO */}


                        <NavDropdown title="CALCOLATORI" id="collasible-nav-dropdown" className="mx-3">
                            <NavDropdown.Item>PUNTA-BANCA</NavDropdown.Item>
                            <NavDropdown.Item>PUNTA-PUNTA</NavDropdown.Item>
                            <NavDropdown.Item>MULTITOOL</NavDropdown.Item>
                            <NavDropdown.Item>CONVERTER</NavDropdown.Item>
                            <NavDropdown.Item>CASINO</NavDropdown.Item>
                        </NavDropdown>

                        {/* OPZIONI ACCOUNT PERSONALE */}

                        <NavDropdown title="ACCOUNT" id="collasible-nav-dropdown" className="mx-3">
                            <NavDropdown.Item>PROFILO PERSONALE</NavDropdown.Item>
                            <Link to="/profit_tracker/in-progress" className="dropdown-item">
                                PROFIT TRACKER
                            </Link>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item>LOG OUT</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>                
            </div>
        );
    }
}

export default NavBar;