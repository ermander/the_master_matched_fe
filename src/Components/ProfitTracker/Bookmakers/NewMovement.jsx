import React, { Component } from 'react';

// React Bootstrap
import { Form, Modal, Button, InputGroup, FormControl } from 'react-bootstrap';

class NewMovement extends Component {

    state={
        type: "",
        movement: "",
        descrizione: "",
        sender: ""
    }

    saveMovement = async () => {
        // Building the body of the PUT
        const data = {
            movement: parseInt(this.state.movement),
            type: this.state.type !== "" ? this.state.type : "Deposito",
            receiver: this.props.bookmakerInfo._id,
            sender: this.state.sender !== "" ? this.props.userPaymentMethods[parseInt(this.state.sender)]._id : this.props.userPaymentMethods[0]._id
        }

        console.log(data)

        // PUT the new movement
        const response = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/deposit-into-bookmaker", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        // If the PUT is done, i will POST the new transaction in the proper section
        if(response.ok){
            const response = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/save-transaction", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if(response.ok){
                console.log("ok")
                window.location.reload()
            }else{
                console.log("An error occurred while trying to save the transaction!")
            }
        }
    }

    render() {
        return (
            <>
            {
                this.state.type !== "Correzione Saldo" 
                ?
                (
                    <Modal show={this.props.show} onHide={this.props.noShow} style={{maxWidth: "70vw", marginLeft: "15vw", marginRight: "15vw"}}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Bookmaker Balance --- {this.props.bookmakerInfo.balance}€
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>
                                    <strong>Type</strong>
                                </Form.Label>
                                <Form.Control as="select" onChange={(e)=>this.setState({type: e.currentTarget.value})}>
                                    <option>Deposito</option>
                                    <option>Prelievo</option>
                                    <option>Correzione Saldo</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>
                                    <strong>Payment Method</strong>
                                </Form.Label>
                                <Form.Control as="select" onChange={e=>this.setState({sender: e.currentTarget.value})}>
                                    {
                                        !this.props.userPaymentMethods
                                        ?
                                        (
                                            <>
                                                <option>...</option>
                                                <option>...</option>
                                                <option>...</option>
                                                <option>...</option>
                                                <option>...</option>
                                            </>
                                        )
                                        :
                                        this.props.userPaymentMethods.map((element, i) => {
                                            return (
                                                <option key={i}>{i+1}) {element.accountName} (€{element.balance})</option>
                                            )
                                        })
                                    }
                                </Form.Control>
                            </Form.Group>
                            <label>
                                <strong>Movement</strong>
                            </label>
                            <InputGroup>
                                <FormControl 
                                    placeholder="€"
                                    type="text"
                                    onChange={ e => this.setState({movement: e.currentTarget.value})}
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
                                onChange={e => this.setState({descrizione: e.currentTarget.value })}/>
                            </InputGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                onClick={this.props.noShow}
                                variant="secondary">
                                Close
                            </Button>
                            <Button
                                variant="primary"
                                onClick={this.saveMovement}
                                >
                                Save
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )
                :
                (
                    <Modal show={this.props.show} onHide={this.props.noShow}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                New Movement
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>
                                    <strong>Type</strong>
                                </Form.Label>
                                <Form.Control as="select" onChange={(e)=>this.setState({type: e.currentTarget.value})}>
                                    <option>Deposito</option>
                                    <option>Prelievo</option>
                                    <option>Correzione Saldo</option>
                                </Form.Control>
                            </Form.Group>
                            <label>
                                <strong>Movement</strong>
                            </label>
                            <InputGroup>
                                <FormControl 
                                    placeholder="€"
                                    type="text"
                                    onChange={ e => this.setState({movememnt: e.currentTarget.value})}
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
                                onChange={e => this.setState({descrizione: e.currentTarget.value })}/>
                            </InputGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                onClick={this.props.noShow}
                                variant="secondary">
                                Close
                            </Button>
                            <Button
                                variant="primary"
                                onClick={this.saveMovement}
                                >
                                Save
                            </Button>
                        </Modal.Footer>
                    </Modal>                    
                )
            }
            </>
        );
    }
}

export default NewMovement;