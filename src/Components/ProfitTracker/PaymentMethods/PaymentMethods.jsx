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
        totalBalance: ""
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

    handleCloseModal = () => this.setState({ show: false })

    componentDidMount = () => {
        this.fetchPaymentMethos()
        this.calculateTotalBalance()
    }

    render() {
        return (
            <>
            <ModifyPaymentMethod 
                noShow={this.handleCloseModal}
                show={this.state.show}
                accountHolder={this.state.accountHolder}
                id={this.state.id}
                name={this.state.accountName}
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
                            <Button size="sm" variant="success" className="mr-1"> Nuovo Metodo Di Pagamento</Button>
                            <Button size="sm" variant="warning" className="mr-1">Trasferisci Saldo</Button>
                            <Button size="sm" variant="info">Ricariche/Spese</Button>
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