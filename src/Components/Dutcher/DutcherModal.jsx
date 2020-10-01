import { Modal, Button, Row, Col, InputGroup, FormControl } from "react-bootstrap"
import React, { Component } from 'react';

class DutcherModal extends Component {

  state = {
    show: false
  }

  handleClose = () => { this.setState({ show: false })}
  handleShow = () => { this.setState({ show: true })}

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Opzioni Di Ricerca
        </Button>
  
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>

            <Row className="mt-3">
              <Col xs={4}>
                <Row>
                  <Col xs={6}>
                    <h5 className="mb-5">Filtra per sport</h5>
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
                  <Col xs={6}>
                    <h5 className="mb-5">Filtra per mercato</h5>
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
              <Col xs={4}>
                <h5 className="mb-5">Filtra per Data e Quota</h5>
                <Row>
                  <Col xs={2}>
                    <p>Inizio: </p>
                  </Col>
                  <Col xs={6}>
                    <InputGroup>
                      <FormControl 
                      type="date"
                      onChange={(e) => {this.setState({ data_inizio: e.currentTarget.value})}}/>
                    </InputGroup>
                  </Col>
                  <Col xs={4}>
                    <InputGroup>
                      <FormControl 
                      type="time" 
                      onChange={(e) => {this.setState({ ora_inizio: e.currentTarget.value})}}/>
                    </InputGroup>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col xs={2}>
                    <p>Fine: </p>
                  </Col>
                  <Col xs={6}>
                    <InputGroup>
                      <FormControl 
                      type="date"
                      onChange={(e) => {this.setState({ data_inizio: e.currentTarget.value})}}/>
                    </InputGroup>
                  </Col>
                  <Col xs={4}>
                    <InputGroup>
                      <FormControl 
                      type="time" 
                      onChange={(e) => {this.setState({ ora_inizio: e.currentTarget.value})}}/>
                    </InputGroup>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col xs={6}>
                  <InputGroup>
                      <FormControl 
                        type="number"
                        placeholder="Quota Min"
                        onChange={(e) => { this.setState({ liquidita: e.currentTarget.value})}}
                      />
                    </InputGroup>
                  </Col>
                  <Col xs={6}>
                    <InputGroup>
                      <FormControl 
                        type="number"
                        placeholder="Quota Max"
                        onChange={(e) => { this.setState({ liquidita: e.currentTarget.value})}}
                      />
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
              <Col xs={4}>
                <h5 className="mb-5">Modalità Rimborso</h5>
                <InputGroup className="mb-3">
                  <FormControl 
                    type="number"
                    placeholder="Quota Max"
                    onChange={(e) => { this.setState({ liquidita: e.currentTarget.value})}}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl 
                    type="number"
                    placeholder="Quota Max"
                    onChange={(e) => { this.setState({ liquidita: e.currentTarget.value})}}
                    />
                </InputGroup>
                <Button>
                  Ordina per CR%
                </Button>
              </Col>
            </Row>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
                Applica Filtri
            </Button>
            <Button variant="danger" onClick={this.handleReset}>
                Reset
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default DutcherModal;