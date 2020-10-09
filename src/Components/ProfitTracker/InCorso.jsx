import React, { Component } from 'react';
import NavBar from "../Navbar/Navbar"
import { Link } from "react-router-dom"
import { Col, Button, Row, Table, Spinner } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faArchive } from '@fortawesome/free-solid-svg-icons'
import { faDiceTwo } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { faClone } from "@fortawesome/free-solid-svg-icons"

import "./profit_tracker.css"

class InCorso extends Component {

    state = {
        inProgress: [],
        isLoading: true
    }

    fetchInProgressMatches = async() => {
        const url = "http://localhost:3002/profit-tracker/in-progress"
        const response = await fetch(url)
        const parsedResponse = await response.json()
        console.log(parsedResponse)
        this.setState({
            inProgress: parsedResponse,
            isLoading: false
        })
    }

    componentDidMount(){
        this.fetchInProgressMatches()
    }

    deleteMatch = async (id) => {
        try {
            console.log(id)
            const deleteMatch = await fetch("http://localhost:3002/profit-tracker/delete-match/" + id, {
                method: "DELETE"
            })

            if(deleteMatch.ok){
                console.log("Match correcly deleted")
                window.location.reload()
            } else {
                console.log("An error occured while trying to delete this match")
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    cloneMatch = async (id) => {
        try {
            const response = await fetch("http://localhost:3002/profit-tracker/in-progress/" + id)
            const parsedResponse = await response.json()
            console.log(parsedResponse)
            delete parsedResponse._id
            const cloneMatch = await fetch("http://localhost:3002/profit-tracker/save-match",{
                method: "POST",
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify(parsedResponse)
                })
                if(cloneMatch.ok){
                    console.log("Match cloned deleted")
                    window.location.reload()
                } else {
                    console.log("An error occured while trying to clone this match")
                }
        } catch (error) {
            console.log(error)
        }
    }

    archiveMatch = async (id) => {
        try {
            const response = await fetch("http://localhost:3002/profit-tracker/modify-match/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ inCorso: false })

            })
            if(response.ok){
                console.log("ok")
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <>
            <NavBar />
            <Row className="main-row">
                <Col xs="1">
                    <Row>
                        <Col>
                            <Link to="/profit_tracker/in-progress">
                                <FontAwesomeIcon icon={faSpinner} className="fa-iconss"/>                            
                                <p className="fa-iconss-description" style={{color: "black"}}>In Corso</p>
                            </Link>                            
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/profit_tracker/archived">
                                <FontAwesomeIcon icon={faArchive} className="fa-iconss"/>
                                <p className="fa-iconss-description" style={{color: "black"}}>Archivio</p>
                            </Link>                            
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/profit_tracker/casino">
                                <FontAwesomeIcon icon={faDiceTwo} className="fa-iconss"/>
                                <p className="fa-iconss-description" style={{color: "black"}}>Casino</p>
                            </Link>                            
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/profit_tracker/memo">
                                <FontAwesomeIcon icon={faCalendarAlt} className="fa-iconss"/>
                                <p className="fa-iconss-description" style={{color: "black"}}>Promemoria</p>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/profit_tracker/users">
                                <FontAwesomeIcon icon={faUserFriends} className="fa-iconss"/>
                                <p className="fa-iconss-description" style={{color: "black"}}>Utenti</p>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/profit_tracker/payments">
                                <FontAwesomeIcon icon={faCreditCard} className="fa-iconss"/>
                                <p className="fa-iconss-description" style={{color: "black"}}>Pagamenti</p>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/profit_tracker/bookmakers">
                                <FontAwesomeIcon icon={faUserCircle} className="fa-iconss"/>
                                <p className="fa-iconss-description" style={{color: "black"}}>Books</p>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/profit_tracker/transactions">
                                <FontAwesomeIcon icon={faList} className="fa-iconss"/>
                                <p className="fa-iconss-description" style={{color: "black"}}>Transazioni</p>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/profit_tracker/balance">
                                <FontAwesomeIcon icon={faBalanceScale} className="fa-iconss"/>
                                <p className="fa-iconss-description" style={{color: "black"}}>Bilancio</p>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Link to="/profit_tracker/earnings"></Link>
                            <FontAwesomeIcon icon={faMoneyBill} className="fa-iconss"/>
                            <p className="fa-iconss-description" style={{color: "black"}}>Profit/Loss</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs="11">
                    <Row>
                        <Col>
                            <Row> 
                                <Col xs={12}>
                                    <div style={{display: "flex"}}>
                                        <p className="inCorso-title">SCOMMESSE IN CORSO</p>
                                    </div>
                                    <div>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Creata il:</th>
                                                    <th>Data evento</th>
                                                    <th>Evento</th>
                                                    <th>Conto</th>
                                                    <th>Notes</th>
                                                    <th>+</th>
                                                    <th>+</th>
                                                    <th>+</th>
                                                    <th>+</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.isLoading
                                                    ?
                                                    (
                                                        <tr>
                                                            <td>
                                                                <Spinner />
                                                            </td>
                                                            <td>Creata il:</td>
                                                            <td>Data evento</td>
                                                            <td>Evento</td>
                                                            <td>Conto</td>
                                                            <td>Notes</td>
                                                            <td>+</td>
                                                            <td>+</td>
                                                            <td>+</td>
                                                            <td>+</td>
                                                        </tr> 
                                                    )
                                                    :
                                                    (
                                                        this.state.inProgress.map((element, i) => {
                                                            return(
                                                                <tr key={element._id} style={{alignItems: "center", fontWeight: "bold"}}>
                                                                    <td>Puntata #{element._id}</td>
                                                                    <td>{element.createdAt}</td>
                                                                    <td>{element.data}</td>
                                                                    <td>{element.home} vs {element.away}</td>
                                                                    <td>Conto</td>
                                                                    <td>Notes</td>
                                                                    <td>
                                                                        <Button>                                                                            
                                                                            <Link to="" style={{color: "white" }}>
                                                                                Dettagli
                                                                            </Link>
                                                                        </Button>
                                                                    </td>
                                                                    <td>
                                                                        <Button variant="warning" onClick={ () => this.archiveMatch(element._id)}>
                                                                            <FontAwesomeIcon icon={faArchive} />
                                                                        </Button>
                                                                    </td>
                                                                    <td>
                                                                        <Button variant="success" onClick={ () => this.cloneMatch(element._id)}>
                                                                            <FontAwesomeIcon icon={faClone} />
                                                                        </Button>
                                                                    </td>
                                                                    <td>
                                                                        <Button variant="danger" onClick={ () => this.deleteMatch(element._id)}>
                                                                            <FontAwesomeIcon icon={faTrashAlt} />
                                                                        </Button>
                                                                    </td>
                                                                </tr>       
                                                            )                                                      
                                                        })
                                                    )                                               
                                                }
                                            </tbody>
                                        
                                        </Table>                                        
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </>
        );
    }
}

export default InCorso;