import React, { Component } from 'react';

// React Bootstrap
import { Modal, Button, Row, Col, Form, InputGroup, Card, FormControl } from "react-bootstrap"

// Components
import UsersModal from "./UsersModal"

// FontAwasome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons'
import { faPercent } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

// CSS
import "./oddsmatcher.css"
import "./oddsmatchermatchmodal.css"

// Bookmakers logos
import { bookLogos } from "../BookLogos/bookLogos"

class OddsMatcherMatchModal extends Component {

    state = {
        puntata: "",
        bancata: "",
        rimborso: "",
        commissione: "0.05",
        selettoreRimborso: "NORMALE",
        quotaPunta: "",
        quotaBanca: "",
        risk: "",
        showUserModal: false,
    }

    showUserModal = () => {this.setState({showUserModal: true})}

    noShowUserModal = () => {this.setState({showUserModal: false})}

    // Calculating risk and lay stake
    layStake = () => {
        this.setState({ 
            quotaPunta: this.state.quotaPunta !== "" ? this.state.quotaPunta : this.props.odd.quota,
            quotaBanca: this.state.quotaBanca !== "" ? this.state.quotaBanca : this.props.odd.quota_banca
        }, () => {
            const back_odd = parseFloat(this.state.quotaPunta !== "" ? this.state.quotaPunta : this.props.odd.quota)
            const lay_odd = parseFloat(this.state.quotaBanca !== "" ? this.state.quotaBanca : this.props.odd.quota_banca)
            const bet_stake = parseInt(this.state.puntata)
            const commission = parseFloat(this.state.commissione)
            const lay_stake = parseFloat((back_odd * bet_stake) / (lay_odd - commission))
            const risk = (lay_stake * (lay_odd - 1))
            this.setState({bancata: parseFloat(lay_stake).toFixed(2), risk: parseFloat(risk).toFixed(2)})
        })       
    }

    render() {
        return (
            <>
            <UsersModal 
                show={this.state.showUserModal}
                noShow={this.noShowUserModal}
                data={this.props.odd.data}
                ora={this.props.odd.ora}
                sport={this.props.odd.sport}
                home={this.props.odd.home}
                away={this.props.odd.away}
                torneo={this.props.odd.campionato}
                mercato={this.props.odd.tipo}
                tipoPuntata={this.props.odd.a}
                book={this.props.odd.book}
                puntata={this.state.puntata}
                quotaPunta={this.state.quotaPunta !== "" ? this.state.quotaPunta : this.props.odd.quota}
                exchange={this.props.odd.book2}
                bancata={this.state.bancata}
                quotaBanca={this.state.quotaBanca !== "" ? this.state.quotaBanca : this.props.odd.quota_banca}
                rischio={this.state.risk}
                commissione={this.state.commissione}
                inCorso={true}
            />

            <Modal show={this.props.show} onHide={this.props.noShow} style={{backgroundColor: "transparent"}}>
                <Modal.Body className="p-0" style={{maxHeight: "85vh"}}>
                    {/* SELEZIONE MODALITà NORMALE, BONUS O RIMBORSO*/}
                    <Row className="no-gutters" style={{backgroundColor: "#37474f"}}>
                        <Col xs={4} style={{backgroundColor: "#37474f"}}></Col>
                        <Col xs={4} style={{backgroundColor: "#37474f"}}>
                            <Form.Group style={{display: "flex"}} className="mt-3">
                                <InputGroup.Prepend style={{display: "inline-block"}}>
                                    <InputGroup.Text>Type</InputGroup.Text>
                                </InputGroup.Prepend>  
                                <Form.Control 
                                    as="select" 
                                    style={{display: "inline-block"}}
                                    onChange={ (e) => { this.setState({ selettoreRimborso: e.currentTarget.value })}}
                                >
                                    <option>NORMAL</option>
                                    <option>REFUND</option>
                                    <option>BONUS</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={4} className="d-flex flex-row-reverse" style={{backgroundColor: "#37474f"}}>
                            <Button  size="sm" variant="transparent" style={{backgroundColor: "#37474f", border: "none", boxShadow:"none"}}>
                                <FontAwesomeIcon onClick={this.props.noShow} icon={faTimesCircle} style={{fontSize: "25px", color: "white"}} />
                            </Button>
                        </Col>
                    </Row>
                    {/* INFORMAZIONI MATCH */}
                    <Row className="mt-4 no-gutters">
                        <Col style={{backgroundColor: "#edf1f2"}} className="p-2" xs={3}>
                            {/* INFORMAZIONI SQUADRE, DATA, ORA, RATING ECC... */}
                            <span className="match-infoes">
                                <FontAwesomeIcon icon={faCalendarAlt}/>
                                <p className="mb-0 ml-2">Date: <strong>{this.props.odd.data}</strong></p>
                            </span >
                            <span className="match-infoes">
                                <FontAwesomeIcon icon={faClock}/>
                                <p className="mb-0 ml-2">Time: <strong>{this.props.odd.ora}</strong></p>
                            </span>
                            <span className="match-infoes">
                                <FontAwesomeIcon icon={faFlag}/>
                                <p className="mb-0 ml-2">Contry: <strong>{this.props.odd.nazione}</strong></p>
                            </span>
                            <span className="match-infoes">
                                <FontAwesomeIcon icon={faInfoCircle}/>
                                <p className="mb-0 ml-2">Tournament: <strong>{this.props.odd.campionato}</strong></p>
                            </span>
                            <span className="match-infoes">
                                <FontAwesomeIcon icon={faFutbol}/>
                                <p className="mb-0 ml-2">Home: <strong>{this.props.odd.home}</strong></p>
                            </span>
                            <span className="match-infoes">
                                <FontAwesomeIcon icon={faFutbol}/>
                                <p className="mb-0 ml-2">Away: <strong>{this.props.odd.away}</strong></p>
                            </span>
                            <span className="match-infoes">
                                <FontAwesomeIcon icon={faMoneyCheck}/>
                                <p className="mb-0 ml-2">Market: <strong>{this.props.odd.tipo}</strong></p>
                            </span>
                            <span className="match-infoes">
                                <FontAwesomeIcon icon={faPercent}/>
                                <p className="mb-0 ml-2">Rating: <strong>{this.props.odd.rating}%</strong></p>
                            </span> 
                        
                        </Col>
                        <Col xs={6}>
                            <Row>
                                <Col xs={6} style={{display: "flex"}}>
                                <Card className="text-center" style={{minHeight: "300px", maxWidth: "350px", minWidth: "230px", margin: "auto"}}>
                                    <Card.Header style={{backgroundColor: "#a7d7fd"}}>Back</Card.Header>
                                        <Card.Body>
                                            <Card.Title style={{fontSize: "17px"}}>{this.props.odd.home}</Card.Title>
                                                <Card.Text  className="mt-3" style={{border: "2px grey solid", borderRadius: "10px"}}>
                                                    @{this.props.odd.quota}
                                                </Card.Text>
                                                <img 
                                                    style={{width: "150px", height: "80px", objectFit: "contain", backgroundColor: "black"}}
                                                    src={bookLogos[this.props.odd.book]} 
                                                    alt={bookLogos[this.props.odd.book]} 
                                                />
                                        </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={6} style={{display: "flex"}}>
                                <Card className="text-center" style={{minHeight: "300px", maxWidth: "350px", minWidth: "230px", margin: "auto"}}>
                                    <Card.Header style={{backgroundColor: "#f8cad0"}}>Lay</Card.Header>
                                        <Card.Body>
                                        <Card.Title style={{fontSize: "17px"}}>{this.props.odd.away}</Card.Title>
                                                <Card.Text className="mt-3" style={{border: "2px grey solid", borderRadius: "10px"}}>
                                                    @{this.props.odd.quota_banca}
                                                </Card.Text>
                                                <img 
                                                    style={{width: "150px", height: "80px", objectFit: "contain"}}
                                                    src={bookLogos[this.props.odd.book2]}
                                                    alt={bookLogos[this.props.odd.book2]}
                                                />
                                        </Card.Body>
                                </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} style={{textAlign: "center"}}>
                                    <Button 
                                        className="mt-3" style={{minWidth: "70%"}}
                                        onClick={this.showUserModal}
                                        >
                                        Send to the Profit Tracker
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col  style={{backgroundColor: "#edf1f2"}} xs={3}  className="p-2">
                            {this.state.selettoreRimborso !== "RIMBORSO"
                            ?
                            <>                        
                                <span>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text style={{minWidth: "130px"}}>Stake</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl 
                                            type="text"
                                            onChange={ (e) => this.setState({puntata: parseFloat(e.currentTarget.value)}, () => this.layStake())}
                                            
                                        />
                                        <InputGroup.Prepend>
                                            <InputGroup.Text style={{minWidth: "42px"}}>€</InputGroup.Text>
                                        </InputGroup.Prepend>
                                    </InputGroup>
                                </span>
                                <span>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text style={{minWidth: "130px"}}>Back Odd</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl 
                                                type="text"
                                                placeholder={this.props.odd.quota}
                                                onChange={(e) => this.setState({ quotaPunta: e.currentTarget.value}, ()=> this.layStake())}
                                                
                                            />
                                        <InputGroup.Prepend>
                                            <InputGroup.Text style={{minWidth: "42px"}}>@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                    </InputGroup>
                                </span>
                                <span>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text style={{minWidth: "130px"}}>Lay Odd</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl 
                                                type="text"
                                                placeholder={this.props.odd.quota_banca}
                                                onChange={(e) => { this.setState({ quotaBanca: e.currentTarget.value}, ()=> this.layStake())}}
                                            />
                                        <InputGroup.Prepend>
                                            <InputGroup.Text style={{minWidth: "42px"}}>@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                    </InputGroup>
                                </span>
                                <span>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text style={{minWidth: "130px"}}>Commission</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl 
                                                type="text"
                                                placeholder="5"
                                                onChange={(e) => { this.setState({ commissione: e.currentTarget.value}, ()=> this.layStake())}}
                                            />
                                        <InputGroup.Prepend>
                                            <InputGroup.Text style={{minWidth: "42px"}}>%</InputGroup.Text>
                                        </InputGroup.Prepend>
                                    </InputGroup>
                                </span>
                                <Form className="mx-3 my-3 px-3 py-3" style={{border: "1px solid #ced4da", borderRadius: "10px"}}>
                                    <Form.Group controlId="formBasicRange" style={{textAlign: "center"}}>
                                        <Form.Label>
                                            <strong>
                                                Imbalance Lay
                                            </strong>
                                        </Form.Label>
                                        <Form.Control type="range" />
                                        <Form.Label>
                                            <strong className="py-5 my-2" style={{color: "green", backgroundColor: "transparent"}}>#Standard Lay#</strong>
                                        </Form.Label>                                       
                                    </Form.Group>
                                </Form>
                            </>

                            :

                            <>
                                <span>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{minWidth: "130px"}}>Stake</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl 
                                                type="text"
                                                onChange={ (e) => this.setState({ puntata: e.currentTarget.value }, () => this.layStake())}
                                            />
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{minWidth: "42px"}}>€</InputGroup.Text>
                                            </InputGroup.Prepend>
                                        </InputGroup>
                                    </span>
                                    <span>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{minWidth: "130px"}}>Refund</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl 
                                                type="text"
                                                onChange={(e) => { this.setState({ rimborso: e.currentTarget.value})}}
                                            />
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{minWidth: "42px"}}>€</InputGroup.Text>
                                            </InputGroup.Prepend>
                                        </InputGroup>
                                    </span>
                                    <span>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{minWidth: "130px"}}>Back Odd</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl 
                                                    type="text"
                                                    placeholder={this.props.odd.quota}
                                                    onChange={(e) => { this.setState({ quotaPunta: e.currentTarget.value})}}
                                                />
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{minWidth: "42px"}}>@</InputGroup.Text>
                                            </InputGroup.Prepend>
                                        </InputGroup>
                                    </span>
                                    <span>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{minWidth: "130px"}}>Lay Odd</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl 
                                                    type="text"
                                                    placeholder={this.props.odd.quota}
                                                    onChange={(e) => { this.setState({ quotaBanca: e.currentTarget.value})}}
                                                />
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{minWidth: "42px"}}>@</InputGroup.Text>
                                            </InputGroup.Prepend>
                                        </InputGroup>
                                    </span>
                                    <span>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{minWidth: "130px"}}>Commission</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl 
                                                    type="text"
                                                    placeholder="5"
                                                    onChange={(e) => { this.setState({ liquidita: e.currentTarget.value})}}
                                                />
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{minWidth: "42px"}}>%</InputGroup.Text>
                                            </InputGroup.Prepend>
                                        </InputGroup>
                                    </span>
                                    <Form className="mx-3 my-3 px-3 py-3" style={{border: "1px solid #ced4da", borderRadius: "10px"}}>
                                        <Form.Group controlId="formBasicRange" style={{textAlign: "center"}}>
                                            <Form.Label>
                                                <strong>
                                                    Imbalance Lay
                                                </strong>
                                            </Form.Label>
                                            <Form.Control type="range" />
                                            <Form.Label>
                                                <strong className="py-5 my-2" style={{color: "green"}}>#Standard Lay#</strong>
                                            </Form.Label>                                       
                                        </Form.Group>
                                    </Form>
                                </>                            
                            }
                        </Col>
                    </Row>
                    <Row className="mt-4 no-gutters">
                        <Col xs={7} style={{backgroundColor: "#edf1f2"}} className="mb-2">
                            <div className="py-2" style={{backgroundColor: "#37474f", textAlign: "center", color: "white"}}>
                                <strong>
                                    PROFIT TABLE
                                </strong>
                            </div>
                            <div style={{backgroundColor: "#edf1f2"}}>
                            <Row className="mt-2">
                                <Col xs={5}></Col>
                                <Col xs={2}><strong>{this.props.odd.book}</strong></Col>
                                <Col xs={2}><strong>{this.props.odd.book2}</strong></Col>
                                <Col xs={1}></Col>
                                <Col xs={2}><strong>Total</strong></Col>
                            </Row>
                            <Row className="py-3 mx-1" style={{backgroundColor: "#a7d7fd"}}>
                                <Col xs={5}>If you win on <strong>{this.props.odd.book}</strong></Col>
                                <Col xs={2}>{
                                    this.state.puntata !== ""
                                    ?
                                    "+" + ((this.props.odd.quota * this.state.puntata)-this.state.puntata).toFixed(2) + "€"
                                    :
                                    "+0.00€"
                                    }
                                </Col>
                                <Col xs={2}>{
                                    this.state.risk === ""
                                    ?
                                    "+0.00€"
                                    :
                                    -parseFloat(this.state.risk) + "€"
                                    }
                                </Col>
                                <Col xs={1}>=</Col>
                                <Col xs={2}>{
                                    this.state.puntata === ""
                                    ?
                                    "+0.00€"
                                    :
                                    (
                                        (((parseFloat(this.props.odd.quota) * parseFloat(this.state.puntata)) - parseFloat(this.state.risk)) - this.state.puntata).toFixed(2) > 0
                                        ?
                                        "+" + 
                                        (((parseFloat(this.props.odd.quota) * parseFloat(this.state.puntata)) - parseFloat(this.state.risk)) - this.state.puntata).toFixed(2) + "€"
                                        :
                                        "-" + 
                                        (((parseFloat(this.props.odd.quota) * parseFloat(this.state.puntata)) - parseFloat(this.state.risk)) - this.state.puntata).toFixed(2) + "€"

                                    )
                                    
                                }</Col>
                            </Row>
                            <Row className="py-3 mx-1" style={{backgroundColor: "#f8cad0"}}>
                                <Col xs={5}>If you win on <strong>{this.props.odd.book2}</strong></Col>
                                <Col xs={2}>{
                                        this.state.puntata === ""
                                        ?
                                        "+0.00€"
                                        :
                                        -parseFloat(this.state.puntata).toFixed(2) + "€"
                                    }                   
                                </Col>
                                <Col xs={2}>{
                                    this.state.puntata !== ""
                                    ?
                                    "+" + this.state.bancata + "€"
                                    :
                                    "+0.00€"
                                }</Col>
                                <Col xs={1}>=</Col>
                                <Col xs={2}>{
                                    this.state.puntata === ""
                                    ?
                                    (
                                        "+0.00€"
                                    )
                                    :
                                    (
                                        (this.state.bancata - (this.state.bancata - (this.state.bancata * 0.95)) - this.state.puntata).toFixed(2) > 0
                                        ?
                                        "+" + 
                                        (this.state.bancata - (this.state.bancata - (this.state.bancata * 0.95)) - this.state.puntata).toFixed(2) + "€"
                                        : 
                                        "-" +
                                        (this.state.bancata - (this.state.bancata - (this.state.bancata * 0.95)) - this.state.puntata).toFixed(2) + "€"
                                    )
                                    }
                                </Col>
                            </Row>
                            </div>
                        </Col>
                        <Col xs={5}>
                            <div className="py-2" style={{backgroundColor: "#37474f", textAlign: "center", color: "white", borderLeft: "10px solid white"}}>
                                <strong>
                                    SUMMARY
                                </strong>
                            </div>
                                <div style={{backgroundColor: "#edf1f2", borderLeft: "10px solid white"}} className="py-2 mb-2">
                                    {
                                        this.state.puntata
                                        ?
                                        <>
                                            <p className="mt-3 pl-5">Back <strong>{this.state.puntata}€</strong> at <strong>@{this.props.odd.quota}</strong> on <strong>{this.props.odd.book}</strong></p>
                                            <p className="mt-3 pl-5">Lay <strong>{this.state.bancata}€</strong> at <strong>@{this.props.odd.quota_banca}</strong> on <strong>{this.props.odd.book2}</strong></p>
                                        </>
                                        :
                                        <>
                                            <p className="mt-3 pl-5">Back <strong>0€</strong> at <strong>@{this.props.odd.quota}</strong> on <strong>{this.props.odd.book}</strong></p>
                                            <p className="mt-3 pl-5">Lay <strong>0€</strong> at <strong>@{this.props.odd.quota_banca}</strong> on <strong>{this.props.odd.book2}</strong></p>
                                        </>
                                    }
                                    <div style={{textAlign: "center"}}>
                                        {
                                            this.state.risk
                                            ?
                                            <p>
                                                <strong>Lay of {this.state.risk}€</strong>
                                            </p>
                                            :
                                            <p>
                                                <strong>Lay of 0.00€</strong>
                                            </p>
                                        }                                    
                                    {/*<h4>Il guadagno minimo sarà: ###</h4>*/}
                                    </div>
                                </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
            </>
        );
    }
}

export default OddsMatcherMatchModal;