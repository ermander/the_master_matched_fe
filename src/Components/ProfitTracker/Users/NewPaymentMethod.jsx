import React, { Component } from 'react';
import { FormControl, Modal, Button, InputGroup } from 'react-bootstrap';

class NewPaymentMethod extends Component {

    state = {
        name: "",
        description: "",
        balance: ""
    }

    saveNewPaymentMethod = async(id) => {
        try {
            console.log(id)
            const data = {
                holderID: id,
                accountHolder: this.props.accountHolder,
                accountName: this.state.name,
                description: this.state.description,
                balance: this.state.balance !== "" ? parseInt(this.state.balance) : 0
            }

            const NewPaymentMethod = await fetch("http://localhost:3002/profit-tracker/new-payment-method", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if(NewPaymentMethod.ok){
                console.log("New payment method created!")
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
                    <label>
                        <strong>Intestatario</strong>
                    </label>
                    <FormControl type="text" placeholder={this.props.accountHolder} readOnly />  
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
                        onClick={ () => this.saveNewPaymentMethod(this.props.id)}>
                            Salva
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default NewPaymentMethod;