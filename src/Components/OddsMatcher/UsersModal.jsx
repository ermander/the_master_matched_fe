import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

class UsersModal extends Component {
    
    state = {
        user1: "",
        user2: ""
    }

    saveBet = async () => {
        try {
            const data = {

            }
            const response = await fetch("http://localhost:3002/profit-tracker/save-match", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if(response.ok){
                console.log("OK")
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
                        <Modal.Title>Intestatari Punta - Banca</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Intestatario punta*/}
                        <Form.Group>
                            <Form.Label htmlFor="inlineFormInputGroupUsername">
                                Intestatario Punta
                            </Form.Label>
                            <Form.Control as="select" onChange={(e) => this.setState({user1: e.currentTarget.value})}>
                                {
                                    !this.props.users 
                                    ?
                                    (
                                        <>
                                            <option>...</option>
                                            <option>...</option>
                                            <option>...</option>
                                        </>
                                    )
                                    :
                                    (
                                        this.props.users.map((element, i) => {
                                            return(
                                                <option key={i}>{element.name}</option>
                                            )
                                        })
                                    )
                                }
                            </Form.Control>
                        </Form.Group>
                        {/* Intestatario banca*/}
                        <Form.Group>
                            <Form.Label>
                                Intestatario Punta
                            </Form.Label>
                            <Form.Control as="select" onChange={(e) => this.setState({user2: e.currentTarget.value})}>
                                {
                                    !this.props.users 
                                    ?
                                    (
                                        <>
                                            <option>...</option>
                                            <option>...</option>
                                            <option>...</option>
                                        </>
                                    )
                                    :
                                    (
                                        this.props.users.map((element, i) => {
                                            return(
                                                <option key={i}>{element.name}</option>
                                            )
                                        })
                                    )
                                }
                            </Form.Control>
                        </Form.Group>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="danger"
                            onClick={this.props.noShow}>
                                Annulla
                            </Button>
                        <Button
                            variant="success"
                            onClick={this.saveBet}>
                                Salva
                            </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default UsersModal;