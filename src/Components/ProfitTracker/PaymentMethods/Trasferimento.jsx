import React, { Component } from 'react';

// React Boostrap
import { Modal, Form, InputGroup, FormControl, Button } from "react-bootstrap"

class Trasferimento extends Component {

    state = {
        movimento: "",
        descrizione: "",
        sender: "",
        receiver: ""
    }

    saveTrasferment = async() => {
        try {
            const data = {
                movement: this.state.movimento !== "" ? parseInt(this.state.movimento) : 0,
                descrizione: this.state.descrizione !== "" ? this.state.descrizione : "",
                sender: this.state.sender !== "" ? this.props.paymentMethods[parseInt(this.state.sender)]._id : this.props.paymentMethods[0]._id,
                receiver: this.state.receiver !== "" ? this.props.paymentMethods[parseInt(this.state.receiver)]._id : this.props.paymentMethods[0]._id
            }
    
            const saveNewBalance = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/trasferment", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
    
            if(saveNewBalance.ok){
                const saveNewTransaction = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/save-transaction", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                
                if(saveNewTransaction.ok){
                    console.log("OK")
                    window.location.reload()
                }else{
                    console.log("An error occurred while trying to save the new transaction!")
                    window.location.reload()
                }
            }else{
                console.log("An error occurred while trying to save the new balance!")
                window.location.reload()
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
                    New Transfer
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>
                        <strong>From holder:</strong>
                    </Form.Label>
                    <Form.Control as="select" onChange={(e)=>this.setState({sender: e.currentTarget.value.split(")")[0]})}>
                        {
                            !this.props.paymentMethods
                            ?
                            (
                                <>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </>
                            )
                            :
                            (
                                this.props.paymentMethods.map((element, i) => {
                                    return(
                                        <option key={i}>{i + 1}) {element.accountName} (€{element.balance} {element.accountHolder})</option>
                                    )
                                })
                            )
                        }
                    </Form.Control>
                    <Form.Label>
                        <strong>To holder:</strong>
                    </Form.Label>
                    <Form.Control as="select" onChange={(e)=>this.setState({receiver: e.currentTarget.value.split(")")[0]})}>
                        {
                            !this.props.paymentMethods
                            ?
                            (
                                <>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </>
                            )
                            :
                            (
                                this.props.paymentMethods.map((element, i) => {
                                    return(
                                        <option key={i}>{i + 1}) {element.accountName} (€{element.balance} {element.accountHolder})</option>
                                    )
                                })
                            )
                        }
                    </Form.Control>
                    <Form.Label>
                        <strong>Movement</strong>
                    </Form.Label>
                    <InputGroup>
                        <FormControl 
                            type="text"
                            aria-label="With textarea"
                            placeholder="€"
                            onChange={(e)=>this.setState({movimento: e.currentTarget.value})}
                            />
                    </InputGroup>
                    <Form.Label>
                        <strong>Descrizione</strong>
                    </Form.Label>
                    <InputGroup>
                        <FormControl
                        as="textarea"
                        aria-label="With textarea"
                        placeholder="Optional"
                        onChange={(e)=>this.setState({descrizione: e.currentTarget.value})} />
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
                        onClick={this.saveTrasferment}>
                            Save
                        </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default Trasferimento;