import React, { Component } from 'react';

// React Bootstrap
import { Row, Col, Button } from "react-bootstrap"

// Components
import MultiplaModal from './MultiplaModal.jsx';
import OddsMatcherFilters from "./OddsMatcherFilters"
import OddsMatcherTable from "./OddsMatcherTable"
import NavBar from "../Navbar/Navbar"

// CSS
import "./oddsmatcher.css"

// API
const url = "https://jobista.altervista.org/api.php?cookies=cookie: "

class OddsMatcher extends Component {

    state={
        show: false,
        filters: {},
        odds: [],
        isLoading: true,
        updateOdds: false
    }

    handleShow = () => {this.setState({show: true})}

    handleClose = () =>  {this.setState({show: false})}

    // Fetching all available odds
    fetchOdds = async() => {
        try {
            this.setState({isLoading: true})
            const rawOdds = await fetch(url + "__cfduid=dbeeb90a4a1779bd47aa4355c0f7af10d1605144026; _gid=GA1.2.671245364.1605144031; cookieconsent_status=dismiss; flarum_remember=XjOLAn1D4lxfosEBKCVS2sh6120zm6cFR9TkDa4Y; wordpress_logged_in_fa686efef513bdb6e3e44099da671de0=ermander%7C1605316838%7CLZzChAXrNHv2ktX8uBjHQn1V2wTOslXGeiZvS9pSbYo%7Cfe73b87f96035023e5a1e873945dd9125312fb1b8982f1e98c945b93363d650d; _ga_M6CJV63K6Z=GS1.1.1605144030.1.1.1605144955.59; _ga_SD5RC6H9GW=GS1.1.1605144030.1.1.1605144955.59; _ga=GA1.2.1294047239.1605144031; _gat_gtag_UA_134094661_1=1")
            if(rawOdds.ok){
                const odds = await rawOdds.json()
                const slicedOdds = await odds.slice(0, 3500)
                // Calculating odds rating                
                for(let i=0; i<slicedOdds.length; i++){
                    const puntata = 100
                    const commission = 0.05
                    let lay_stake = (slicedOdds[i].quota * puntata ) / (slicedOdds[i].quota_banca - commission)
                    let rawRating = (1 - commission) * lay_stake
                    let rating = rawRating.toFixed(2)
                    slicedOdds[i].rating = rating
                    slicedOdds[i].quota = parseFloat(slicedOdds[i].quota)
                    slicedOdds[i].quota_banca = parseFloat(slicedOdds[i].quota_banca)
                }
                slicedOdds.sort(function(a, b){return b.rating - a.rating})
                this.setState({odds: slicedOdds, isLoading: false})
            }        
        } catch (error) {
            console.log("fetchOdds function error: ", error)            
        }
    } 

    setFilters = () => {
        let odds = this.state.odds
        const filters = this.state.filters

        // Filter based on min odd
        if(filters.quotaMin !== ""){
            odds = odds.filter((odd) => odd.quota > filters.quotaMin)
        }
        // Filter based on max odd
        if(filters.quotaMax !== ""){
            odds = odds.filter((odd) => odd.quota < filters.quotaMax)
        }
        // Filter based on min liquidity
        if(filters.liquidita !== ""){
            odds = odds.filter((odd) => parseFloat(odd.liquidita) > filters.liquidita)
        }
        // Filter based on sport
        // Filter based on mercato
        // Filter based on start date
        // Filter based on start time
        // Filter based on end date
        // Filter based on end time
        

        console.log(odds)
        this.setState({odds: odds})
    }
    
    
    componentDidMount = () =>{
        this.fetchOdds()
    }

    render() {
        return (
            <>
                <NavBar />
                <div 
                    style={{
                        color: "#343a40", 
                        fontWeight: "bold", 
                        textAlign: "center", 
                        fontSize: "50px", 
                        marginTop: "3vh", 
                        marginBottom: "3vh"
                        }}>
                        ODDSMATCHER
                </div>
                <Row>
                    <Col className="ml-5" style={{marginLeft: "0"}}>
                        <OddsMatcherFilters
                            setFiltersToFather={(e)=> this.setState({filters: e}, this.setFilters)}
                        />
                        <MultiplaModal />
                        <Button
                            className="ml-3"
                            variant="danger"
                            onClick={this.fetchOdds}>Reset</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <OddsMatcherTable 
                            filters={this.state.filters}
                            odds={this.state.odds}
                            isLoading={this.state.isLoading}
                        />
                    </Col>
                </Row>
                            
            </>
        );
    }
}

export default OddsMatcher;