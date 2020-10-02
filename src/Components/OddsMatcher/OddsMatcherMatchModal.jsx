import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, InputGroup, Card, FormControl } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons'
import { faPercent } from '@fortawesome/free-solid-svg-icons'

import { bookLogos } from "../BookLogos/bookLogos"



class OddsMatcherMatchModal extends Component {

    state = {
        puntata: "",
        bancata: "",
        rimborso: "",
        commissione: "",
        selettoreRimborso: "NORMALE",
        quotaPunta: "",
        quotaBanca: "",
    }

    // POST nuova giocata abbinata

    postNewMatch = async () => {
        try {
            const postNewMatch = await fetch("http://localhost:3002/profit-tracker/in-progress", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
                body: JSON.stringify({
                    data: this.props.odd.data,
                    ora: this.props.odd.ora,
                    home: this.props.odd.home,
                    away: this.props.odd.away,
                    torneo: this.props.odd.campionato,
                    mercato: this.props.odd.tipo,
                    tipoPuntata: this.props.odd.a,
                    book: this.props.odd.book,
                    puntata: this.state.puntata,
                    quotaPunta: this.state.quotaPunta,
                    exchange: this.props.odd.book2,
                    bancata: this.state.bancata,
                    quotaBancata: this.state.quotaBanca,
                    puntataBonus: this.state.puntataBonus,
                    puntataRimborso: this.state.rimborso,
                    commissione: this.state.commissione,
                    inCorso: true
                })
            })
            const response = await postNewMatch.json()
            console.log(response)
        } catch (error) {
            console.log(error)            
        }        
    }

    componentDidMount = () =>{
        console.log(this.props.odd)
        const odd = this.props.odd
        
        this.setState({
            quotaPunta: odd.quota,
            quotaBanca: odd.quota_banca
        })
        
    }

    render() {
        return (
            <>
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
                        <Col xs={4}></Col>
                    </Row>
                    {/* INFORMAZIONI MATCH */}
                    <Row className="mt-4">
                        <Col style={{backgroundColor: "#edf1f2"}} xs={3}>
                            {/* INFORMAZIONI SQUADRE, DATA, ORA, RATING ECC... */}
                            <span style={{display: "flex"}}>
                                <FontAwesomeIcon icon={faCalendarAlt}/>
                                <p>Data: <strong>{this.props.odd.data}</strong></p>
                            </span>
                            <span style={{display: "flex"}}>
                                <FontAwesomeIcon icon={faClock}/>
                                <p>Ora: <strong>{this.props.odd.ora}</strong></p>
                            </span>
                            <span style={{display: "flex"}}>
                                <FontAwesomeIcon icon={faFlag}/>
                                <p>Paese: <strong>{this.props.odd.nazione}</strong></p>
                            </span>
                            <span style={{display: "flex"}}>
                                <FontAwesomeIcon icon={faInfoCircle}/>
                                <p>Torneo: <strong>{this.props.odd.campionato}</strong></p>
                            </span>
                            <span style={{display: "flex"}}>
                                <FontAwesomeIcon icon={faFutbol}/>
                                <p>Casa: <strong>{this.props.odd.home}</strong></p>
                            </span>
                            <span style={{display: "flex"}}>
                                <FontAwesomeIcon icon={faFutbol}/>
                                <p>Ospite: <strong>{this.props.odd.away}</strong></p>
                            </span>
                            <span style={{display: "flex"}}>
                                <FontAwesomeIcon icon={faMoneyCheck}/>
                                <p>Mercato: <strong>{this.props.odd.tipo}</strong></p>
                            </span>
                            <span style={{display: "flex"}}>
                                <FontAwesomeIcon icon={faPercent}/>
                                <p>Rating: <strong>{this.props.odd.rating}%</strong></p>
                            </span> 
                        
                        </Col>
                        <Col xs={6}>
                            <Row>
                                <Col xs={6}>
                                <Card className="text-center">
                                    <Card.Header style={{backgroundColor: "#a7d7fd"}}>PUNTA</Card.Header>
                                        <Card.Body>
                                            <Card.Title style={{fontSize: "17px"}}>{this.props.odd.home}</Card.Title>
                                                <Card.Text  className="mt-3" style={{border: "2px grey solid", borderRadius: "10px"}}>
                                                    @{this.props.odd.quota}
                                                </Card.Text>
                                                <img 
                                                    style={{width: "150px", height: "80px"}}
                                                    src={bookLogos[this.props.odd.book]} 
                                                />
                                        </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={6}>
                                <Card className="text-center">
                                    <Card.Header style={{backgroundColor: "#f8cad0"}}>BANCA</Card.Header>
                                        <Card.Body>
                                        <Card.Title style={{fontSize: "17px"}}>{this.props.odd.away}</Card.Title>
                                                <Card.Text className="mt-3" style={{border: "2px grey solid", borderRadius: "10px"}}>
                                                    @{this.props.odd.quota_banca}
                                                </Card.Text>
                                                <img 
                                                    style={{width: "150px", height: "80px"}}
                                                    src={bookLogos[this.props.odd.book2]} 
                                                />
                                        </Card.Body>
                                </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} style={{textAlign: "center"}}>
                                    <Button className="mt-3" style={{minWidth: "70%"}}>
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
                                            onChange={(e) => { this.setState({ puntata: e.currentTarget.value})}}
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
                                                placeholder={this.props.odd.quota_banca}
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
                                                onChange={(e) => { this.setState({ commissione: e.currentTarget.value})}}
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
                                                onChange={(e) => { this.setState({ puntata: e.currentTarget.value})}}
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
                                                    onChange={(e) => { this.setState({ quotaBancata: e.currentTarget.value})}}
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
                            <p className="mt-3 pl-5">Punta ## a @{this.props.odd.quota} su <strong>{this.props.odd.book}</strong></p>
                            <p className="mt-3 pl-5">Banca ## a @{this.props.odd.quota_banca} su <strong>{this.props.odd.book2}</strong></p>
                            <div style={{textAlign: "center"}}>
                                <p>
                                    <strong>Responsabilità di ###</strong>
                                </p>
                                <h4>Il guadagno minimo sarà: ###</h4>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className="px-0" style={{backgroundColor: "#edf1f2"}}>
                <Button variant="secondary" onClick={this.props.noShow}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.props.noShow}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default OddsMatcherMatchModal;