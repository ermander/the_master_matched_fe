import React, { Component } from 'react';

// React Boostrap
import { FormControl, Modal, Button, InputGroup, Form } from "react-bootstrap"

class NewBookmaker extends Component {

    state = {
        bookmakerHolder: "",
        description: "",
        isActive: "",
        defaultBoomakers: [],
        bookmakerName: ""
    }

    fetchDefaultBookmakers = async() => {
        try {
            const response = await fetch("http://localhost:3002/profit-tracker/default-bookmakers")
            if(response.ok){
                const parsedResponse = await response.json()
                this.setState({ defaultBoomakers: parsedResponse })
            }
        } catch (error) {
            console.log(error)
        }
    }

    saveNewBookmaker = async() => {
        try {
            const data = {
                holderID: this.state.bookmakerHolder !== "" ? this.props.users[0]._id : this.state.bookmakerHolder._id,
                bookmakerName: this.state.bookmakerName !== "" ? this.state.bookmakerName : this.state.defaultBoomakers[0],
                balance: "0",
                isActive: this.state.isActive !== "" || this.state.isActive !== "Non abilitato" ? true : false
            }

            const response = await fetch("http://localhost:3002/profit-tracker/new-bookmaker", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if(response.ok){
                console.log("New bookmakers successfully created!")
                window.location.reload()
            }else{
                console.log("An error occurred while trying to create a new bookmaker")
            }
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount = () => {
        this.fetchDefaultBookmakers()
    }

    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.noShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Nuovo Bookmaker
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>
                                <strong>Intestatario</strong>
                            </Form.Label>
                            <Form.Control as="select" onChange={ (e) => this.setState({ bookmakerHolder: e.currentTarget.value })}>
                                {
                                    this.props.users 
                                    ?
                                    this.props.users.map((element, i) => {
                                        return (
                                            <option key={i}>{element.name}</option>
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
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Bookmakers</Form.Label>
                            <Form.Control as="select" onChange={ (e) => this.setState({ bookmakerName: e.currentTarget.value })} multiple>
                            {
                                !this.state.defaultBoomakers
                                ?
                                (
                                    <>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </>
                                )
                                :
                                this.state.defaultBoomakers.map((element, i) => {
                                    return (
                                        <option key={i}>{element.bookmakerName}</option>
                                    )
                                })
                            }
                            </Form.Control>
                        </Form.Group>
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
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>
                                <strong>Abilitato</strong>
                            </Form.Label>
                            <Form.Control as="select" onChange={ (e) => {this.setState({ isActive: e.currentTarget.value })}}>
                                <option>Abilitato</option>
                                <option>Non abilitato</option>
                            </Form.Control>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button 
                            variant="secondary"
                            onClick={this.props.noShow}
                            >
                                Chiudi
                        </Button>
                        <Button
                            variant="primary"
                            onClick={this.saveNewBookmaker}
                            >
                                Salva
                        </Button>
                    </Modal.Footer>

                </Modal>
            </>
        );
    }
}

export default NewBookmaker;