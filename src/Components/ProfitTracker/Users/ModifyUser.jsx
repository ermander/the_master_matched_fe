import React, { Component } from 'react';

// Bootstrap
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap"

class ModifyUser extends Component {

    state = {
        name: "",
        description: ""
    }

    saveChanges = async () => {

        const user = {
            name: this.state.name !== "" ? this.state.name : this.props.name,
            description: this.state.description !== "" ? this.state.description : this.props.description,
            id: this.props.id
        }

        console.log(user)

        try {
            const modifyUser = await fetch("http://localhost:3002/profit-tracker/modify-user", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            const response = await modifyUser.json()
            if(response){
                console.log("Updated successfully")
                window.location.reload()
            }else{
                console.log("An error occurred while updating")
            }            
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <>
            <Modal show={this.props.show} onHide={this.props.hideModal}>
                <Modal.Header closeButton>
                <Modal.Title>Modifica Utente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <label>Nome</label>
                    <InputGroup size="sm" className="mb-3">
                    <FormControl 
                        type="text" 
                        placeholder={this.props.name}
                        onChange={ (e) => { this.setState({ name: e.currentTarget.value })}}
                    />
                </InputGroup>
                <label>Descrizione</label>
                <InputGroup className="new-user-modal-text-area">
                    <FormControl 
                        as="textarea" 
                        aria-label="With textarea"
                        placeholder={this.props.description}
                        onChange={ (e) => { this.setState({ description: e.currentTarget.value })}}
                    />
                </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.hideModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.saveChanges}>
                    Salva
                </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default ModifyUser;