import React, { Component } from 'react';

// Book logos
import { bookLogos } from "../BookLogos/bookLogos"

// React Bootstrap
import { Row, Col, Button } from "react-bootstrap"

// Components
import MultiplaModal from './MultiplaModal.jsx';
import OddsMatcherFilters from "./OddsMatcherFilters"
import OddsMatcherTable from "./OddsMatcherTable"
import NavBar from "../Navbar/Navbar"
import BookmakersFilter from "./BookmakersFilter"
import NewTable from "./NewTable"
import OpenMatchModalButton from "./OpenMatchModalButton"

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
        updateOdds: false,
        showBookmakersFilterModal: false,
        openMatchModal: false
    }

    handleShow = () => {this.setState({show: true})}

    handleClose = () =>  {this.setState({show: false})}

    noShowBookmakersFilterModal = () => {this.setState({showBookmakersFilterModal: false})}

    // Fetching all available odds
    fetchOdds = async() => {
        try {
            this.setState({isLoading: true})
            const rawOdds = await fetch(url + "__cfduid=d42c3624a5e9c4a87cc7b36cda80fbb371605536749; cookieconsent_status=dismiss; _gid=GA1.2.1838765952.1605538205; flarum_remember=BnuNTpTOw7ToG2cmPUk5soqhesVwQOyVSsHkz5IS; wordpress_logged_in_fa686efef513bdb6e3e44099da671de0=ermander%7C1605727046%7CEmxdIp7plhJSnuKGsJ4d4BcaxWDUE2j5DloSF2vAEVU%7C21a30c7b964f4ae03098ea4210083bb18c543bf38c6064a9df27e860e091f340; _gat_gtag_UA_134094661_1=1; _ga_M6CJV63K6Z=GS1.1.1605562101.5.1.1605562112.49; _ga_SD5RC6H9GW=GS1.1.1605562101.5.1.1605562112.49; _ga=GA1.2.1816920760.1605441772")
            if(rawOdds.ok){
                const odds = await rawOdds.json()
                const slicedOdds = await odds.slice(0, 3500)
                const bookLogoss = bookLogos
                console.log(bookLogoss)
                // Calculating odds rating                
                for(let i=0; i<slicedOdds.length; i++){
                    const puntata = 100
                    const commission = 0.05
                    let lay_stake = (slicedOdds[i].quota * puntata ) / (slicedOdds[i].quota_banca - commission)
                    let rawRating = (1 - commission) * lay_stake
                    let rating = rawRating.toFixed(2)
                    slicedOdds[i].liquidita = parseFloat(slicedOdds[i].liquidita)
                    slicedOdds[i].rating = rating
                    slicedOdds[i].quota = parseFloat(slicedOdds[i].quota)
                    slicedOdds[i].quota_banca = parseFloat(slicedOdds[i].quota_banca)
                    slicedOdds[i].lastupdate = slicedOdds[i].lastupdate.split(" ")[1]
                    slicedOdds[i].button = <OpenMatchModalButton odd={slicedOdds[i]}/>
                    slicedOdds[i].bookLogo = <img className="table-data-image" src={bookLogos[slicedOdds[i].book]} alt={i.book1}/>
                    slicedOdds[i].exchangeLogo = <img className="table-data-image" src={bookLogoss[slicedOdds[i].book2]} alt={i.book2}/>
                    slicedOdds[i].evento = slicedOdds[i].home + " vs " + slicedOdds[i].away
                    slicedOdds[i].liquidità = slicedOdds[i].liquidita + "€"
                    slicedOdds[i].tableRating = slicedOdds[i].rating + "%"

                }
                slicedOdds.sort(function(a, b){return b.rating - a.rating})
                this.setState({odds: slicedOdds, isLoading: false})
            }        
        } catch (error) {
            console.log("fetchOdds function error: ", error)            
        }
    } 
    
    openMatchModal = () => {
        this.setState({openMatchModal: true})
    }

    setFilters = () => {
        let odds = this.state.odds
        const filters = this.state.filters

        // Filter based on min odd
        if(filters.quotaMin !== ""){
            console.log('controllo quotamin')
            odds = odds.filter((odd) => odd.quota > filters.quotaMin)
        }
        // Filter based on max odd
        if(filters.quotaMax !== ""){
            console.log('controllo quotamax')
            odds = odds.filter((odd) => odd.quota < filters.quotaMax
            )
        }
        // Filter based on min liquidity
        if(filters.liquidita !== ""){
            console.log('controllo liquidita', filters)
            odds = odds.filter((odd) => {
                console.log(odd.liquidita)
                return odd.liquidita > filters.liquidita
            })
            // odds = odds.filter((odd) => odd)
        }
        // Filter based on mercato
        if(filters.mercato !== ""){
            odds = odds.filter((odd) => odd.tipo === filters.mercato)
        }
        // Filter based on start date
        if(filters.dataInizio !== ""){            
            let filterDay = parseInt(filters.dataInizio.split("-")[0])
            let filterMonth = parseInt(filters.dataInizio.split("-")[1])
            let filterYear = parseInt(filters.dataInizio.split("-")[2].split(" ")[0])
            let oddDay = parseInt(odds.data.split("-"))
            console.log(oddDay)
            let oddMonth = parseInt(odds.data.split("-")[1])
            let oddYear = parseInt(odds.data.split("-")[0])

            if(filterYear > oddYear){
                odds = odds.filter(
                    (odd) => parseInt(odd.data.split("-")[0]) > parseInt(filters.dataInizio.split("-")[2].split(" ")[0])
                )
            }else if(filterYear === oddYear && filterMonth >= oddMonth){
                odds = odds.filter(
                    (odd) => (parseInt(odd.data.split("-")[0]) === parseInt(filters.dataInizio.split("-")[2].split(" ")[0])) && (parseInt(odd.data.split("-")[1]) >= parseInt(filters.dataInizio.split("-")[1]))
                )
            }else if(filterYear === oddYear && filterMonth === oddMonth && filterDay >= oddDay){
                odds = odds.filter(
                    (odd) => (parseInt(odd.data.split("-")[0]) === parseInt(filters.dataInizio.split("-")[2].split(" ")[0])) && (parseInt(odd.data.split("-")[1]) >= parseInt(filters.dataInizio.split("-")[1]) && (parseInt(odd.data.split("-")[2])) >= parseInt(filters.dataInizio.split("-")[0]))
                )
            }
        }
        // Filter based on start time
        // Filter based on end date
        // Filter based on end time


        console.log(odds)
        this.setState({odds: odds})
        console.log(odds[0])
    }
    
    
    componentDidMount = () =>{
        this.fetchOdds()
    }

    render() {
        return (
            <>
                <NavBar />
                {
                /*<BookmakersFilter
                    show={this.state.showBookmakersFilterModal}
                    noShow={this.noShowBookmakersFilterModal}
                />
                */}
                <div 
                    style={{
                        backgroundColor: "#35454d",
                        textAlign: "center", 
                        fontSize: "50px",
                        marginBottom: "3vh",
                        color: "#babfc2"
                        }}>
                        Odds - Matcher
                </div>
                <Row className="no-gutters">
                    <Col className="ml-0 pl-3" style={{marginLeft: "0"}} xs={12}>
                        <OddsMatcherFilters
                            setFiltersToFather={(e)=> this.setState({filters: e}, this.setFilters)}
                        />
                        
                        <Button
                            className="mr-3"
                            variant="light"
                            onClick={(e)=>this.setState({showBookmakersFilterModal: true})}>Seleziona Bookmakers</Button>
                        <MultiplaModal />
                        <Button
                            className="ml-3"
                            variant="danger"
                            onClick={this.fetchOdds}>
                                Reset
                        </Button>
                    </Col>
                </Row>
                <Row className="no-gutters">
                    <Col xs={12}>                        
                        <NewTable
                            isLoading={this.state.isLoading}
                            odds={this.state.odds}
                            filters={this.state.filter}
                        />
                    </Col>
                </Row>
                            
            </>
        );
    }
}

export default OddsMatcher;