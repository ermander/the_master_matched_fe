import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import { bookLogos } from "../BookLogos/bookLogos"
import DutcherMatchModal from "./DutcherMatchModal"
const url = "https://jobista.altervista.org/api_dutcher.php?length=5000&cookies=cookie: "


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
        modalOdd: {}
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

    // Fetching all available odds
    fetchOdds = async() => {
        try {
            const rawOdds = await fetch(url + "__cfduid=dc49b847e8bd8c0cd3367238c203fa8011601884189; _ga=GA1.2.622160755.1601884191; _gid=GA1.2.1468601523.1601884191; _gat_gtag_UA_134094661_1=1; flarum_remember=Pb1QW6dMIuspt7FrNssMLuq6C0PpuUqaWxUiuyRR; wordpress_logged_in_fa686efef513bdb6e3e44099da671de0=ermander%7C1602056995%7C90IF5jwcan4nNB1uuGeyORXtUUOgiilIqV6mhlFRorN%7Cca88cf20441f0a85b76a12c9a8ffeecbff961ee26a59d11f81ee2fcca25d38ae")
            // console.log(rawOdds)
            if(rawOdds.ok){
                const odds = await rawOdds.json()
                this.setState({
                    odds: odds,
                    isLoading: false
                })
            }        
        } catch (error) {
            console.log("fetchOdds function error: ", error)            
        }
    }

    componentDidMount(){
        this.fetchOdds()
    }

    render() {
        return (
            <>
            <DutcherMatchModal 
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
                            <th>Mercato</th>
                            <th>Book</th>
                            <th>Tipo</th>
                            <th>Punta</th>
                            <th>Banca</th>
                            <th>Exchange</th>
                            <th>Rating</th>
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
                                    <td>LOADING%</td>
                                    <td>LOADING</td>
                                    <td></td>
                                </tr>
                            )
                            :
                            (
                                this.state.odds.data.map((element, i) => {
                                    return (                                       
                                        <tr key={i}>
                                        <td>{element.data}</td>
                                        <td>{element.ora}</td>
                                        <td>{element.campionato}</td>
                                        <td>{element.home} vs {element.away}</td>
                                        <td>{element.tipo}</td>
                                        <td>
                                            <img style={{width: "100px", height: "40px"}} src={bookLogos[element.book]}/>
                                        </td>
                                        <td>{element.a}</td>
                                        <td>{element.yes}</td>
                                        <td>{element.no}</td>
                                        <td>
                                            <img style={{width: "90px", height: "40px"}} src={bookLogos[element.book2]}/>
                                        </td>
                                        <td>{element.rating}%</td>
                                        <td>{element.lastupdate}</td>
                                        <td>
                                            <Button onClick={ () => this.handleOpenModalMatch(element)}>
                                                <FontAwesomeIcon icon={faCalculator}/>
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