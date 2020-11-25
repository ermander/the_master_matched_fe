import React, { Component } from 'react';

// React Bootstrap
import { Col, Row, Modal, Button, InputGroup, FormControl, Table } from "react-bootstrap"

// Components
import NavBar from "../../Navbar/Navbar"
import SideBar from "../SideBar/SideBar"
import ModifyUser from "./ModifyUser"
import NewPaymentMethod from "./NewPaymentMethod"

//CSS
import "./utenti.css"

// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"

class Utenti extends Component {

    state = {
        show: false,
        newPaymentMethodShow: false,
        modifyUserShow: false,
        modifyUserName: "",
        modifyUserDescription: "",
        id: "",
        name: "",
        description: "",
        users: [],
        loadingUsers: true,
    }

    handleClose = () => { this.setState({ show: false })}
    
    handleModifyUserClose = () => { this.setState({ modifyUserShow: false })}

    handleNewPaymentMethod = () => { this.setState({ newPaymentMethodShow: false })}

    handleShow = () => { this.setState({ show: true })}

    deleteUser = async(id) => {
        try {
            const deleteUser = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/delete-user/" + id, {
                method: "DELETE"
            })
            if(deleteUser.ok){
                console.log("ok")
                window.location.reload()
            }else{
                console.log("An error occurred while trying to delete the user!")
            }
        } catch (error) {
            console.log(error)
        }
    }

    fetchUsers = async () => {
        try {
            const response = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/get-users")
            const users = await response.json()
            if(users){
                console.log(users)
                this.setState({
                    users: users,
                    loadingUsers: false
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount = () => {
        this.fetchUsers()
    } 

    handleNewUser = async () => {
        try {
            const newUserInfo = {
                name: this.state.name,
                description: this.state.description
            }
            const newUser = await fetch("https://the-master-matched-be.herokuapp.com/profit-tracker/new-user", {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(newUserInfo)
            })
            const response = await newUser.json()
            console.log(response)
            this.setState({ show: false })
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <>
            <NavBar />
            <ModifyUser 
                show={this.state.modifyUserShow}
                hideModal={this.handleModifyUserClose}
                name={this.state.modifyUserName}
                description={this.state.modifyUserDescription}
                id={this.state.id}
            />
            <NewPaymentMethod 
                show={this.state.newPaymentMethodShow}
                noShow={this.handleNewPaymentMethod}
                accountHolder={this.state.name}
                id={this.state.id}
            />
            <Row>
                <Col xs={1}>
                    <SideBar />
                </Col>
                <Col xs={11}>
                    <Row>
                        <Col xs={12} className="pl-0 pr-0">
                            <div style={{backgroundColor: "#d08e46",textAlign: "center",fontSize: "50px",marginBottom: "3vh",color: "#efd9c0"}}>USERS LIST</div>
                            <Row>
                                <Col xs={12} className="pl-0 pr-0">
                                    <Button size="sm" variant="secondary" onClick={this.handleShow}>
                                        New User
                                    </Button>

                                    <Modal show={this.state.show} onHide={this.handleClose} className="new-user-modal" style={{maxWidth: "70vw", marginLeft: "15vw", marginRight: "15vw"}}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>New User</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>                                    
                                            <label>Name</label>
                                            <InputGroup size="sm" className="mb-3">
                                                <FormControl 
                                                    type="text" 
                                                    onChange={ (e) => { this.setState({ name: e.currentTarget.value })}}
                                                />
                                            </InputGroup>
                                            <label>Description</label>
                                            <InputGroup className="new-user-modal-text-area">
                                                <FormControl 
                                                    as="textarea" 
                                                    aria-label="With textarea"
                                                    onChange={ (e) => { this.setState({ description: e.currentTarget.value })}}
                                                />
                                            </InputGroup>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={this.handleNewUser}>
                                                Save
                                            </Button>
                                            <Button variant="primary" onClick={this.handleClose}>
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="pl-0 pt-4">
                            <Table striped bordered hover className="odds-table" style={{width: "90vw"}}>
                                <thead className="table-data">
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Opzioni</th>
                                        <th>Opzioni</th>
                                        <th>Opzioni</th>
                                        <th>Opzioni</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.loadingUsers
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
                                            </tr>
                                        )
                                        :
                                        (
                                            this.state.users.map((element, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>{i + 1}</td>
                                                        <td>{element.name}</td>
                                                        <td>{element.description}</td>
                                                        <td>
                                                            <Button 
                                                                variant="info" 
                                                                size="sm"
                                                                onClick={ () => this.setState({ 
                                                                    newPaymentMethodShow: true,
                                                                    name: element.name,
                                                                    id: element._id
                                                                })}
                                                            >
                                                                New Payment Method
                                                            </Button>
                                                        </td>
                                                        <td>
                                                            <Button variant="success" size="sm">
                                                                New Bookmaker
                                                            </Button>
                                                        </td>
                                                        <td>
                                                            <Button 
                                                                variant="warning" 
                                                                size="sm"
                                                                onClick={ () => this.setState({ 
                                                                        modifyUserShow: true,
                                                                        modifyUserName: element.name,
                                                                        modifyUserDescription: element.description,
                                                                        id: element._id
                                                                    })}
                                                            >
                                                                Modify
                                                            </Button>
                                                        </td>
                                                        <td>
                                                            <Button
                                                                size="sm"
                                                                variant="danger"
                                                                onClick={ () => this.deleteUser(element._id)}
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

export default Utenti;