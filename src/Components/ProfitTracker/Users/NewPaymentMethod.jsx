import React, { Component } from 'react';
import { FormControl, Modal, Button, InputGroup } from 'react-bootstrap';

class NewPaymentMethod extends Component {

    state = {
        name: "",
        description: ""
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.noShow}>
                        Chiudi
                    </Button>
                    <Button variant="primary">
                        Salva
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default NewPaymentMethod;