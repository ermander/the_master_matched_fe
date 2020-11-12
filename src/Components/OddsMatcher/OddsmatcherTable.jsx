import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import OddsMatcherMatchModal from "./OddsMatcherMatchModal"
import "./oddsmatcher.css"
import { bookLogos } from "../BookLogos/bookLogos"
const url = "https://jobista.altervista.org/api.php?cookies=cookie: "

class OddsmatcherTable extends Component {
    state={
        odds: [],
        isLoading: true,
        show: false,
        data: "",
        ora: "",
        torneo: "",
        casa: "",
        ospite: "",
        mercato: "",
        book: "",
        punta: "",
        banca: "",
        exchange: "",
        rating: "",
        modalOdd: {},
        activeBookmakers: [],
    }

    handleOpenModalMatch = (element) => {
        this.setState({modalOdd: element,show: true})
    }

    handleCloseModalMatch = () => {this.setState({ show: false })}

    // Fetching all available odds
    fetchOdds = async() => {
        try {
            const rawOdds = await fetch(url + "__cfduid=dbeeb90a4a1779bd47aa4355c0f7af10d1605144026; _gid=GA1.2.671245364.1605144031; cookieconsent_status=dismiss; flarum_remember=XjOLAn1D4lxfosEBKCVS2sh6120zm6cFR9TkDa4Y; wordpress_logged_in_fa686efef513bdb6e3e44099da671de0=ermander%7C1605316838%7CLZzChAXrNHv2ktX8uBjHQn1V2wTOslXGeiZvS9pSbYo%7Cfe73b87f96035023e5a1e873945dd9125312fb1b8982f1e98c945b93363d650d; _ga_M6CJV63K6Z=GS1.1.1605144030.1.1.1605144955.59; _ga_SD5RC6H9GW=GS1.1.1605144030.1.1.1605144955.59; _ga=GA1.2.1294047239.1605144031; _gat_gtag_UA_134094661_1=1")
            if(rawOdds.ok){
                const odds = await rawOdds.json()
                const slicedOdds = await odds.slice(0, 2000)
                // Calculating odds rating                
                for(let i=0; i<slicedOdds.length; i++){
                    const puntata = 100
                    const commission = 0.05
                    let lay_stake = (slicedOdds[i].quota * puntata ) / (slicedOdds[i].quota_banca - commission)
                    let rawRating = (1 - commission) * lay_stake
                    let rating = rawRating.toFixed(2)
                    slicedOdds[i].rating = rating     
                }
                slicedOdds.sort(function(a, b){return b.rating -a.rating})
                this.setState({odds: slicedOdds,isLoading: false})
            }        
        } catch (error) {
            console.log("fetchOdds function error: ", error)            
        }
    }

    componentDidMount = () =>{
        this.fetchOdds()
    }

    render() {
        return (
            <>
            <OddsMatcherMatchModal 
                show={this.state.show}
                noShow={this.handleCloseModalMatch}
                odd={this.state.modalOdd}
                activeBookmakers={this.state.activeBookmakers}
            />
            
            <div>
                <Table striped bordered hover className="odds-table" style={{width: "95vw", margin: "5vh"}}>
                    <thead className="table-data">
                        <tr>
                            <th>Data</th>
                            <th>Ora</th>
                            <th>Torneo</th>
                            <th>Evento</th>
                            <th>Mercato</th>
                            <th>Book</th>
                            <th>Tipo</th>
                            <th>Punta</th>
                            <th>Banca</th>
                            <th>Liquidità</th>
                            <th>Exchange</th>
                            <th>Rating</th>
                            <th colSpan={2}>Aggior.</th>
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
                                    <td>98%</td>
                                    <td>LOADING</td>
                                </tr>
                            )
                            :
                            (
                                this.state.odds.map((element, i) => {
                                    return (
                                        <tr key={i}>
                                            <td className="table-data">{element.data}</td>
                                            <td className="table-data">{element.ora}</td>
                                            <td className="table-data">{element.campionato}</td>
                                            <td className="table-data">{element.home} vs {element.away}</td>
                                            <td className="table-data">{element.tipo}</td>
                                            <td className="table-data">
                                                <img className="table-data-image" src={bookLogos[element.book]} alt={element.book}/>
                                            </td>
                                            <td className="table-data">{element.a}</td>
                                            <td className="table-data">{element.quota}</td>
                                            <td className="table-data">{element.quota_banca}</td>
                                            <td className="table-data">{element.liquidita}€</td>
                                            <td className="table-data">
                                                <img className="table-data-image" src={bookLogos[element.book2]} alt={element.book2}/>
                                            </td> 
                                            <td className="table-data">{element.rating}%</td>
                                            <td className="table-data">{element.lastupdate}</td>
                                            <td className="table-data">
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