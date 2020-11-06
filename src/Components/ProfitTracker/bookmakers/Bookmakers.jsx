import React, { Component } from 'react';

// Components
import NavBar from '../../Navbar/Navbar'
import SideBar from "../SideBar/SideBar"
import NewBookmaker from "./NewBookmaker"

// React Bootstrap
import { Row, Col, Button, Table } from "react-bootstrap"

// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"

class Bookmakers extends Component {

    state = {
        show: false,
        users: [],
        bookmakers: [],
        isLoading: true
    }

    handleShow = () => { this.setState({ show: true })}
    handleClose = () => { this.setState({ show: false })}

    fetchUsers = async() => {
        try {
            const rawUsers = await fetch("http://localhost:3002/profit-tracker/get-users")
            if(rawUsers.ok){
                const users = await rawUsers.json()
                this.setState({ users: users, isLoading: false })
            }            
        } catch (error) {
            console.log(error)
        }
    }

    fetchBookmakers = async() => {
        try {
            const response = await fetch("http://localhost:3002/profit-tracker/bookmakers")
            if(response.ok){
                const parsedResponse = await response.json()
                this.setState({ bookmakers: parsedResponse })
            }else{
                console.log("An error occurred while trying to fetch the bookmakers!")
            }
        } catch (error) {
            console.log(error)
        }
    }

    deleteBookmaker = async(id) => {
        try {
            const deleteBookmaker = await fetch("http://localhost:3002/profit-tracker/delete-bookmaker/" + id, {
                method: "DELETE"
            })

            if(deleteBookmaker.ok){
                console.log("Deleted successfully!")
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount = () => {
        this.fetchUsers()
        this.fetchBookmakers()
    }

    render() {
        return (
            <>
                <NavBar />
                <NewBookmaker
                    show={this.state.show} 
                    noShow={this.handleClose}
                    users={this.state.users}
                />
                <Row>
                    <Col xs={1}>
                        <SideBar />
                    </Col>
                    <Col xs={11}>
                        <Row>
                            <Col xs={12}>
                                <h2>BOOKMAKERS</h2>
                                <Button 
                                    size="sm"
                                    variant="success"
                                    onClick={this.handleShow}
                                    >
                                        Nuovo Bookmaker
                                    </Button>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs={12}>
                                <Table striped bordered hover className="odds-table" style={{width: "90vw"}}>
                                    <thead className="table-data">
                                        <tr>
                                            <th>#</th>
                                            <th>Creato</th>
                                            <th>Intestatario</th>
                                            <th>Conto</th>
                                            <th>Descrizione</th>
                                            <th>Saldo</th>
                                            <th>Stato</th>
                                            <th>Opzioni</th>
                                            <th>Opzioni</th>
                                            <th>Opzioni</th>
                                        </tr>
                                    </thead>  
                                    <tbody>
                                    {
                                        this.state.isLoading
                                        ?
                                        (
                                            <tr>
                                                <td>...</td>
                                                <td>...</td>
                                                <td>...</td>
                                                <td>...</td>
                                                <td>...</td>
                                                <td>...</td>
                                                <td>...</td>
                                                <td>...</td>
                                                <td>...</td>
                                                <td>...</td>
                                            </tr>
                                        )
                                        :
                                        (
                                            this.state.bookmakers.map((element, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>{i + 1}</td>
                                                        <td>{element.createdAt.split("T")[0]} {element.createdAt.split("T")[1].split(".")[0]}</td>
                                                        <td>{element.holderName}</td>
                                                        <td>{element.bookmakerName}</td>
                                                        <td>{element.description !== "" ? element.description : "..."}</td>
                                                        <td>{element.balance}€</td>
                                                        <td>{element.isActive ? "Abilitato" : "Non Abilitato"}</td>
                                                        <td>
                                                            <Button
                                                                size="sm"
                                                                variant="primary"
                                                                >
                                                                    Nuovo Movimento
                                                            </Button>
                                                        </td>
                                                        <td>
                                                            <Button
                                                                size="sm"
                                                                variant="warning"
                                                                >
                                                                    Modifica
                                                            </Button>
                                                        </td>
                                                        <td>
                                                            <Button
                                                                size="sm"
                                                                variant="danger"
                                                                onClick={ () => this.deleteBookmaker(element._id)}
                                                                >
                                                                    <FontAwesomeIcon icon={faTrashAlt} />
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        )
                                    }
                                    </tbody>                                  
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Bookmakers;