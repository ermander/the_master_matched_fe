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

const bookLogos = {
    "888Sport": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693155/Solo%20Capstone/888Sport_hczenq.png",
    "AdmiralYES": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693153/Solo%20Capstone/Admiral_Yes_srmgvq.png",
    "Bet365": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693153/Solo%20Capstone/Bet365_ez0m2j.png",
    "Betaland": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693153/Solo%20Capstone/Betaland_gwfqbu.jpg",
    "Betclic": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693153/Solo%20Capstone/Betclic_hiw5gy.webp",
    "betfair": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693154/Solo%20Capstone/BetfairSportBook_ft2kbk.png",
    "BetFlag": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693154/Solo%20Capstone/BetflagSportBook_infneq.png",
    "betman": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693154/Solo%20Capstone/Betman_ybpb2v.webp",
    "better": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693154/Solo%20Capstone/Better_dxguec.png",
    "Betway": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693154/Solo%20Capstone/Betway_ntfplf.png",
    "Betwill": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693154/Solo%20Capstone/Betwill_ltieoj.png",
    "Bwin": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693154/Solo%20Capstone/Bwin_iv1jiu.png",
    "chancebet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693155/Solo%20Capstone/Chencebet_n8ah64.png",
    "DomusBet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693155/Solo%20Capstone/DomusBet_jqkzfp.jpg",
    "eurobet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693155/Solo%20Capstone/Eurobet_ye5nxl.png",
    "Flashbet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693155/Solo%20Capstone/Flashbet_ynbnst.png",
    "Gioco Digitale": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693155/Solo%20Capstone/gioco_digitale_ds96er.png",
    "GoldBet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693155/Solo%20Capstone/Goldbet_aef4tk.png",
    "LeoVegas": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693155/Solo%20Capstone/LeoVegas_brlfxq.png",
    "Marathonbet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693155/Solo%20Capstone/Marathobet_r3xkub.png",
    "Merkur Win": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/MerkurWin_tnpt8u.png",
    "Newgioco": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/NweGioco_tyxa9a.png",
    "PinterBet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/PinterBet_gxchdh.png",
    "PlanetWin365": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/PlanetWin365_egmsdn.png",
    "plexbet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/Plexbet_pdjsvt.png",
    "Scommettendo": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/Scommettendo_faor2n.png",
    "sisal": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/Sisal_j8nlfc.png",
    "Skybet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/Skybet_hyg0vu.png",
    "snai": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/Snai_al0ikv.png",
    "SportPesa": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693157/Solo%20Capstone/Sportpesa_s67dyp.png",
    "Stanleybet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/Stanleybet_h55wd1.png",
    "StarVegas": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693157/Solo%20Capstone/StarVegas_kcfxig.png",
    "Terrybet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693157/Solo%20Capstone/Terrybet_bvmy6y.png",
    "TotoWinBet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693157/Solo%20Capstone/TotoWinBet_mxth01.png",
    "unibet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693157/Solo%20Capstone/Unibet2_wecikf.png",
    "William Hill": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693245/Solo%20Capstone/Bookmaker%20Logos/William_Hill_g1hzi8.png",
    "Zona Gioco": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693157/Solo%20Capstone/ZonaGioco_zlw3df.png"
}

class OddsMatcherMatchModal extends Component {
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
                                    onChange={ (e) => { this.setState({ numero_eventi: e.currentTarget.value })}}
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
                            <span>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text style={{minWidth: "130px"}}>Puntata</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl 
                                        type="number"
                                        onChange={(e) => { this.setState({ liquidita: e.currentTarget.value})}}
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
                                            type="number"
                                            onChange={(e) => { this.setState({ liquidita: e.currentTarget.value})}}
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
                                            type="number"
                                            onChange={(e) => { this.setState({ liquidita: e.currentTarget.value})}}
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
                                            type="number"
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