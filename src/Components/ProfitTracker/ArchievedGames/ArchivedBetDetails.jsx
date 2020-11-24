import React, { Component } from 'react';

// Components
import NavBar from "../../Navbar/Navbar"
import SideBar from "../SideBar/SideBar"

// React Router Dom
import { withRouter } from "react-router-dom"

// React bootstrap
import { Col, Row, Table, Button, Form } from "react-bootstrap"

// CSS
import "./bet_details.css"

// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { faArchive } from '@fortawesome/free-solid-svg-icons'



class ArchivedBetDetails extends Component {

    state = {
        betInfo : [],
        isLoading: true
    }

    fetchBet = async () => {
        const response = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/in-progress/" + this.props.match.params.id)
        const betInfo = await response.json()
        console.log(betInfo)
        this.setState({
            betInfo: betInfo,
            isLoading: false
        })
    }

    restoreMatch = async(id) => {
        try {
            const restoreMatch = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/modify-match/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ inCorso: true })
            })
            if(restoreMatch.ok){
                console.log("ok")
                this.props.history.push("/profit_tracker/bet_details/" + id )
            }
        } catch (error) {
            console.log(error)
        }
    }

    deleteMatch = async (id) => {
        try {
            console.log(id)
            const deleteMatch = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/delete-match/" + id, {
                method: "DELETE"
            })

            if(deleteMatch.ok){
                console.log("Match correcly deleted")
                this.props.history.push('/profit_tracker/in-progress')
            } else {
                console.log("An error occured while trying to delete this match")
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount = () => {
        this.fetchBet()
    }

    render() {
        return (
            <>
            <NavBar />
            <Row className="main-row no-gutters">
                <Col xs={1} className="p-0">
                    <SideBar />
                </Col>
                <Col xs={11} className="p-0">                    
                    <div style={{
                            backgroundColor: "#d08e46",
                            textAlign: "center",
                            fontSize: "50px",
                            marginBottom: "3vh",
                            color: "#efd9c0",
                        }}>
                            BET DETAILS #{this.state.betInfo._id}
                    </div>
                    <Row className="mt-3 no-gutters">
                        <Col xs={12} className="p-0">
                    <>
                    <div id="left-buttons-div">
                        <Button 
                            variant="light"
                            size="sm"
                            className="bet-buttons">New Back Bet</Button>
                        <Button 
                            variant="light"
                            size="sm"
                            className="bet-buttons">New Lay Bet</Button>
                        <Button 
                            variant="light"
                            size="sm"
                            className="bet-buttons">New Deposit</Button>
                    </div>
                    <div className="right-buttons-div">
                        <Button 
                            className="mb-1" 
                            variant="danger" 
                            size="sm" 
                            onClick={ () => this.deleteMatch(this.state.betInfo._id)}
                            >
                                <FontAwesomeIcon icon={faTrashAlt} />
                                <p style={{display: "inline-block", marginBottom: "0px", marginLeft: "0.5vw"}}>Delete</p>
                        </Button>
                        <Button 
                            className="mb-1 ml-1"
                            size="sm"
                            variant="warning"
                            style={{color: "white"}}
                            onClick={this.restoreMatch(this.state.betInfo._id)}
                            >
                                <FontAwesomeIcon icon={faArchive} />
                                <p style={{display: "inline-block", marginBottom: "0px", marginLeft: "0.5vw"}}>Restore</p>
                        </Button>
                    </div>
                    <Table striped bordered hover className="mt-4">
                        <thead>
                            <tr className="table-head">
                                <th style={{width: "130px"}}>Event Date</th>
                                <th>Event</th> 
                                <th>Tournament</th> 
                                <th>Market</th> 
                                <th>Type</th> 
                                <th style={{minWidth: "85px"}}>Bonus Type</th>
                                <th>Book</th>
                                <th>Stake</th> 
                                <th>Quote</th>
                                <th>Risk</th>
                                <th>Bonus</th> 
                                <th>Refund</th> 
                                <th style={{minWidth: "85px"}}>Tax %</th> 
                                <th>Movement</th> 
                                <th style={{width: "130px"}}>Event State</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.isLoading 
                            ?
                            (
                                <tr>
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                </tr>
                            )
                            :
                            (
                                (
                                    <>
                                        <tr className="table-row">
                                            <td>{this.state.betInfo.data}</td>
                                            <td>{this.state.betInfo.home} vs {this.state.betInfo.away}</td>
                                            <td>{this.state.betInfo.torneo}</td>
                                            <td>{this.state.betInfo.tipoPuntata}</td>
                                            <td>{this.state.betInfo.exchange ? "Punta" : "..."}</td>
                                            <td>
                                                <Form.Group>
                                                    <Form.Control as="select" variant="light" size="sm">
                                                    <option>None</option>
                                                    <option>Bonus</option>
                                                    <option>Refund</option>
                                                    <option>FreeBet</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </td>
                                            <td>{this.state.betInfo.book}</td>
                                            <td>{this.state.betInfo.puntata}€</td>
                                            <td>{this.state.betInfo.quotaBanca}</td>
                                            <td>{this.state.betInfo.puntata}€</td>
                                            <td>{this.state.betInfo.puntataBonus ? this.state.betInfo.puntataBonus : "0.00€"}</td>
                                            <td>{this.state.betInfo.puntataRimborso ? this.state.betInfo.puntataRimborso : "0.00€"}</td>
                                            <td>0%</td>
                                            <td>{this.state.betInfo.puntata}€</td>
                                            <td>
                                                <Form.Group>
                                                    <Form.Control 
                                                        as="select"
                                                        style={{backgroundColor: this.state.bgColor1}}
                                                        size="sm"
                                                        onChange={(e)=>this.setState({bgColor1: e.currentTarget.value})}
                                                        >
                                                        <option>Draft</option>
                                                        <option value="#FFA500">In Progress</option>
                                                        <option value="#98FB98">Won</option>
                                                        <option value="#FF0000">Lost</option>
                                                        <option value="#FFA500">Cancelled</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </td>
                                        </tr>
                                        <tr className="table-row">
                                            <td>{this.state.betInfo.data}</td>
                                            <td>{this.state.betInfo.home} vs {this.state.betInfo.away}</td>
                                            <td>{this.state.betInfo.torneo}</td>
                                            <td>{this.state.betInfo.tipoPuntata}</td>
                                            <td>{this.state.betInfo.exchange ? "Banca" : "..."}</td>
                                            <td>/</td>
                                            <td>{this.state.betInfo.exchange}</td>
                                            <td>{this.state.betInfo.bancata}€</td>
                                            <td>{this.state.betInfo.quotaBanca}</td>
                                            <td>{this.state.betInfo.rischio}€</td>
                                            <td>/</td>
                                            <td>/</td>
                                            <td>{this.state.betInfo.commissione}</td>
                                            <td>{this.state.betInfo.rischio}</td>
                                            <td>
                                                <Form.Group>
                                                    <Form.Control 
                                                    as="select"
                                                    style={{backgroundColor: this.state.bgColor2}}
                                                    size="sm"
                                                    onChange={(e)=>this.setState({bgColor2: e.currentTarget.value})}
                                                    >
                                                        <option>Draft</option>
                                                        <option value="#FFA500">In Progress</option>
                                                        <option value="#98FB98">Won</option>
                                                        <option value="#FF0000">Lost</option>
                                                        <option value="#FFA500">Cancelled</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </td>
                                        </tr>
                                        </>
                                    )
                                )
                            }
                        </tbody>
                    </Table>
                    </>
                    </Col>
                    </Row>
                </Col>
            </Row>
            </>
        );
    }
}

export default withRouter(ArchivedBetDetails);