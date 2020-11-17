import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

// React Router Dom
import { withRouter } from "react-router-dom"

class UsersModal extends Component {
    
    state = {
        users: [],
        user1: "",
        user2: ""
    }

    // Fetching the users
    fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:3002/profit-tracker/get-users")
            if(response.ok){
                const users = await response.json()
                this.setState({users: users})
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Saving the new matched bet
    saveBet = async () => {
        try {
            const data = {
                data: this.props.data,
                ora: this.props.ora,
                sport: this.props.sport,
                home: this.props.home,
                away: this.props.away,
                torneo: this.props.torneo,
                mercato: this.props.mercato,
                tipoPuntata: this.props.tipoPuntata,
                book: this.props.book.charAt(0).toUpperCase() + this.props.book.slice(1),
                puntata: this.props.puntata,
                quotaPunta: this.props.quotaPunta,
                exchange: this.props.exchange.charAt(0).toUpperCase() + this.props.exchange.slice(1),
                bancata: this.props.bancata,
                quotaBanca: this.props.quotaBanca,
                // Inserire puntata bonus
                // Inserire puntata rimborso
                rischio: this.props.rischio,
                commissione: this.props.commissione,
                inCorso: true,
                userPuntaId: this.state.user1 !== "" ? this.state.user1[parseInt(this.state.users)]._id : this.state.users[0]._id,
                userBancaId: this.state.user2 !== "" ? this.state.user2[parseInt(this.state.users)]._id : this.state.users[0]._id
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
                const parsedResponse = await response.json()
                console.log(parsedResponse)
                this.props.history.push('/profit_tracker/bet_details' + "/" + parsedResponse._id)
            }else{
                console.log(this.props)
                const parsed = await response.json()
                console.log(parsed)
            }
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount = () => {
        this.fetchUsers()
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
                            <Form.Control as="select" onChange={(e) => this.setState({user1: e.currentTarget.value.split(")")[0]})}>
                                {
                                    !this.state.users 
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
                                        this.state.users.map((element, i) => {
                                            return(
                                                <option key={i}>{i+1}){element.name}</option>
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
                            <Form.Control as="select" onChange={(e) => this.setState({user2: e.currentTarget.value.split(")")[0]})}>
                                {
                                    !this.state.users 
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
                                        this.state.users.map((element, i) => {
                                            return(
                                                <option key={i}>{i+1}){element.name}</option>
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

export default withRouter(UsersModal);