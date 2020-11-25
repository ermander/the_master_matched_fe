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
                holderID: this.state.accountHolder !== "" ? this.props.accountHolders[parseInt(this.state.accountHolder)]._id : this.props.accountHolders[0]._id,
                accountHolder: this.state.accountHolder !== "" ? this.props.accountHolders[parseInt(this.state.accountHolder)].name : this.props.accountHolders[0].name,
                accountName: this.state.name,
                description: this.state.description,
                balance: this.state.balance !== "" ? parseInt(this.state.balance) : 0
            }

            const NewPaymentMethod = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/new-payment-method", {
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
            <Modal show={this.props.show} onHide={this.props.noShow} style={{maxWidth: "70vw", marginLeft: "15vw", marginRight: "15vw"}}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        New Payment Method
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <strong>Account Holder</strong>
                        </Form.Label>
                        <Form.Control as="select" onChange={ (e) => this.setState({ accountHolder: e.currentTarget.value.split(")")[0] })}>
                            {
                            this.props.accountHolders
                            ?
                            this.props.accountHolders.map((element, i) => {
                                return (
                                    <option key={i}>1) {element.name}</option>
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
                        <strong>Name</strong>
                    </label>              
                    <InputGroup>
                        <FormControl
                            type="text"
                            aria-label="With textarea"
                            onChange={ (e) => this.setState({ name: e.currentTarget.value })}
                        />
                    </InputGroup>
                    <label>
                        <strong>Description</strong>
                    </label>
                    <InputGroup>
                        <FormControl 
                            as="textarea"
                            aria-label="With textarea"
                            onChange={ (e) => this.setState({ description: e.currentTarget.value })}
                        />
                    </InputGroup>
                    <label>
                        <strong>Starting Balance</strong>
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
                            Close
                    </Button>
                    <Button 
                        variant="primary"
                        onClick={this.saveNewPaymentMethod}>
                            Save
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default NewPaymentMethod;