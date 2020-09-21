import React, { Component } from 'react';
import NavBar from "../Navbar/Navbar"
import "./profit_tracker.css"

// fortawesome icons
import { Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faArchive } from '@fortawesome/free-solid-svg-icons'
import { faDiceTwo } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'

class ProfitTracker extends Component {
    render() {
        return (            
            <>
            <NavBar />
            <Row className="main-row">
                <Col xs="1">
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faSpinner} className="fa-iconss"/>
                            <p className="fa-iconss-description">In Corso</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faArchive} className="fa-iconss"/>
                            <p className="fa-iconss-description">Archivio</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faDiceTwo} className="fa-iconss"/>
                            <p className="fa-iconss-description">Casino</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faCalendarAlt} className="fa-iconss"/>
                            <p className="fa-iconss-description">Promemoria</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faUserFriends} className="fa-iconss"/>
                            <p className="fa-iconss-description">Utenti</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faCreditCard} className="fa-iconss"/>
                            <p className="fa-iconss-description">Pagamenti</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faUserCircle} className="fa-iconss"/>
                            <p className="fa-iconss-description">Books</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faList} className="fa-iconss"/>
                            <p className="fa-iconss-description">Transazioni</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faBalanceScale} className="fa-iconss"/>
                            <p className="fa-iconss-description">Bilancio</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faMoneyBill} className="fa-iconss"/>
                            <p className="fa-iconss-description">Profit/Loss</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs="11"></Col>
            </Row>
            </>
        );
    }
}

export default ProfitTracker;