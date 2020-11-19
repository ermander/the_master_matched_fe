import React, { Component } from 'react';

//React bootstrap
import { Col, Row } from "react-bootstrap"

// React router dom
import { Link } from "react-router-dom"

// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faArchive } from '@fortawesome/free-solid-svg-icons'
import { faDiceTwo } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'

// CSS
import "../profit_tracker.css"

class SideBar extends Component {
    render() {
        return (
            <>
            <Row className="no-gutters">
                <Col>
                    <Link to="/profit_tracker/in-progress">
                        <FontAwesomeIcon icon={faSpinner} className="fa-iconss"/>                            
                        <p className="fa-iconss-description"><strong>In Progress</strong></p>
                    </Link>                            
                </Col>
            </Row>
            <Row className="no-gutters">
                <Col>
                    <Link to="/profit_tracker/archived">
                        <FontAwesomeIcon icon={faArchive} className="fa-iconss"/>
                        <p className="fa-iconss-description"><strong>Archived</strong></p>
                    </Link>                            
                </Col>
            </Row>
            <Row className="no-gutters">
                <Col>
                    <Link to="/profit_tracker/casino">
                        <FontAwesomeIcon icon={faDiceTwo} className="fa-iconss"/>
                        <p className="fa-iconss-description"><strong>Casino</strong></p>
                    </Link>                            
                </Col>
            </Row>
            <Row className="no-gutters">
                <Col>
                    <Link to="/profit_tracker/memo">
                        <FontAwesomeIcon icon={faCalendarAlt} className="fa-iconss"/>
                        <p className="fa-iconss-description"><strong>Memo</strong></p>
                    </Link>
                </Col>
            </Row>
            <Row className="no-gutters">
                <Col>
                    <Link to="/profit_tracker/users">
                        <FontAwesomeIcon icon={faUserFriends} className="fa-iconss"/>
                        <p className="fa-iconss-description"><strong>Users</strong></p>
                    </Link>
                </Col>
            </Row>
            <Row className="no-gutters">
                <Col>
                    <Link to="/profit_tracker/payments">
                        <FontAwesomeIcon icon={faCreditCard} className="fa-iconss"/>
                        <p className="fa-iconss-description"><strong>Payments</strong></p>
                    </Link>
                </Col>
            </Row>
            <Row className="no-gutters">
                <Col>
                    <Link to="/profit_tracker/bookmakers">
                        <FontAwesomeIcon icon={faUserCircle} className="fa-iconss"/>
                        <p className="fa-iconss-description"><strong>Book</strong></p>
                    </Link>
                </Col>
            </Row>
            <Row className="no-gutters">
                <Col>
                    <Link to="/profit_tracker/transactions">
                        <FontAwesomeIcon icon={faList} className="fa-iconss"/>
                        <p className="fa-iconss-description"><strong>Transactions</strong></p>
                    </Link>
                </Col>
            </Row>
            <Row className="no-gutters">
                <Col>
                    <Link to="/profit_tracker/balance">
                        <FontAwesomeIcon icon={faBalanceScale} className="fa-iconss"/>
                        <p className="fa-iconss-description"><strong>Balance</strong></p>
                    </Link>
                </Col>
            </Row>
            <Row className="no-gutters">
                <Col>
                    <Link to="/profit_tracker/earnings">
                        <FontAwesomeIcon icon={faMoneyBill} className="fa-iconss"/>
                        <p className="fa-iconss-description"><strong>Profit/Loss</strong></p>
                    </Link>                    
                </Col>
            </Row>
            </>
        );
    }
}

export default SideBar;