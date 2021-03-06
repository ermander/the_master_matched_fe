import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import { bookLogos } from "../BookLogos/bookLogos"
import TrimatcherMatchModal from "./TrimatcherMatchModal"
import "./trimatcher.css"
const url = "https://jobista.altervista.org/api_trimatcher.php?cookies=cookie: "

class OddsmatcherTable extends Component {
    state={
        odds: [],
        isLoading: true,
        show: false,
        modalOdd: {}
    }

    // Fetching all available odds
    fetchOdds = async() => {
        try {
            const rawOdds = await fetch(url + "__cfduid=d9050ac35647f6e46c45850e16d397c0f1603375528; _gid=GA1.2.436497535.1603302989; _gat_gtag_UA_134094661_1=1; flarum_remember=XUQMSpmEQTkz78Emf3dOsHTIyvsp0AbgOk2XxqE5; wordpress_logged_in_fa686efef513bdb6e3e44099da671de0=ermander%7C1603548348%7CLWmz99k7SgzxDz8yuiCDSbJdU8ApHtcLdVro5pAhESN%7C69f816ce63bf134a979e9fbd1753b3e7f03de2377093e6bf1f5d96b8659f2b49; _gat_gtag_UA_134094661_2=1; _ga_M6CJV63K6Z=GS1.1.1603302988.1.1.1603303012.36; _ga_SD5RC6H9GW=GS1.1.1603302988.1.1.1603303012.36; _ga=GA1.2.1410866800.1603302989")
            console.log(rawOdds)
            if(rawOdds.ok){
                const odds = await rawOdds.json()
                console.log(odds.data[1])
                this.setState({
                    odds: odds.data,
                    isLoading: false
                })
            }        
        } catch (error) {
            console.log("fetchOdds function error: ", error)            
        }
    }

    handleOpenModalMatch = (element) => {
        this.setState({ 
            modalOdd: element,
            show: true
        })
        console.log(element)
    }

    handleCloseModalMatch = () => {
        this.setState({ show: false })
    }


    componentDidMount(){
        this.fetchOdds()
    }

    render() {
        return (
            <>
            <TrimatcherMatchModal 
                show={this.state.show}
                noShow={this.handleCloseModalMatch}
                odd={this.state.modalOdd}
            />
            <div>
                <Table striped bordered hover className="odds-table" style={{width: "95vw", margin: "5vh"}}>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Ora</th>
                            <th>Torneo</th>
                            <th>Evento</th>
                            <th>1</th>
                            <th>Book</th>
                            <th>X</th>
                            <th>Book</th>
                            <th>2</th>
                            <th>Book</th>
                            <th>ROI</th>
                            <th>Aggior.</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.isLoading 
                            ?
                            (
                                <tr>
                                    <td>LOADING</td>
                                    <td>LOADING</td>
                                    <td>LOADING</td>
                                    <td>LOADING</td>
                                    <td>LOADING</td>
                                    <td>LOADING</td>
                                    <td>LOADING</td>
                                    <td>LOADING</td>
                                    <td>LOADING</td>
                                    <td>LOADING</td>
                                    <td>LOADING</td>
                                    <td></td>
                                </tr>
                            )
                            :
                            (
                                this.state.odds.map((element, i) => {
                                    return (
                                        <tr key={i}>
                                        <td>{element.data}</td>
                                        <td>{element.ora}</td>
                                        <td>{element.campionato}</td>
                                        <td>{element.home} vs {element.away}</td>
                                        <td>{element.a}</td>
                                        <td>
                                        <img style={{width: "100px", height: "40px"}} src={bookLogos[element.book]} alt={element.book}/>
                                        </td>
                                        <td>{element.b}</td>
                                        <td>
                                        <img style={{width: "100px", height: "40px"}} src={bookLogos[element.book2]} alt={element.book}/>
                                        </td>
                                        <td>{element.c}</td>
                                        <td>
                                        <img style={{width: "100px", height: "40px"}} src={bookLogos[element.book3]} alt={element.book}/>
                                        </td>
                                        <td>{element.rating}%</td>                                        
                                        <td>{element.lastupdate}</td>
                                        <td>
                                            <Button onClick={ () => this.handleOpenModalMatch(element)}>
                                                <FontAwesomeIcon icon={faCalculator} />                                                
                                            </Button>  
                                        </td>
                                        </tr>
                                    )
                                })
                            )
                        }
                    </tbody>
                </Table>                
            </div>
            </>
        );
    }
}

export default OddsmatcherTable;