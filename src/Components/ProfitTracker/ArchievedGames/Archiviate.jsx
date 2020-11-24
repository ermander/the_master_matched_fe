import React, { Component } from 'react';

// Components
import NavBar from "../../Navbar/Navbar"
import SideBar from '../SideBar/SideBar'

// React Router Dom
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

// React Boostrap
import { Col, Row, Table, Spinner, Button } from "react-bootstrap"

// React FontAwasome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"

class Archiviate extends Component {

    state = {
        archived: [],
        isLoading: true
    }

    fetchInProgressMatches = async() => {
        const url = "https://the-master-matched-be.herokuapp.com/profit-tracker/archived"
        const response = await fetch(url)
        const parsedResponse = await response.json()
        
        parsedResponse.forEach(element => {
            console.log(element.createdAt.split("T")[0])
            console.log(element.createdAt.split)          
        });
        this.setState({
            inProgress: parsedResponse,
            isLoading: false
        })
    }

    deleteMatch = async (id) => {
        try {
            console.log(id)
            const deleteMatch = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/delete-match/" + id, {
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

    componentDidMount(){
        this.fetchInProgressMatches()
    }


    render() {
        return (
            <>
            <NavBar />
            <Row className="main-row p-0">
                <Col xs={1} className="p-0">
                    <SideBar />
                </Col>
                <Col xs={11} className="p-0">
                    <Row >
                        <Col xs={12} className="p-0 ml-0">
                            <Row className="m-0"> 
                                <Col className="p-0">
                                    <div style={{
                                            backgroundColor: "#d08e46",
                                            textAlign: "center",
                                            fontSize: "50px",
                                            marginBottom: "3vh",
                                            color: "#efd9c0",
                                        }}>
                                            ARCHIVED BETS
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
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
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
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr> 
                                                    )
                                                    :
                                                    (
                                                        this.state.inProgress.map((element, i) => {
                                                            return(
                                                                <tr key={element._id} style={{alignItems: "center", fontWeight: "bold"}}>
                                                                    {console.log(element)}
                                                                    <td>Bet #{element._id}</td>
                                                                    <td>{element.createdAt.split("T")[0]} {element.createdAt.split("T")[1].split(".")[0]}</td>
                                                                    <td>{element.data}</td>
                                                                    <td>{element.home} vs {element.away}</td>
                                                                    <td>{element.book}</td>
                                                                    <td>Notes</td>
                                                                    <td>
                                                                        <Button size="sm" variant="light">                                                                            
                                                                            <Link to={"/profit_tracker/archived-bet-details/" + element._id} style={{color: "white" }}>
                                                                                Details
                                                                            </Link>
                                                                        </Button>
                                                                    </td>
                                                                    <td>
                                                                        <Button size="sm" variant="success" onClick={ () => this.restoreMatch(element._id)}>                                                                            
                                                                            Restore
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

export default withRouter(Archiviate);