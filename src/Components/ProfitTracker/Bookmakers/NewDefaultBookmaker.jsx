import React, { Component } from 'react';

// React Bootstrap
import { Modal, Button, InputGroup, FormControl, Form } from 'react-bootstrap';

class NewDefaultBookmaker extends Component {

    state = {
        bookmakerName: "",
        isActive: ""
    }

    saveNewDefaultBookmaker = async () => {
        try {
            const data = {
                bookmakerName: this.state.bookmakerName,
                isActive: this.state.isActive === "Non Abilitato" ? true : false
            }

            const response = await fetch("http://localhost:3002/profit-tracker/new-default-bookmaker", {
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
                    <Modal.Title>
                        New Personal Bookmaker 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>
                        <strong>Name</strong>
                    </label>
                    <InputGroup>
                        <FormControl 
                            type="text"
                            placeholder="Enter the name of the new bookmaker"
                            onChange={(e) => this.setState({bookmakerName: e.currentTarget.value})}
                        />
                    </InputGroup>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Exchange" className="mt-2" />
                    </Form.Group>
                    <Form.Label>
                        <strong>State</strong>
                    </Form.Label>
                    <Form.Control as="select" onChange={(e) => this.setState({isActive: e.currentTarget.value})}>
                        <option>Abilitato</option>
                        <option>Non Abilitato</option>
                    </Form.Control>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={this.props.noShow}>
                            Close
                            </Button>
                    <Button
                        variant="primary"
                        onClick={this.saveNewDefaultBookmaker}>
                            Save
                            </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default NewDefaultBookmaker;