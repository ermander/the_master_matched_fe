import React, { Component } from 'react';

// React Boostrap
import { Modal, Form, Button, InputGroup, FormControl } from 'react-bootstrap';

class Ricarica_Spesa extends Component {

    state = {
        paymentMethods: [],
        movement: "",
        description: "",
        sender: ""
    }

    saveTransaction = async() => {

    }

    
    render() {
        return (
            <>
            <Modal show={this.props.show} onHide={this.props.noShow}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Ricarica/Spesa
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>
                            <strong>Tipologia</strong>
                        </Form.Label>
                        <Form.Control as="select">
                            <option>Ricarica</option>
                            <option>Spesa</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <strong>Seleziona Metodo Di Pagamento</strong>
                        </Form.Label>
                        <Form.Control 
                            as="select"
                            onChange={e => console.log(e.currentTarget.value.split(')')[0])}
                            >
                            {
                                this.props.paymentMethods 
                                ?
                                this.props.paymentMethods.map((element, i) => {
                                    return <option key={i}>
                                        {i + 1}) {element.accountName} ({element.balance}€ {element.accountHolder})
                                    </option>
                                    
                                })
                                :
                                <>
                                    <option>...</option>
                                    <option>...</option>
                                    <option>...</option>
                                    <option>...</option>
                                    <option>...</option>
                                </>
                            }
                        </Form.Control>
                    </Form.Group>
                    <label>
                        <strong>Movimento</strong>
                    </label>
                    <InputGroup>
                        <FormControl 
                            type="text"
                            aria-label="With textarea"
                            placeholder="€"
                            onChange={ (e) => this.setState({ movement: e.currentTarget.value })}
                        />
                    </InputGroup>
                    <label>
                        <strong>Descrizione</strong>
                    </label>
                    <InputGroup>
                        <FormControl 
                            as="textarea"
                            aria-label="With textarea"
                            placeholder="Facoltativo"
                            onChange={ (e) => this.setState({ description: e.currentTarget.value })}
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
                        onClick={this.saveTransaction}>
                            Salva
                        </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default Ricarica_Spesa;