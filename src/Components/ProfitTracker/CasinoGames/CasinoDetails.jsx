import React, { Component } from 'react';

// Components
import NavBar from "../../Navbar/Navbar"
import SideBar from "../SideBar/SideBar"
import NuovaGiocata from "./NuovaGiocata"
import ModificaGiocata from "./ModificaGiocata"


// React bootstrap 
import { Row, Col, Button, Table } from "react-bootstrap"

class CasinoDetails extends Component {

    state = {
        giocateCasino: [],
        isLoading: false,
        bookmakers: [],
        showNuovaGiocata: false,
        casinoBets: [],
        balance: "",
        showModificaGiocata: false,
        casinoBet: []
    }

    handleShow = () => {this.setState({ showNuovaGiocata: true })}
    handleClose = () => {this.setState({ showNuovaGiocata: false })}
    showModificaGiocata = (casinoBet) => {this.setState({ showModificaGiocata: true, casinoBet: casinoBet })}
    noShowModificaGiocata = () => {this.setState({ showModificaGiocata: false })}
    
    saveBet = async () => {
        this.setState({
            showNuovaGiocata: false
        })
    }

    fetchBookmakers = async () => {
        const response = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/bookmakers")
        if(response.ok){
            const bookmakers = await response.json()
            this.setState({
                bookmakers: bookmakers
            })
        }
    }

    fetchCasinoBets = async () => {
        try {
            const response = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/casino")
            if(response.ok){
                const casinoBets = await response.json()
                let balance = 0
                for(let i=0; i<casinoBets.length; i++){
                    let singleBalance = parseInt(casinoBets[i].movement)
                    balance = singleBalance + balance
                }
    
                this.setState({
                    casinoBets: casinoBets,
                    balance: balance
                })
                console.log(this.state.balance)
            }            
        } catch (error) {
            console.log(error)
        }      
    }

    deleteCasinoBet = async(id) => {
        try {
            const response = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/delete-casino-bet/" + id, {
                method: "DELETE"
            })
            if(response.ok){
                console.log("ok")
                window.location.reload()
            }else{
                console.log("An error occurred while trying to delete the match")
            }            
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount = () => {
        this.fetchBookmakers()
        this.fetchCasinoBets()
    }

    render() {
        return (
            <div>
                <NavBar />
                <ModificaGiocata 
                    show={this.state.showModificaGiocata}
                    noShow={this.noShowModificaGiocata}
                    betInfo={this.state.casinoBet}
                />
                <NuovaGiocata 
                    show={this.state.showNuovaGiocata}
                    noShow={this.handleClose}
                    bookmakers={this.state.bookmakers}
                />
                <Row>
                    <Col xs={1}>
                        <SideBar />
                    </Col>
                    <Col xs={11}>
                        <Row>
                            <Col xs={12}>
                                <div style={{
                                            backgroundColor: "#d08e46",
                                            textAlign: "center",
                                            fontSize: "50px",
                                            marginBottom: "3vh",
                                            color: "#efd9c0",
                                        }}>CASINO</div>
                                <div style={{maxWidth: "350px"}} id="balance-counter">
                                <h3 id="counter">{this.state.balance}€</h3>
                                <h4 id="saldo">Current Casino Balance</h4>
                                <p id="saldo-info">This is the current balance of all casino bets.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Button 
                                    className="ml-0"
                                    variant="success"
                                    size="sm"
                                    onClick={this.handleShow}>
                                        New Bet
                                </Button>

                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>                                
                            <Table striped bordered hover className="odds-table" style={{width: "90vw"}}>
                                <thead className="table-data">
                                    <tr>
                                        <th>#</th>
                                        <th>Created at:</th>
                                        <th>Book</th>
                                        <th>Type</th>
                                        <th>Description</th>
                                        <th>Movement</th>
                                        <th>Options</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.casinoBets
                                        ?
                                        this.state.casinoBets.map((element, i) => {
                                            return(
                                                <tr>
                                                    <td>{i+1}</td>
                                                    <td>{element.createdAt.split("T")[0]} - {element.createdAt.split("T")[1].split(".")[0]}</td>
                                                    <td>{element.bookmakerName} {element.bookmakerHolder}</td>
                                                    <td>{element.type}</td>
                                                    <td>{element.descrizione}</td>
                                                    <td>{element.movement}€</td>
                                                    <td>
                                                        <Button
                                                            variant="warning"
                                                            size="sm"
                                                            onClick={() => this.showModificaGiocata(element)}>Modify</Button>
                                                    </td>
                                                    <td>
                                                        <Button
                                                            variant="danger"
                                                            size="sm"
                                                            onClick={() => this.deleteCasinoBet(element._id)}>Delete</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        :
                                        (
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <Button
                                                        variant="warning"
                                                        size="sm">Modify</Button>
                                                </td>
                                                <td>
                                                    <Button
                                                        variant="danger"
                                                        size="sm"
                                                        >Delete</Button>
                                                </td>    
                                            </tr>                                            
                                        )
                                    }
                                </tbody>
                            </Table>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>                
            </div>
        );
    }
}

export default CasinoDetails;