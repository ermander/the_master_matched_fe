import React, { Component } from 'react';

// Bootstrap
import { Row, Col, Button, Table } from "react-bootstrap"

// FontAwasome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScaleRight } from '@fortawesome/free-solid-svg-icons'

//Components
import NavBar from '../../Navbar/Navbar'
import SideBar from "../SideBar/SideBar"
import ModifyPaymentMethod from "./ModifyPaymentMethod"
import Ricarica_Spesa from "./Ricarica_Spesa"
import NewPaymentMethod from "./NewPaymentMethod"

//CSS
import "./paymentMethod.css"

class PaymentMethods extends Component {

    state = {
        conti: [],
        isLoading: true,
        show: false,
        accountHolder: "",
        id: "",
        description: "",
        accountName: "",
        totalBalance: "",
        showRicaricaSpesa: false,
        showNewPaymentMethodModal: false,
        users: []
    }

    fetchPaymentMethos = async () => {
        const response = await fetch("http://localhost:3002/profit-tracker/payment-methods")
        if(response){
            const paymentMethods = await response.json()
            this.setState({ conti: paymentMethods, isLoading: false })
        }else{
            console.log("An error occurred while fetching the payment methods!")
        }
    }

    calculateTotalBalance = async () => {
        const response = await fetch("http://localhost:3002/profit-tracker/payment-methods")
        const parsedResponde = await response.json()

        let balance = 0
        for(let i=0; i<parsedResponde.length; i++){
            let singleBalance = parseInt(parsedResponde[i].balance)
            balance = singleBalance + balance
        }
        console.log(balance)
        this.setState({ totalBalance: balance})

    }

    deletePaymentMethod = async() => {
        const response = await fetch("http://localhost:3002/profit-tracker/delete-payment-method/" + this.state.id, {
            method: "DELETE"
        })

        if(response.ok){
            console.log("Deleted successfully")
            window.location.reload()
        }else{
            console.log("An error occurred while trying to delete the payment method!")
        }
    }

    fetchUsers = async() => {
        try {
            const rawUsers = await fetch("http://localhost:3002/profit-tracker/get-users")            
            if(rawUsers.ok){
                const users = await rawUsers.json()
                this.setState({ users: users })
                console.log(users, "diocane")
            }
        } catch (error) {
            console.log(error)
        }
    }

    handleCloseModal = () => this.setState({ show: false })

    handleCloseRicaricaSpesa = () => this.setState({ showRicaricaSpesa: false })

    handlerCloseNewPaymentMethodModal = () => this.setState({ showNewPaymentMethodModal: false })

    componentDidMount = () => {
        this.fetchPaymentMethos()
        this.calculateTotalBalance()
        this.fetchUsers()
    }

    render() {
        return (
            <>
            <Ricarica_Spesa 
                show={this.state.showRicaricaSpesa}
                noShow={this.handleCloseRicaricaSpesa}
                paymentMethods={this.state.conti}
                />
            <ModifyPaymentMethod 
                noShow={this.handleCloseModal}
                show={this.state.show}
                accountHolder={this.state.accountHolder}
                id={this.state.id}
                name={this.state.accountName}
            />
            <NewPaymentMethod 
                show={this.state.showNewPaymentMethodModal}
                noShow={this.handlerCloseNewPaymentMethodModal}
                accountHolders={this.state.users}
                />
            <NavBar />
            <Row>
                <Col xs={1}>
                    <SideBar />
                </Col>
                <Col xs={11}>
                    <Row>
                        <Col xs={12}>
                            <h2>Metodi Di Pagamento</h2>
                            <div style={{maxWidth: "350px"}} id="balance-counter">
                            <h3 id="counter">{this.state.totalBalance}€</h3>
                            <h4 id="saldo">Saldo Attuale</h4>
                            <p id="saldo-info">Totale saldo scommesse chiuse, casinò e depositi.</p>
                            </div>
                            <Button 
                                size="sm" 
                                variant="success" 
                                className="mr-1"
                                onClick={ () => this.setState({ showNewPaymentMethodModal: true })}
                                > 
                                    Nuovo Metodo Di Pagamento</Button>
                            <Button size="sm" variant="warning" className="mr-1">Trasferisci Saldo</Button>
                            <Button 
                                size="sm" 
                                variant="info"
                                onClick={ () => this.setState({ showRicaricaSpesa: true })}
                                >
                                    Ricarica/Spesa</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Table striped bordered hover className="mt-2 odds-table" style={{width: "90vw"}}>
                                <thead className="table-data">
                                    <tr>
                                        <th>#</th>
                                        <th>Intestatario conto</th>
                                        <th>Nome</th>
                                        <th>Descrizione</th>
                                        <th>Saldo</th>
                                        <th>Opzioni</th>
                                        <th>Opzioni</th>
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
                                            </tr>
                                        )
                                        :
                                        (
                                            this.state.conti.map((element, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>{i + 1}</td>
                                                        <td>{element.accountHolder}</td>
                                                        <td>{element.accountName}</td>
                                                        <td>{element.description}</td>
                                                        <td>{element.balance}€</td>
                                                        <td>
                                                            <Button 
                                                                size="sm" 
                                                                variant="warning" 
                                                                onClick={ () => this.setState({ 
                                                                    show: true, 
                                                                    accountHolder: element.accountHolder,
                                                                    id: element._id,
                                                                    description: element.description,
                                                                    accountName: element.accountName
                                                                    })} >
                                                                    Modifica
                                                            </Button>
                                                        </td>
                                                        <td>
                                                            <Button
                                                                size="sm"
                                                                variant="danger"
                                                                onClick={ () => {
                                                                    this.setState({ id: element._id }, this.deletePaymentMethod)
                                                                }}>
                                                                    Elimina
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        )
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </>
        );
    }
}

export default PaymentMethods;