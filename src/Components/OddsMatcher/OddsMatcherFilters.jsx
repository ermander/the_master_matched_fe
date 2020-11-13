import { Modal, Button, Row, Col, InputGroup, FormControl } from "react-bootstrap"

import React, { Component } from 'react';

class OddsMatcherModal extends Component {

  state = {
    show: false,
    sport: "",
    mercato: "",
    dataInizio: "",
    oraInizio: "",
    dataFine: "",
    oraFine: "",
    liquidita: "",
    quotaMin: "",
    quotaMax: "",
    stakeRimborso: "",
    stakeBonusRimborso: ""
  }

  handleClose = () => { this.setState({ show: false })}

  handleShow = () => { this.setState({ show: true })}

  handleReset = () => { 
    this.setState({
      show: true,
      sport: "",
      mercato: "",
      dataInizio: "",
      oraInizio: "",
      dataFine: "",
      oraFine: "",
      liquidita: "",
      quotaMin: "",
      quotaMax: "",
      stakeRimborso: "",
      stakeBonusRimborso: ""
  })}

  render() {
    return (
         <div style={{display: "inline-block", marginRight:"1rem", marginLeft: "0", paddingLeft: "0"}}>
          <Button variant="primary" onClick={this.handleShow}>
            Opzioni di Ricerca
          </Button>

          <Modal show={this.state.show} onHide={this.handleClose} >
            <Modal.Body className="oddsmatcher-modal">
              <Row className="my-3">

                {/* FILTRI PER SPORT */}
                <Col xs={2}>
                  <h5>Filtra per sport</h5>
                  <Row className="mt-5"> 
                    <Col>
                    
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup.Prepend>
                      <FormControl 
                      aria-label="Text input with checkbox" 
                      placeholder="TUTTI" 
                      value="TUTTI"
                      onChange={(e) => {this.setState({ sport: e.currentTarget.value })}}
                      />
                    </InputGroup>

                    
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup.Prepend>
                      <FormControl 
                      aria-label="Text input with checkbox" 
                      placeholder="CALCIO" 
                      value="CALCIO"
                      onChange={(e) => {this.setState({ sport: e.currentTarget.value })}}
                      />
                    </InputGroup>

                    
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup.Prepend>
                      <FormControl 
                      aria-label="Text input with checkbox" 
                      placeholder="TENNIS"
                      value="TENNIS"
                      onChange={(e) => {this.setState({ sport: e.currentTarget.value })}}
                      />
                    </InputGroup>

                    
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup.Prepend>
                      <FormControl 
                      aria-label="Text input with checkbox" 
                      placeholder="BASKET "
                      value="BASKET"
                      onChange={(e) => {this.setState({ sport: e.currentTarget.value })}}/>
                    </InputGroup>

                    </Col>
                  </Row>
                </Col>

                {/* FILTRI PER MERCATO */}
                <Col xs={2}>
                  <h5>Filtra per mercato</h5>
                  <Row className="mt-5"> 
                    <Col>
                    
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup.Prepend>
                      <FormControl 
                      aria-label="Text input with checkbox" 
                      placeholder="TUTTI" 
                      value="TUTTI"
                      onChange={(e) => {this.setState({ mercato: e.currentTarget.value })}}
                      />
                    </InputGroup>

                    
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup.Prepend>
                      <FormControl 
                      aria-label="Text input with checkbox" 
                      placeholder="1X2" 
                      value="1X2"
                      onChange={(e) => {this.setState({ mercato: e.currentTarget.value })}}                      
                      />
                    </InputGroup>

                    
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup.Prepend>
                      <FormControl 
                      aria-label="Text input with checkbox" 
                      placeholder="U/O"
                      value="U/O"
                      onChange={(e) => {this.setState({ mercato: e.currentTarget.value })}}
                      />
                    </InputGroup>

                    
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup.Prepend>
                      <FormControl 
                      aria-label="Text input with checkbox" 
                      placeholder="GG/NG"
                      value="GG/NG"
                      onChange={(e) => {this.setState({ mercato: e.currentTarget.value })}}                      
                      />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </InputGroup.Prepend>
                      <FormControl 
                      aria-label="Text input with checkbox" 
                      placeholder="TT"
                      value="TT"
                      onChange={(e) => {this.setState({ mercato: e.currentTarget.value })}}/>
                    </InputGroup>

                    </Col>
                  </Row>
                </Col>

                {/* FILTRI PER DATA */}
                <Col xs={4}>
                <h5>Filtra per data</h5>
                <Row className="mt-5">
                  <Col xs={6}>
                    <p>Data inizio:</p>
                    <InputGroup>
                      <FormControl 
                      type="date"
                      onChange={(e) => {this.setState({ dataInizio: e.currentTarget.value})}}/>
                    </InputGroup>
                  </Col>
                  <Col xs={6}>
                    <p>Ora inizio:</p>
                    <InputGroup>
                      <FormControl 
                      type="time" 
                      onChange={(e) => {this.setState({ oraInizio: e.currentTarget.value})}}/>
                    </InputGroup>
                  </Col>
                </Row>

                <Row className="mt-5">
                  <Col xs={6}>
                    <p>Data fine:</p>
                    <InputGroup>
                      <FormControl 
                      type="date" 
                      onChange={(e) => {this.setState({ dataFine: e.currentTarget.value})}}/>
                    </InputGroup>
                  </Col>
                  <Col xs={6}>
                    <p>Ora fine:</p>
                    <InputGroup>
                      <FormControl 
                      type="time" 
                      onChange={(e) => {this.setState({ oraFine: e.currentTarget.value})}}/>
                    </InputGroup>
                  </Col>
                </Row>
                </Col>

                {/* FILTRI PER LIQUIDITà E QUOTA */}
                <Col xs={2}>
                  <h5>Liquidità e Quota</h5>
                  <Row className="mt-5">
                    <Col xs={12}>
                      <p>Liquidità:</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <InputGroup>
                        <FormControl 
                        type="text"
                        placeholder="Minima €"
                        onChange={(e) => { this.setState({ liquidita: parseFloat(e.currentTarget.value)})}}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col xs={12}>
                      <p>Quota:</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6}>
                      <InputGroup>
                        <FormControl 
                        type="text" 
                        placeholder="Min" 
                        onChange={(e) => {this.setState({quotaMin: parseFloat(e.currentTarget.value)})}}
                        />
                      </InputGroup>
                    </Col>
                    <Col xs={6}>
                      <InputGroup>
                        <FormControl 
                        type="text" 
                        placeholder="Max" 
                        onChange={(e) => {this.setState({quotaMax: parseFloat(e.currentTarget.value)})}}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </Col>
                

                {/* FILTRI PER RATING RIMBORSO */}
                <Col xs={2}>
                  <h5>Modalità rimborso</h5>
                  <Row className="mt-5">
                    <Col xs={12}>
                      <p>Puntata:</p>
                      <InputGroup className="mb-3">
                        <FormControl 
                        type="number" 
                        placeholder="Puntata €" 
                        onChange={(e) => {this.setState({ stakeRimborso: e.currentTarget.value })}}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                    <p>Rimborso:</p>
                      <InputGroup className="mb-3">
                        <FormControl 
                        type="number" 
                        placeholder="Rimborso €"
                        onChange={(e) => {this.setState({ stakeBonusRimborso: e.currentTarget.value })}}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Button>
                        Ordina per CR%
                      </Button>
                    </Col>
                  </Row>
                </Col>
                

              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Chiudi
              </Button>
              <Button variant="primary" onClick={()=>{
                this.props.setFilters({...this.state})
                this.handleClose()}
                }>
                Applica Filtri
              </Button>
              <Button variant="danger" onClick={this.handleReset}>
                Reset
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    );
  }
}

export default OddsMatcherModal;