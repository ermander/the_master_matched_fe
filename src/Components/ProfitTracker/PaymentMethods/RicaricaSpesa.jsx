import React, { Component } from 'react';

// React Boostrap
import { Modal, Form, Button, InputGroup, FormControl } from 'react-bootstrap';

class Ricarica_Spesa extends Component {

    state = {
        paymentMethods: [],
        type: "",
        movement: "",
        description: "",
        ricaricaSpesaHolder: ""
    }

    saveTransaction = async() => {
        try {
            const data = {
                type: this.state.type !== "" || this.state.type === "Spesa" ? "Spesa" : "Ricarica",
                id: this.state.ricaricaSpesaHolder !== "" ? this.props.paymentMethods[parseInt(this.state.ricaricaSpesaHolder)]._id : this.props.paymentMethods[0]._id,
                holderID: this.state.ricaricaSpesaHolder !== "" ? this.props.paymentMethods[parseInt(this.state.ricaricaSpesaHolder)].holderID : this.props.paymentMethods[0].holderID,
                accountHolder: this.state.ricaricaSpesaHolder !== "" ? this.props.paymentMethods[parseInt(this.state.ricaricaSpesaHolder)].accountHolder : this.props.paymentMethods[0].accountHolder,
                accountName: this.state.ricaricaSpesaHolder !== "" ? this.props.paymentMethods[parseInt(this.state.ricaricaSpesaHolder)].accountName : this.props.paymentMethods[0].accountName,
                description: this.state.description !== "" ? this.state.description : "",
                movement: parseInt(this.state.movement)
            }
    
            // Saving the new balance
            const newBalance = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/ricarica-spesa", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
    
            // Saving the new transaction
            if(newBalance.ok){
                const newTransaction = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/save-transaction", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                
                if(newTransaction.ok){
                    console.log("OK")
                    window.location.reload()
                }else{
                    console.log("An error occurred while trying to save the new transaction!")
                } 

            }else{
                console.log("An error occurred while trying to save the new balance!")
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
                        Recharge / Spend
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>
                            <strong>Type</strong>
                        </Form.Label>
                        <Form.Control 
                            as="select"
                            onChange={ (e) => this.setState({type: e.currentTarget.value})}
                            >
                                <option>Ricarica</option>
                                <option>Spesa</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <strong>Select Payment Method</strong>
                        </Form.Label>
                        <Form.Control 
                            as="select"
                            onChange={e => this.setState({ricaricaSpesaHolder: e.currentTarget.value.split(')')[0] - 1})}
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
                        <strong>Movement</strong>
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
                        <strong>Description</strong>
                    </label>
                    <InputGroup>
                        <FormControl 
                            as="textarea"
                            aria-label="With textarea"
                            placeholder="Optional"
                            onChange={ (e) => this.setState({ description: e.currentTarget.value })}
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="secondary"
                        onClick={this.props.noShow}>
                            Close
                        </Button>
                    <Button 
                        variant="primary"
                        onClick={this.saveTransaction}>
                            Save
                        </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default Ricarica_Spesa;