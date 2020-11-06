import React, { Component } from 'react';

// Components
import NavBar from "../../Navbar/Navbar"
import SideBar from "../SideBar/SideBar"

// React Router Dom
import { withRouter } from "react-router-dom"

// React bootstrap
import { Col, Row, Table, Button } from "react-bootstrap"

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
        const response = await fetch("http://localhost:3002/profit-tracker/in-progress/" + this.props.match.params.id)
        const betInfo = await response.json()
        console.log(betInfo)
        this.setState({
            betInfo: betInfo,
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
            <Row className="main-row">
                <Col xs={1}>
                    <SideBar />
                </Col>
                <Col xs={11}>                    
                    <div>
                        <h2>
                            DETTAGLI PUNTATA #{this.state.betInfo._id}
                        </h2>
                    </div>
                    <Row className="mt-3">
                        <Col xs={12}>
                    <>
                    <div id="left-buttons-div">
                        <Button 
                            variant="light"
                            size="sm"
                            className="bet-buttons">Nuova Puntata</Button>
                        <Button 
                            variant="light"
                            size="sm"
                            className="bet-buttons">Nuova Bancata</Button>
                        <Button 
                            variant="light"
                            size="sm"
                            className="bet-buttons">Nuovo Deposito</Button>
                    </div>
                    <div className="right-buttons-div">
                        <Button 
                            className="mb-1" 
                            variant="danger" 
                            size="sm" 
                            onClick={ () => this.deleteMatch(this.state.betInfo._id)}
                            >
                                <FontAwesomeIcon icon={faTrashAlt} />
                                <p style={{display: "inline-block", marginBottom: "0px", marginLeft: "0.5vw"}}>Cancella</p>
                        </Button>
                        <Button 
                            className="mb-1 ml-1"
                            size="sm"
                            variant="warning"
                            style={{color: "white"}}
                            >
                                <FontAwesomeIcon icon={faArchive} />
                                <p style={{display: "inline-block", marginBottom: "0px", marginLeft: "0.5vw"}}>Ripristina</p>
                        </Button>
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr className="table-head">
                                <th style={{width: "130px"}}>Data Evento</th>
                                <th>Evento</th> 
                                <th>Competizione</th> 
                                <th>Mercato</th> 
                                <th>Tipo</th> 
                                <th style={{minWidth: "85px"}}>Tipo Bonus</th>
                                <th>Conto</th>
                                <th>Stake</th> 
                                <th>Quota</th>
                                <th>Rischio</th>
                                <th>Bonus</th> 
                                <th>Rimborso</th> 
                                <th style={{minWidth: "85px"}}>Tasse %</th> 
                                <th>Movimento</th> 
                                <th style={{width: "130px"}}>Stato Evento</th>
                                <th></th>
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
                                            <td>inserire tipo puntata</td>
                                            <td>inseire bonus button</td>
                                            <td>inserire conto</td>
                                            <td>{this.state.betInfo.puntata}€</td>
                                            <td>{this.state.betInfo.quotaBanca}</td>
                                            <td>{this.state.betInfo.puntata}€</td>
                                            <td>inserire puntata bonus</td>
                                            <td>inserire rimborso</td>
                                            <td>0%</td>
                                            <td>{this.state.betInfo.puntata}€</td>
                                            <td>inserire stato evento button</td>
                                        </tr>
                                        <tr className="table-row">
                                            <td>{this.state.betInfo.data}</td>
                                            <td>{this.state.betInfo.home} vs {this.state.betInfo.away}</td>
                                            <td>{this.state.betInfo.torneo}</td>
                                            <td>{this.state.betInfo.tipoPuntata}</td>
                                            <td>inserire tipo puntata</td>
                                            <td>inseire bonus button</td>
                                            <td>inserire conto</td>
                                            <td>{this.state.betInfo.bancata}€</td>
                                            <td>{this.state.betInfo.quotaBanca}</td>
                                            <td>{this.state.betInfo.rischio}€</td>
                                            <td>inserire bonus banca</td>
                                            <td>inserire rimborso banca</td>
                                            <td>{this.state.betInfo.commissione}</td>
                                            <td>{this.state.betInfo.rischio}</td>
                                            <td>inserire stato evento button</td>
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