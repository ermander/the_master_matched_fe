import React, { Component } from 'react';
import NavBar from "../Navbar/Navbar"
import SideBar from "./SideBar"
import { Link } from "react-router-dom"
import { Col, Row, Table, Spinner, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"

class Archiviate extends Component {

    state = {
        archived: [],
        isLoading: true
    }

    fetchInProgressMatches = async() => {
        const url = "http://localhost:3002/profit-tracker/archived"
        const response = await fetch(url)
        const parsedResponse = await response.json()
        this.setState({
            inProgress: parsedResponse,
            isLoading: false
        })
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

    componentDidMount(){
        this.fetchInProgressMatches()
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
                                                            <td>Creata il:</td>
                                                            <td>Data evento</td>
                                                            <td>Evento</td>
                                                            <td>Conto</td>
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
                                                                    <td>Puntata #{element._id}</td>
                                                                    <td>{element.createdAt}</td>
                                                                    <td>{element.data}</td>
                                                                    <td>{element.home} vs {element.away}</td>
                                                                    <td>Conto</td>
                                                                    <td>Notes</td>
                                                                    <td>
                                                                        <Button>                                                                            
                                                                            <Link to={"/profit_tracker/bet_details/" + element._id} style={{color: "white" }}>
                                                                                Dettagli
                                                                            </Link>
                                                                        </Button>
                                                                    </td>
                                                                    <td>
                                                                        <Button variant="success">                                                                            
                                                                            Ripristina
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

export default Archiviate;