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
            const response = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/default-bookmakers")
            if(response.ok){
                const parsedResponse = await response.json()
                this.setState({ defaultBoomakers: parsedResponse })
            }
        } catch (error) {
            console.log(error)
        }
    }

    saveNewBookmaker = async() => {
        console.log(this.props.users) 
        console.log(this.state)
        try {
            const data = {
                holderID: this.state.bookmakerHolder !== "" ? this.props.users[parseInt(this.state.bookmakerHolder)]._id : this.props.users[0]._id,
                holderName: this.state.bookmakerHolder !== "" ? this.props.users[parseInt(this.state.bookmakerHolder)].name : this.props.users[0].name,
                bookmakerName: this.state.bookmakerName !== "" ? this.state.bookmakerName : this.state.defaultBoomakers[0],
                description: this.state.description,
                balance: 0,
                isActive: this.state.isActive === "" || this.state.isActive === "Abilitato" ? true : false
            }


            

            const response = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/new-bookmaker", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if(response.ok){
                console.log("New bookmakers successfully created!")
                window.location.reload()
            }
        } catch (error) {
            console.log("An error occurred while trying to create a new bookmaker", error)
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
                            New Bookmaker
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>
                                <strong>Account Holder</strong>
                            </Form.Label>
                            <Form.Control as="select" onChange={ (e) => this.setState({ bookmakerHolder: e.currentTarget.value.split(")")[0]-1 })}>
                                {
                                    this.props.users 
                                    ?
                                    this.props.users.map((element, i) => {
                                        return (
                                            <option key={i}>{i + 1}) {element.name}</option>
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
                        <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                            <Form.Label>
                                <strong>Bookmakers</strong>
                            </Form.Label>
                            <Form.Control as="select" htmlSize={3} custom onChange={ (e) => this.setState({ bookmakerName: e.currentTarget.value })} multiple>
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
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>
                                <strong>Available</strong>
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
                                Close
                        </Button>
                        <Button
                            variant="primary"
                            onClick={this.saveNewBookmaker}
                            >
                                Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default NewBookmaker;