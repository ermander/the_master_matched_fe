import { Modal, Button, Row, Col, InputGroup, FormControl } from "react-bootstrap"

import React, { Component } from 'react';

class OddsMatcherModal extends Component {

  state = {
    show: false,
    sport: "",
    mercato: "",
    data_inizio: "",
    ora_inizio: "",
    data_fine: "",
    ora_fine: "",
    liquidita: "",
    quota_min: "",
    quota_max: "",
    stake_rimborso: "",
    stake_bonus_rimborso: ""
  }

  handleClose = () => { this.setState({ show: false })}
  handleShow = () => { this.setState({ show: true })}
  handleReset = () => { 
    this.setState({
      show: true,
        sport: "",
      mercato: "",
      data_inizio: "",
      ora_inizio: "",
      data_fine: "",
      ora_fine: "",
      liquidita: "",
      quota_min: "",
      quota_max: "",
      stake_rimborso: "",
      stake_bonus_rimborso: ""
  })}

  render() {
    return (
         <>
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
                      onChange={(e) => {this.setState({ data_inizio: e.currentTarget.value})}}/>
                    </InputGroup>
                  </Col>
                  <Col xs={6}>
                    <p>Ora inizio:</p>
                    <InputGroup>
                      <FormControl 
                      type="time" 
                      onChange={(e) => {this.setState({ ora_inizio: e.currentTarget.value})}}/>
                    </InputGroup>
                  </Col>
                </Row>

                <Row className="mt-5">
                  <Col xs={6}>
                    <p>Data fine:</p>
                    <InputGroup>
                      <FormControl 
                      type="date" 
                      onChange={(e) => {this.setState({ data_fine: e.currentTarget.value})}}/>
                    </InputGroup>
                  </Col>
                  <Col xs={6}>
                    <p>Ora fine:</p>
                    <InputGroup>
                      <FormControl 
                      type="time" 
                      onChange={(e) => {this.setState({ ora_fine: e.currentTarget.value})}}/>
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
                        type="number"
                        placeholder="Minima €"
                        onChange={(e) => { this.setState({ liquidita: e.currentTarget.value})}}
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
                        type="number" 
                        placeholder="Min" 
                        onChange={(e) => {this.setState({ quota_min: e.currentTarget.value })}}
                        />
                      </InputGroup>
                    </Col>
                    <Col xs={6}>
                      <InputGroup>
                        <FormControl 
                        type="number" 
                        placeholder="Max" 
                        onChange={(e) => {this.setState({ quota_max: e.currentTarget.value })}}
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
                        onChange={(e) => {this.setState({ stake_rimborso: e.currentTarget.value })}}
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
                        onChange={(e) => {this.setState({ stake_bonus_rimborso: e.currentTarget.value })}}
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
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
              <Button variant="primary" onClick={this.handleReset}>
                Reset
              </Button>
            </Modal.Footer>
          </Modal>
        </>
    );
  }
}

export default OddsMatcherModal;