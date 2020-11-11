import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class ModificaGiocata extends Component {
    state = {

    }

    modifyCasinoBet = async(id) => {
        try {
            const data = {

            }   
            
            const response = await fetch("http://localhost:3002/profit-tracker/modify-casino-bet/" + id, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if(response.ok){
                console.log("Saved!")
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
                        Modifica Giocata 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>
                        <strong>Conto</strong>
                    </label>
                    <Form.Control type="text" readOnly placeholder={this.props.betInfo.bookmakerName}/>
                    <p style={{fontSize: "10px"}}>Il conto non può essere modificato una volta inserita la giocata</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={this.props.noShow}>Chiudi</Button>
                    <Button
                        variant="primary">Salva</Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default ModificaGiocata;