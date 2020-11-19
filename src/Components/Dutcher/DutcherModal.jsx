import { Modal, Button, Row, Col, InputGroup, FormControl } from "react-bootstrap"
import React, { Component } from 'react';

class DutcherModal extends Component {

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
                          onChange={(e) => this.setState({allSports: e.currentTarget.checked})}/>
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
                          onChange={(e) => {this.setState({soccer: e.currentTarget.checked })}}
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
                          onChange={(e) => {this.setState({ tennis: e.currentTarget.checked })}}
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
                          onChange={(e) => {this.setState({ basket: e.currentTarget.checked })}}
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
                        onChange={(e) => {this.setState({ allMarkets: e.currentTarget.checked })}}
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
                          checked={this.state.doubleChange}
                          onChange={(e) => {this.setState({doubleChange: e.currentTarget.checked })}}  
                        />
                      </InputGroup.Prepend>
                      <FormControl 
                      aria-label="Text input with checkbox" 
                      placeholder="DC" 
                      value="DC"                    
                      />
                    </InputGroup>

                    
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox 
                          aria-label="Checkbox for following text input" 
                          checked={this.state.underOver}
                          onChange={(e) => {this.setState({ underOver: e.currentTarget.checked })}}/>
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
                          onChange={(e) => {this.setState({ goalNoGoal: e.currentTarget.checked })}}  
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
                          onChange={(e) => {this.setState({ headToHead: e.currentTarget.checked })}}/>
                      </InputGroup.Prepend>
                      <FormControl 
                      aria-label="Text input with checkbox" 
                      placeholder="TT"
                      value="TT"/>
                    </InputGroup>
                    
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Checkbox 
                          aria-label="Checkbox for following text input" 
                          checked={this.state.specials}
                          onChange={(e) => {this.setState({ specials: e.currentTarget.checked })}}/>
                      </InputGroup.Prepend>
                      <FormControl 
                        aria-label="Text input with checkbox" 
                        placeholder="Specials"
                        value="Kick Y/N"/>
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
                    <strong>Quote</strong>
                  </h5>
                  <Row className="mt-5">
                    <Col xs={12}>
                      <p>Min Odd:</p>
                    </Col>
                    <Row>
                    <Col xs={12}>
                      <InputGroup>
                        <FormControl 
                        type="text" 
                        placeholder="Min" 
                        value={this.state.quotaMin}
                        onChange={(e) => {this.setState({quotaMin: e.currentTarget.value})}}
                        />
                      </InputGroup>
                    </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <p className="mt-5">Max Odd:</p>
                        <InputGroup>
                          <FormControl 
                          type="text" 
                          placeholder="Min" 
                          value={this.state.quotaMax}
                          onChange={(e) => {this.setState({quotaMax: e.currentTarget.value})}}
                          />
                        </InputGroup>
                      </Col>
                    </Row>
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
                      <InputGroup>
                        <FormControl 
                        type="number" 
                        placeholder="Stake €" 
                        onChange={(e) => {this.setState({ stakeRimborso: e.currentTarget.value })}}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col xs={12}>
                    <p>Refund:</p>
                      <InputGroup>
                        <FormControl 
                        type="number" 
                        placeholder="Refund €"
                        onChange={(e) => {this.setState({ stakeBonusRimborso: e.currentTarget.value })}}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} className="mt-3" style={{textAlign: "center"}}>
                      <Button size="sm" variant="warning" >
                        Sort by CR%
                      </Button>
                    </Col>
                  </Row>
                </Col>               

              </Row>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center" style={{backgroundColor: "#edf1f2", border: "none"}}>
              <Row className="justify-content-center">
                <Col xs={12} style={{textAlign: "center", backgroundColor: "#edf1f2"}} className="d-flex justify-content-center">
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
                      speciali: false,
                      dataInizio: "",
                      oraInizio: "",
                      dataFine: "",
                      oraFine: "",
                      quotaMin: "",
                      quotaMax: "",
                      stakeRimborso: "",
                      stakeBonusRimborso: ""
                    },() => this.props.reloadOdds())}
                    >
                    Reset
                  </Button>
                </Col>
              </Row>

            </Modal.Footer>
          </Modal>
        </div>
    );
  }
}


export default DutcherModal;