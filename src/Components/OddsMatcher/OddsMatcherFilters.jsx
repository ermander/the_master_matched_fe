import { Modal, Button, Row, Col, InputGroup, FormControl } from "react-bootstrap"

import React, { Component } from 'react';

class OddsMatcherModal extends Component {

  state = {
    ...this.props.filtersStatus
  }

  handleClose = () => { this.setState({ show: false })}

  handleShow = () => { this.setState({ show: true })}

  render() {
    return (
         <div style={{display: "inline-block", marginRight:"1rem", paddingLeft: "0important!"}}>
          <Button variant="light" onClick={this.handleShow} className="ml-0">
            Search Options
          </Button>

          <Modal show={this.state.show} onHide={this.handleClose} >
            <Modal.Body className="oddsmatcher-modal">
              <Row className="my-3">

                {/* FILTRI PER SPORT */}
                <Col xs={2}>
                  <h5>
                    <strong>Filter by Sport</strong>
                  </h5>
                  <Row className="mt-5"> 
                    <Col>
                    
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox 
                          aria-label="Checkbox for following text input" 
                          checked={this.state.allSports}
                          onChange={(e) => this.setState({
                            allSports: e.currentTarget.checked,
                            soccer: false,
                            tennis: false,
                            basket: false
                          })}/>
                      </InputGroup.Prepend>
                      <FormControl 
                        aria-label="Text input with checkbox" 
                        placeholder="All" 
                        value="All"
                      />
                    </InputGroup>

                    
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox 
                          aria-label="Checkbox for following text input"
                          checked={this.state.soccer}
                          onChange={(e) => {this.setState({
                            soccer: e.currentTarget.checked,
                            allSports: false
                          })}}
                         />
                      </InputGroup.Prepend>
                      <FormControl 
                      aria-label="Text input with checkbox" 
                      placeholder="SOCCER" 
                      value="SOCCER"
                      />
                    </InputGroup>

                    
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox 
                          aria-label="Checkbox for following text input" 
                          checked={this.state.tennis}
                          onChange={(e) => {this.setState({ 
                            tennis: e.currentTarget.checked,
                            allSports: false
                          })}}
                        />
                      </InputGroup.Prepend>
                      <FormControl 
                      aria-label="Text input with checkbox" 
                      placeholder="TENNIS"
                      value="TENNIS"
                      />
                    </InputGroup>

                    
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox 
                          aria-label="Checkbox for following text input"
                          checked={this.state.basket}
                          onChange={(e) => {this.setState({ 
                            basket: e.currentTarget.checked,
                            allSports: false
                          })}}
                        />
                      </InputGroup.Prepend>
                      <FormControl 
                      aria-label="Text input with checkbox" 
                      placeholder="BASKET "
                      value="BASKET"/>
                    </InputGroup>

                    </Col>
                  </Row>
                </Col>

                {/* FILTRI PER MERCATO */}
                <Col xs={2}>
                  <h5>
                    <strong>Filter by Market</strong>
                  </h5>
                  <Row className="mt-5"> 
                    <Col>                    
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox 
                        aria-label="Checkbox for following text input" 
                        checked={this.state.allMarkets}
                        onChange={(e) => {this.setState({ 
                          allMarkets: e.currentTarget.checked,
                          underOver: false,
                          goalNoGoal: false,
                          homeTieAway: false 
                        })}}
                      />
                      </InputGroup.Prepend>
                      <FormControl 
                        aria-label="Text input with checkbox" 
                        placeholder="All" 
                        value="All"
                      />
                    </InputGroup>

                    
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox 
                          aria-label="Checkbox for following text input" 
                          checked={this.state.homeTieAway}
                          onChange={(e) => {this.setState({
                            homeTieAway: e.currentTarget.checked,
                            allMarkets: false
                          })}}  
                        />
                      </InputGroup.Prepend>
                      <FormControl 
                      aria-label="Text input with checkbox" 
                      placeholder="1X2" 
                      value="1X2"                    
                      />
                    </InputGroup>

                    
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox 
                          aria-label="Checkbox for following text input" 
                          checked={this.state.underOver}
                          onChange={(e) => {this.setState({ 
                            underOver: e.currentTarget.checked,
                            allMarkets: false
                            })}}/>
                      </InputGroup.Prepend>
                      <FormControl 
                      aria-label="Text input with checkbox" 
                      placeholder="U/O"
                      value="U/O"
                      />
                    </InputGroup>

                    
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox 
                          aria-label="Checkbox for following text input" 
                          checked={this.state.goalNoGoal}
                          onChange={(e) => {this.setState({ 
                            goalNoGoal: e.currentTarget.checked,
                            allMarkets: false,
                          })}}  
                        />
                      </InputGroup.Prepend>
                      <FormControl 
                      aria-label="Text input with checkbox" 
                      placeholder="GG/NG"
                      value="GG/NG"                    
                      />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox 
                          aria-label="Checkbox for following text input" 
                          checked={this.state.headToHead}
                          onChange={(e) => {this.setState({ 
                            headToHead: e.currentTarget.checked,
                            allMarkets: false
                          })}}/>
                      </InputGroup.Prepend>
                      <FormControl 
                      aria-label="Text input with checkbox" 
                      placeholder="TT"
                      value="TT"/>
                    </InputGroup>

                    </Col>
                  </Row>
                </Col>

                {/* FILTRI PER DATA */}
                <Col xs={4}>
                <h5>
                  <strong>Filter by Date</strong>
                </h5>
                <Row className="mt-5">
                  <Col xs={6}>
                    <p>Start date:</p>
                    <InputGroup>
                      <FormControl 
                      type="date"
                      onChange={(e) => {this.setState({ dataInizio: e.currentTarget.value})}}/>
                    </InputGroup>
                  </Col>
                  <Col xs={6}>
                    <p>Start time:</p>
                    <InputGroup>
                      <FormControl 
                      type="time" 
                      onChange={(e) => {this.setState({ oraInizio: e.currentTarget.value})}}/>
                    </InputGroup>
                  </Col>
                </Row>

                <Row className="mt-5">
                  <Col xs={6}>
                    <p>End date:</p>
                    <InputGroup>
                      <FormControl 
                      type="date" 
                      onChange={(e) => {this.setState({ dataFine: e.currentTarget.value})}}/>
                    </InputGroup>
                  </Col>
                  <Col xs={6}>
                    <p>End time:</p>
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
                  <h5>
                    <strong>Liquidity and Quote</strong>
                  </h5>
                  <Row className="mt-3">
                    <Col xs={12}>
                      <p>Liquidity:</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <InputGroup>
                        <FormControl 
                        type="text"
                        placeholder="Min €"
                        value={this.state.liquidita}
                        onChange={(e) => { this.setState({ liquidita: e.currentTarget.value})}}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col xs={12}>
                      <p>Quote:</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6}>
                      <InputGroup>
                        <FormControl 
                        type="text" 
                        placeholder="Min" 
                        value={this.state.quotaMin}
                        onChange={(e) => {this.setState({quotaMin: e.currentTarget.value})}}
                        />
                      </InputGroup>
                    </Col>
                    <Col xs={6}>
                      <InputGroup>
                        <FormControl 
                        type="text" 
                        placeholder="Max" 
                        value={this.state.quotaMax}
                        onChange={(e) => {this.setState({quotaMax: e.currentTarget.value})}}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </Col>
                

                {/* FILTRI PER RATING RIMBORSO */}
                <Col xs={2}>
                  <h5>
                    <strong>Refund Method</strong>
                  </h5>
                  <Row className="mt-5">
                    <Col xs={12}>
                      <p>Stake:</p>
                      <InputGroup className="mb-3">
                        <FormControl 
                        type="number" 
                        placeholder="Stake €" 
                        onChange={(e) => {this.setState({ stakeRimborso: e.currentTarget.value })}}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                    <p>Refund:</p>
                      <InputGroup className="mb-3">
                        <FormControl 
                        type="number" 
                        placeholder="Refund €"
                        onChange={(e) => {this.setState({ stakeBonusRimborso: e.currentTarget.value })}}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Button>
                        Sort by CR%
                      </Button>
                    </Col>
                  </Row>
                </Col>
                

              </Row>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: "#edf1f2", borderTop: "none"}}>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={()=>{
                this.props.setFiltersToFather({...this.state})
                this.handleClose()}
                }>
                Apply Filters
              </Button>
              <Button variant="danger" onClick={ () => this.setState({
                  show: true,
                  allSports: false,
                  soccer: false,
                  tennis: false,
                  basket: false,
                  allMarkets: false,
                  homeTieAway: false,
                  underOver: false,
                  goalNoGoal: false,
                  headToHead: false,
                  dataInizio: "",
                  oraInizio: "",
                  dataFine: "",
                  oraFine: "",
                  liquidita: "",
                  quotaMin: "",
                  quotaMax: "",
                  stakeRimborso: "",
                  stakeBonusRimborso: ""
                },() => this.props.reloadOdds())}
                >
                Reset
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    );
  }
}

export default OddsMatcherModal;