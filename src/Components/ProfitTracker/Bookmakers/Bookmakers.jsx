import React, { Component } from "react";

// Components
import NavBar from "../../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import NewBookmaker from "./NewBookmaker";
import NewMovement from "../Bookmakers/NewMovement";
import NewDefaultBookmaker from "../Bookmakers/NewDefaultBookmaker";

// React Bootstrap
import { Row, Col, Button, Table } from "react-bootstrap";

// FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class Bookmakers extends Component {
  state = {
    show: false,
    users: [],
    bookmakers: [],
    isLoading: true,
    bookMakerInfo: [],
    showNewMovement: false,
    userPaymentMethods: [],
    showNewDefaultBookmakerModal: false,
  };

  // ALL FUNCTIONS
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  fetchUsers = async () => {
    try {
      const rawUsers = await fetch(
        "https://the-master-matched-be.herokuapp.com/profit-tracker/get-users"
      );
      if (rawUsers.ok) {
        const users = await rawUsers.json();
        this.setState({ users: users, isLoading: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchBookmakers = async () => {
    try {
      const response = await fetch(
        "https://the-master-matched-be.herokuapp.com/profit-tracker/bookmakers"
      );
      if (response.ok) {
        const parsedResponse = await response.json();
        this.setState({ bookmakers: parsedResponse });
      } else {
        console.log("An error occurred while trying to fetch the bookmakers!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  deleteBookmaker = async (id) => {
    try {
      const deleteBookmaker = await fetch(
        "https://the-master-matched-be.herokuapp.com/profit-tracker/delete-bookmaker/" + id,
        {
          method: "DELETE",
        }
      );

      if (deleteBookmaker.ok) {
        console.log("Deleted successfully!");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  showNewMovement = async (holderID) => {
    try {
      const response = await fetch(
        "https://the-master-matched-be.herokuapp.com/profit-tracker/payment-methods/" + holderID
      );
      if (response.ok) {
        const parsedResponse = await response.json();
        this.setState({
          userPaymentMethods: parsedResponse,
          showNewMovement: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  noShowNewMovement = () => {
    this.setState({
      showNewMovement: false,
      userPaymentMethods: [],
      bookMakerInfo: [],
    });
  };

  showNewDefaultBookmakerModal = () => {
    this.setState({ showNewDefaultBookmakerModal: true });
  };

  noShowNewDefaultBookmakerModal = () => {
    this.setState({ showNewDefaultBookmakerModal: false });
  };

  componentDidMount = () => {
    this.fetchUsers();
    this.fetchBookmakers();
  };

  render() {
    return (
      <>
        <NavBar />
        <NewBookmaker
          show={this.state.show}
          noShow={this.handleClose}
          users={this.state.users}
        />
        <NewMovement
          show={this.state.showNewMovement}
          noShow={this.noShowNewMovement}
          bookmakerInfo={this.state.bookMakerInfo}
          userPaymentMethods={this.state.userPaymentMethods}
        />
        <NewDefaultBookmaker
          show={this.state.showNewDefaultBookmakerModal}
          noShow={this.noShowNewDefaultBookmakerModal}
        />
        <Row>
          <Col xs={1}>
            <SideBar />
          </Col>
          <Col xs={11}>
            <Row>
              <Col xs={12}>
                <div style={{backgroundColor: "#d08e46",textAlign: "center",fontSize: "50px",marginBottom: "3vh",color: "#efd9c0"}}>BOOKMAKERS</div>
                <Button size="sm" variant="success" onClick={this.handleShow}>
                New Bookmaker
                </Button>
                <Button
                  className="ml-1"
                  style={{ color: "white" }}
                  size="sm"
                  variant="dark"
                  onClick={this.showNewDefaultBookmakerModal}
                >
                  New Personal Bookmaker
                </Button>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs={12}>
                <Table
                  striped
                  bordered
                  hover
                  className="odds-table"
                  style={{ width: "90vw" }}
                >
                  <thead className="table-data">
                    <tr>
                      <th>#</th>
                      <th>Created at:</th>
                      <th>Account Holder</th>
                      <th>Book</th>
                      <th>Description</th>
                      <th>Balance</th>
                      <th>State</th>
                      <th>Options</th>
                      <th>Options</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.isLoading ? (
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
                    ) : (
                      this.state.bookmakers.map((element, i) => {
                        return (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>
                              {element.createdAt.split("T")[0]}{" "}
                              {element.createdAt.split("T")[1].split(".")[0]}
                            </td>
                            <td>{element.holderName}</td>
                            <td>{element.bookmakerName}</td>
                            <td>
                              {element.description !== ""
                                ? element.description
                                : "..."}
                            </td>
                            <td>{element.balance}€</td>
                            <td>
                              {element.isActive ? "Available" : "Not Available"}
                            </td>
                            <td>
                              <Button
                                size="sm"
                                variant="primary"
                                onClick={() =>
                                  this.setState(
                                    { bookMakerInfo: element },
                                    () => this.showNewMovement(element.holderID)
                                  )
                                }
                              >
                               New Movement
                              </Button>
                            </td>
                            <td>
                              <Button size="sm" variant="warning">
                                Modify
                              </Button>
                            </td>
                            <td>
                              <Button
                                size="sm"
                                variant="danger"
                                onClick={() =>
                                  this.deleteBookmaker(element._id)
                                }
                              >
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </Button>
                            </td>
                          </tr>
                        );
                      })
                    )}
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
