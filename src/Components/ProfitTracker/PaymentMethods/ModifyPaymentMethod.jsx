import React, { Component } from 'react';
import { FormControl, InputGroup, Modal, Form, Button } from 'react-bootstrap';

class modifyPaymentMethod extends Component {

    state = {
        accountName: "",
        description: ""
    }

    saveChanges = async () => {
        try {
            const data = {
                accountName: this.state.accountName !== "" ? this.state.accountName : this.props.accountName,
                description: this.state.description !== "" ? this.state.description : this.props.description,
                id: this.props.id
            }
    
            console.log(data)
    
            const response = await fetch("http://localhost:3002/profit-tracker/modify-payment-method", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
            const parsedResponse = await response.json()
            if(parsedResponse){
                console.log("Updated successfully")
            }else{
                console.log("An error occurred while trying to update")
                window.location.reload()
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
                        Modifica Metodo Di Pagamento
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>
                        <strong>Intestatario</strong>
                    </label>
                    <Form.Control type="text" placeholder={this.props.accountHolder} readOnly />
                    <label>
                        <strong>Nome</strong>
                    </label>
                    <InputGroup>
                        <FormControl 
                            type="text"
                            aria-label="With textarea"
                            onChange={ (e) => this.setState({ accountName: e.currentTarget.value })}
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.noShow}>
                        Chiudi
                    </Button>
                    <Button variant="primary" onClick={this.saveChanges}>
                        Salva
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default modifyPaymentMethod;