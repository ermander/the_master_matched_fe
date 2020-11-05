import React, { Component } from 'react';

// ReactBoostrap
import { FormControl, Modal, Button, InputGroup, Form } from 'react-bootstrap';

class NewPaymentMethod extends Component {

    state = {
        name: "",
        description: "",
        balance: "",
        accountHolder: "",
    }

    saveNewPaymentMethod = async() => {
        try {
            const data = {
                accountHolder: this.state.accountHolder !== "" ? this.state.accountHolder : this.props.accountHolders[0],
                accountName: this.state.name,
                description: this.state.description,
                balance: this.state.balance !== "" ? this.state.balance : "0"
            }

            const NewPaymentMethod = await fetch("http://localhost:3002/profit-tracker/new-payment-method", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const response = await NewPaymentMethod.json()

            if(response){
                console.log("New payment method created!", response)
                window.location.reload()
            }else{
                console.log("An error occurred while trying to create a new payment method")
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    render() {
        return (
            <>
            <Modal show={this.props.show} onHide={this.props.noShow}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Nuovo Metodo Di Pagamento
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <strong>Intestatario</strong>
                        </Form.Label>
                        <Form.Control as="select" onChange={ (e) => this.setState({ accountHolder: e.currentTarget.value })}>
                            {
                            this.props.accountHolders
                            ?
                            this.props.accountHolders.map((element, i) => {
                                return (
                                    <option key={i}>{element.name}</option>
                                )
                            })
                            : 
                            (
                                <>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </>
                            )
                            }
                        </Form.Control>
                    </Form.Group> 
                    <label>
                        <strong>Nome</strong>
                    </label>              
                    <InputGroup>
                        <FormControl
                            type="text"
                            aria-label="With textarea"
                            onChange={ (e) => this.setState({ name: e.currentTarget.value })}
                        />
                    </InputGroup>
                    <label>
                        <strong>Descrizione</strong>
                    </label>
                    <InputGroup>
                        <FormControl 
                            as="textarea"
                            aria-label="With textarea"
                            onChange={ (e) => this.setState({ description: e.currentTarget.value })}
                        />
                    </InputGroup>
                    <label>
                        <strong>Bilancio Iniziale</strong>
                    </label>              
                    <InputGroup>
                        <FormControl
                            type="text"
                            aria-label="With textarea"
                            onChange={ (e) => this.setState({ balance: e.currentTarget.value })}
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="secondary"
                        onClick={this.props.noShow}>
                            Chiudi
                    </Button>
                    <Button 
                        variant="primary"
                        onClick={this.saveNewPaymentMethod}>
                            Salva
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default NewPaymentMethod;