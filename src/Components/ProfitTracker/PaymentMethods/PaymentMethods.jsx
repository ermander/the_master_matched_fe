import React, { Component } from 'react';

// Bootstrap
import { Row, Col, Button, Table } from "react-bootstrap"

//Components
import NavBar from '../../Navbar/Navbar'
import SideBar from "../SideBar/SideBar"
import ModifyPaymentMethod from "./ModifyPaymentMethod"
import RicaricaSpesa from "./RicaricaSpesa"
import NewPaymentMethod from "./NewPaymentMethod"
import Trasferimento from "./Trasferimento"

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
        trasferimentoModalShow: false,
        users: []
    }

    fetchPaymentMethos = async () => {
        const response = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/payment-methods")
        if(response){
            const paymentMethods = await response.json()
            this.setState({ conti: paymentMethods, isLoading: false })
        }else{
            console.log("An error occurred while fetching the payment methods!")
        }
    }

    calculateTotalBalance = async () => {
        const response = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/payment-methods")
        const parsedResponde = await response.json()

        let balance = 0
        for(let i=0; i<parsedResponde.length; i++){
            let singleBalance = parseInt(parsedResponde[i].balance)
            balance = singleBalance + balance
        }
        this.setState({ totalBalance: balance})

    }

    deletePaymentMethod = async() => {
        const response = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/delete-payment-method/" + this.state.id, {
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
            const rawUsers = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/get-users")            
            if(rawUsers.ok){
                const users = await rawUsers.json()
                this.setState({ users: users })
            }
        } catch (error) {
            console.log(error)
        }
    }

    handleCloseModal = () => this.setState({ show: false })

    handleCloseRicaricaSpesa = () => this.setState({ showRicaricaSpesa: false })

    handlerCloseNewPaymentMethodModal = () => this.setState({ showNewPaymentMethodModal: false })

    handleCloseTrasferimentoModal = () => this.setState({ trasferimentoModalShow: false })

    componentDidMount = () => {
        this.fetchPaymentMethos()
        this.calculateTotalBalance()
        this.fetchUsers()
    }

    render() {
        return (
            <>
            {/* MODALS */}
            <RicaricaSpesa 
                show={this.state.showRicaricaSpesa}
                noShow={this.handleCloseRicaricaSpesa}
                paymentMethods={this.state.conti}
                users={this.state.users}
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
            <Trasferimento
                show={this.state.trasferimentoModalShow}
                noShow={this.handleCloseTrasferimentoModal}
                paymentMethods={this.state.conti}
                />
            <NavBar />
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
                                        }}>Payment Methods</div>
                            <div style={{maxWidth: "350px"}} id="balance-counter">
                            <h3 id="counter">{this.state.totalBalance}€</h3>
                            <h4 id="saldo">Current Balance</h4>
                            <p id="saldo-info">Total closed bets, casino and deposits balance.</p>
                            </div>
                            <Button 
                                size="sm" 
                                variant="success" 
                                className="mr-1"
                                onClick={ () => this.setState({ showNewPaymentMethodModal: true })}
                                > 
                                    New Payment Method</Button>
                            <Button 
                                size="sm" 
                                variant="warning" 
                                className="mr-1"
                                onClick={ () => this.setState({ trasferimentoModalShow: true })}
                                >
                                   Transfer Balance</Button>
                            <Button 
                                size="sm" 
                                variant="info"
                                onClick={ () => this.setState({ showRicaricaSpesa: true })}
                                >
                                    Recharge / Spend</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Table striped bordered hover className="mt-2 odds-table" style={{width: "90vw"}}>
                                <thead className="table-data">
                                    <tr>
                                        <th>#</th>
                                        <th>Account holder</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Balance</th>
                                        <th>Option</th>
                                        <th>Option</th>
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
                                                                    Modify
                                                            </Button>
                                                        </td>
                                                        <td>
                                                            <Button
                                                                size="sm"
                                                                variant="danger"
                                                                onClick={ () => {
                                                                    this.setState({ id: element._id }, this.deletePaymentMethod)
                                                                }}>
                                                                    Delete
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