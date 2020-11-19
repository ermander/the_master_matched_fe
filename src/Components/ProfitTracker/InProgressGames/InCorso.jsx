import React, { Component } from 'react';

// Components
import NavBar from "../../Navbar/Navbar"
import SideBar from '../SideBar/SideBar';
// React router don
import { Link } from "react-router-dom"

// React bootstrap
import { Col, Button, Row, Table, Spinner } from "react-bootstrap"

// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { faClone } from "@fortawesome/free-solid-svg-icons"

// CSS
import "../profit_tracker.css"

class InCorso extends Component {

    state = {
        inProgress: [],
        isLoading: true
    }

    fetchInProgressMatches = async() => {
        const url = "http://localhost:3002/profit-tracker/in-progress"
        const response = await fetch(url)
        const parsedResponse = await response.json()
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
                    <SideBar />
                </Col>
                <Col xs="11">
                    <Row>
                        <Col>
                            <Row> 
                                <Col xs={12}>
                                    <div style={{backgroundColor: "#d08e46",textAlign: "center",fontSize: "50px",marginBottom: "3vh",color: "#efd9c0"}}>
                                        IN PROGRESS BETS
                                    </div>
                                    <div>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Created at:</th>
                                                    <th>Event Date</th>
                                                    <th>Event</th>
                                                    <th>Book</th>
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
                                                            <td>Created at:</td>
                                                            <td>Event Date</td>
                                                            <td>Event</td>
                                                            <td>Book</td>
                                                            <td>Notes</td>
                                                            <td>+</td>
                                                            <td>+</td>
                                                            <td>+</td>
                                                            <td>+</td>
                                                        </tr> 
                                                    )
                                                    :
                                                    (
                                                        this.state.inProgress.map((element) => {
                                                            return(
                                                                <tr key={element._id} style={{alignItems: "center", fontWeight: "bold"}}>
                                                                    <td>Bet #{element._id}</td>
                                                                    <td>{element.createdAt.split("T")[0]} {element.createdAt.split("T")[1].split(".")[0]}</td>
                                                                    <td>{element.data}</td>
                                                                    <td>{element.home} vs {element.away}</td>
                                                                    <td>Book</td>
                                                                    <td>Notes</td>
                                                                    <td>
                                                                        <Button size="sm" variant="light">                                                                            
                                                                            <Link to={"/profit_tracker/bet_details/" + element._id} style={{color: "black" }}>
                                                                                Details
                                                                            </Link>
                                                                        </Button>
                                                                    </td>
                                                                    <td>
                                                                        <Button size="sm" variant="warning" onClick={ () => this.archiveMatch(element._id)}>
                                                                            <FontAwesomeIcon icon={faArchive} />
                                                                        </Button>
                                                                    </td>
                                                                    <td>
                                                                        <Button size="sm" variant="success" onClick={ () => this.cloneMatch(element._id)}>
                                                                            <FontAwesomeIcon icon={faClone} />
                                                                        </Button>
                                                                    </td>
                                                                    <td>
                                                                        <Button size="sm" variant="danger" onClick={ () => this.deleteMatch(element._id)}>
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