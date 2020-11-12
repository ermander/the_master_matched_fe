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
    layStake = async () => {
        this.setState({ 
            quotaPunta: this.state.quotaPunta !== "" ? this.state.quotaPunta : this.props.odd.quota,
            quotaBanca: this.state.quotaBanca !== "" ? this.state.quotaBanca : this.props.odd.quota_banca
        }, () => {
            const back_odd = parseFloat(this.state.quotaPunta !== "" ? this.state.quotaPunta : this.props.odd.quota)
            const lay_odd = parseFloat(this.state.quotaBanca !== "" ? this.state.quotaBanca : this.props.odd.quota_banca)
            const bet_stake = parseInt(this.state.puntata)
            const commission = parseFloat(this.state.commissione)
            const lay_stake = ((back_odd * bet_stake) / (lay_odd - commission))
            const risk = (lay_stake * (lay_odd - 1))
            this.setState({bancata: lay_stake.toFixed(2), risk: risk.toFixed(2)})
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

            <Modal show={this.props.show} onHide={this.props.noShow}>
                <Modal.Body className="pt-0">
                    {/* SELEZIONE MODALITà NORMALE, BONUS O RIMBORSO*/}
                    <Row className="mt-3 mx-1" style={{backgroundColor: "#37474f"}}>
                        <Col xs={4}></Col>
                        <Col xs={4}>
                            <Form.Group style={{display: "flex"}} className="mt-3">
                                <InputGroup.Prepend style={{display: "inline-block"}}>
                                    <InputGroup.Text>Tipologia</InputGroup.Text>
                                </InputGroup.Prepend>  
                                <Form.Control 
                                    as="select" 
                                    style={{display: "inline-block"}}
                                    onChange={ (e) => { this.setState({ selettoreRimborso: e.currentTarget.value })}}
                                >
                                    <option>NORMALE</option>
                                    <option>RIMBORSO</option>
                                    <option>BONUS</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={4} className="d-flex flex-row-reverse">
                            <Button onClick={this.props.noShow} style={{backgroundColor: "#37474f", border: "none"}}>
                                <FontAwesomeIcon icon={faTimesCircle} style={{fontSize: "25px"}} />
                            </Button>
                        </Col>
                    </Row>
                    {/* INFORMAZIONI MATCH */}
                    <Row className="mt-4">
                        <Col style={{backgroundColor: "#edf1f2"}} xs={3}>
                            {/* INFORMAZIONI SQUADRE, DATA, ORA, RATING ECC... */}
                            <span className="match-infoes">
                                <FontAwesomeIcon icon={faCalendarAlt}/>
                                <p className="mb-0">Data: <strong>{this.props.odd.data}</strong></p>
                            </span >
                            <span className="match-infoes">
                                <FontAwesomeIcon icon={faClock}/>
                                <p className="mb-0">Ora: <strong>{this.props.odd.ora}</strong></p>
                            </span>
                            <span className="match-infoes">
                                <FontAwesomeIcon icon={faFlag}/>
                                <p className="mb-0">Paese: <strong>{this.props.odd.nazione}</strong></p>
                            </span>
                            <span className="match-infoes">
                                <FontAwesomeIcon icon={faInfoCircle}/>
                                <p className="mb-0">Torneo: <strong>{this.props.odd.campionato}</strong></p>
                            </span>
                            <span className="match-infoes">
                                <FontAwesomeIcon icon={faFutbol}/>
                                <p className="mb-0">Casa: <strong>{this.props.odd.home}</strong></p>
                            </span>
                            <span className="match-infoes">
                                <FontAwesomeIcon icon={faFutbol}/>
                                <p className="mb-0">Ospite: <strong>{this.props.odd.away}</strong></p>
                            </span>
                            <span className="match-infoes">
                                <FontAwesomeIcon icon={faMoneyCheck}/>
                                <p className="mb-0">Mercato: <strong>{this.props.odd.tipo}</strong></p>
                            </span>
                            <span className="match-infoes">
                                <FontAwesomeIcon icon={faPercent}/>
                                <p className="mb-0">Rating: <strong>{this.props.odd.rating}%</strong></p>
                            </span> 
                        
                        </Col>
                        <Col xs={6}>
                            <Row>
                                <Col xs={6}>
                                <Card className="text-center" style={{minHeight: "300px", maxWidth: "250px"}}>
                                    <Card.Header style={{backgroundColor: "#a7d7fd"}}>PUNTA</Card.Header>
                                        <Card.Body>
                                            <Card.Title style={{fontSize: "17px"}}>{this.props.odd.home}</Card.Title>
                                                <Card.Text  className="mt-3" style={{border: "2px grey solid", borderRadius: "10px"}}>
                                                    @{this.props.odd.quota}
                                                </Card.Text>
                                                <img 
                                                    style={{width: "150px", height: "80px"}}
                                                    src={bookLogos[this.props.odd.book]} 
                                                    alt={bookLogos[this.props.odd.book]} 
                                                />
                                        </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={6}>
                                <Card className="text-center" style={{minHeight: "300px", maxWidth: "250px"}}>
                                    <Card.Header style={{backgroundColor: "#f8cad0"}}>BANCA</Card.Header>
                                        <Card.Body>
                                        <Card.Title style={{fontSize: "17px"}}>{this.props.odd.away}</Card.Title>
                                                <Card.Text className="mt-3" style={{border: "2px grey solid", borderRadius: "10px"}}>
                                                    @{this.props.odd.quota_banca}
                                                </Card.Text>
                                                <img 
                                                    style={{width: "150px", height: "80px"}}
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
                                        Invia al Profit Tracker
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col  style={{backgroundColor: "#edf1f2"}} xs={3}>
                            {this.state.selettoreRimborso !== "RIMBORSO"
                            ?
                            <>                        
                                <span>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text style={{minWidth: "130px"}}>Puntata</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl 
                                            type="text"
                                            onChange={ (e) => this.setState({puntata: e.currentTarget.value}, () => this.layStake())}
                                            
                                        />
                                        <InputGroup.Prepend>
                                            <InputGroup.Text style={{minWidth: "42px"}}>€</InputGroup.Text>
                                        </InputGroup.Prepend>
                                    </InputGroup>
                                </span>
                                <span>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text style={{minWidth: "130px"}}>Quota Punta</InputGroup.Text>
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
                                            <InputGroup.Text style={{minWidth: "130px"}}>Quota Banca</InputGroup.Text>
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
                                            <InputGroup.Text style={{minWidth: "130px"}}>Commissione</InputGroup.Text>
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
                                                Sbilanciamento Bancata
                                            </strong>
                                        </Form.Label>
                                        <Form.Control type="range" />
                                        <Form.Label>
                                            <strong className="py-5 my-2" style={{color: "green"}}>#Bancata Standard#</strong>
                                        </Form.Label>                                       
                                    </Form.Group>
                                </Form>
                            </>

                            :

                            <>
                                <span>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text style={{minWidth: "130px"}}>Puntata</InputGroup.Text>
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
                                                <InputGroup.Text style={{minWidth: "130px"}}>Rimborso</InputGroup.Text>
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
                                                <InputGroup.Text style={{minWidth: "130px"}}>Quota Punta</InputGroup.Text>
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
                                                <InputGroup.Text style={{minWidth: "130px"}}>Quota Banca</InputGroup.Text>
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
                                                <InputGroup.Text style={{minWidth: "130px"}}>Commissione</InputGroup.Text>
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
                                                    Sbilanciamento Bancata
                                                </strong>
                                            </Form.Label>
                                            <Form.Control type="range" />
                                            <Form.Label>
                                                <strong className="py-5 my-2" style={{color: "green"}}>#Bancata Standard#</strong>
                                            </Form.Label>                                       
                                        </Form.Group>
                                    </Form>
                                </>                            
                            }
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={7}>
                            <div className="py-2" style={{backgroundColor: "#37474f", textAlign: "center", color: "white"}}>
                                <strong>
                                    TABELLA DEI PROFITTI
                                </strong>
                            </div>
                            <Row className="mt-2">
                                <Col xs={5}></Col>
                                <Col xs={2}><strong>{this.props.odd.book}</strong></Col>
                                <Col xs={2}><strong>{this.props.odd.book2}</strong></Col>
                                <Col xs={1}></Col>
                                <Col xs={2}><strong>Totale</strong></Col>
                            </Row>
                            <Row className="mt-3">
                                <Col xs={5}>Se vinci su <strong>{this.props.odd.book}</strong></Col>
                                <Col xs={2}>###</Col>
                                <Col xs={2}>###</Col>
                                <Col xs={1}>=</Col>
                                <Col xs={2}>###</Col>
                            </Row>
                            <Row className="mt-3">
                                <Col xs={5}>Se vinci su <strong>{this.props.odd.book2}</strong></Col>
                                <Col xs={2}>###</Col>
                                <Col xs={2}>###</Col>
                                <Col xs={1}>=</Col>
                                <Col xs={2}>###</Col>
                            </Row>
                        </Col>
                        <Col xs={5}>
                            <div className="py-2" style={{backgroundColor: "#37474f", textAlign: "center", color: "white"}}>
                                <strong>
                                    RIEPILOGO
                                </strong>
                            </div>
                            <p className="mt-3 pl-5">Punta {this.state.puntata}€ a @{this.props.odd.quota} su <strong>{this.props.odd.book}</strong></p>
                            <p className="mt-3 pl-5">Banca {this.state.bancata}€ a @{this.props.odd.quota_banca} su <strong>{this.props.odd.book2}</strong></p>
                            <div style={{textAlign: "center"}}>
                                <p>
                                    <strong>Responsabilità di {this.state.risk}€</strong>
                                </p>
                                <h4>Il guadagno minimo sarà: ###</h4>
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