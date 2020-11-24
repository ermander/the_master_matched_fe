import React, { Component } from 'react';
import { Modal, Button, Form, InputGroup, FormControl } from 'react-bootstrap';

class NuovaGiocata extends Component {

    state = {
        tipologia: "",
        bookmakerID: "",
        bookmakerName: "",
        movement: "",
        descrizione: ""
    }

    saveBet = async() => {
        const data = {
            type: this.state.tipologia !== "" ? this.state.tipologia : "Casino",
            bookmakerID: this.state.bookmakerID !== "" ? this.props.bookmakers[parseInt(this.state.bookmakerID)]._id : this.props.bookmakers[0]._id,
            movement: parseFloat(this.state.movement),
            descrizione: this.state.descrizione

        }
        console.log(data)

        const response = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/new-casino-bet", {
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
    }

    render() {
        return (
            <>
            <Modal show={this.props.show} onHide={this.props.noShow}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Nuova Giocata
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>
                            <strong>Conto</strong>
                        </Form.Label>
                        <Form.Control as="select" onChange={(e)=>this.setState({bookmaker: e.currentTarget.value.split(")")[0]-1})}>
                            {
                                this.props.bookmakers
                                ?
                                this.props.bookmakers.map((element, i) => {
                                    return(
                                        <option key={i}>{i+1}) {element.bookmakerName} ({element.holderName})</option>
                                    )
                                })
                                :
                                (
                                    <>
                                        <option>...</option>
                                        <option>...</option>
                                        <option>...</option>
                                        <option>...</option>
                                        <option>...</option>
                                    </>
                                )
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            <strong>Tipologia</strong>
                        </Form.Label>
                        <Form.Control as="select" onChange={ (e) => this.setState({ tipologia: e.currentTarget.value})}>
                            <option>Casino</option>
                            <option>Casino Live</option>
                            <option>Slot RTP+</option>
                            <option>Altro</option>
                        </Form.Control>
                    </Form.Group>
                    <label>
                        <strong>Movimento</strong>
                    </label>
                    <InputGroup>
                        <FormControl 
                            type="text"
                            placeholder="€"
                            onChange={(e)=>this.setState({movement: e.currentTarget.value})}
                        />
                    </InputGroup>                    
                    <label>
                        <strong>Descrizione</strong>
                    </label>
                    <InputGroup>
                        <FormControl
                            as="textarea"
                            placeholder="Facoltativo"
                            onChange={(e)=>this.setState({descrizione: e.currentTarget.value})}
                            />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={this.props.noShow}
                        >Chiudi</Button>
                    <Button
                        variant="primary"
                        onClick={this.saveBet}
                        >Salva</Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default NuovaGiocata;