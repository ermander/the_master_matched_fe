import React, { Component } from 'react';

// Components
import NavBar from "../Navbar/Navbar"
import SideBar from "./SideBar"
import { withRouter } from "react-router-dom"

// React bootstrap
import { Col, Row } from "react-bootstrap"



class BetDetails extends Component {

    state = {
        bet : [],
        isLoading: true
    }

    fetchBet = async () => {
        const response = await fetch("http://localhost:3002/profit-tracker/in-progress/" + this.props.match.params.id)
        // console.log(this.params.match.id)
        console.log(response)
    }

    componentDidMount = () => {
        this.fetchBet()
    }

    render() {
        return (
            <>
            <NavBar />
            <Row className="main-row">
                <Col xs={1}>
                    <SideBar />
                </Col>
                <Col xs={11}>

                </Col>
            </Row>
            </>
        );
    }
}

export default withRouter(BetDetails);