import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import OddsMatcherMatchModal from "./OddsMatcherMatchModal"
import "./oddsmatcher.css"
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
        rating: ""
    }

    handleOpenModalMatch = () => {
        this.
        this.setState({ show: true })
    }

    handleCloseModalMatch = () => {
        this.setState({ show: false })
    }


    // Fetching all available odds
    fetchOdds = async() => {
        try {
            const rawOdds = await fetch(url + "__cfduid=defe77d8abaedbfec9c603cfea1c9ad041601474329; _ga=GA1.2.1869698237.1601474343; _gid=GA1.2.596859381.1601474343; cookieconsent_status=dismiss; flarum_remember=VUYFDw9crKkkts88AqiIZcj6n4IT7NN5g0wU07sZ; wordpress_logged_in_fa686efef513bdb6e3e44099da671de0=ermander%7C1601647165%7C9cvFPRYnAZELAhn55HcHot0t6uFCIH6Tf0CiBIWOznB%7C3a9ba8d41de25a7cb99a27e4520e85ad5d2b40729874768ca55b6072127e1296; _gat_gtag_UA_134094661_2=1")
            console.log(rawOdds)
            if(rawOdds.ok){
                const odds = await rawOdds.json()
                console.log(odds)
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
                slicedOdds.sort(function(a, b){
                    return b.rating -a.rating
                })
                this.setState({
                    odds: slicedOdds,
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
            <OddsMatcherMatchModal 
                show={this.state.show}
                noShow={this.handleCloseModalMatch}
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
                            <th>Liquidità</th>
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
                                            <td>{element.data}</td>
                                            <td>{element.ora}</td>
                                            <td>{element.campionato}</td>
                                            <td>{element.home} vs {element.away}</td>
                                            <td>{element.tipo}</td>
                                            <td>{element.book}</td>
                                            <td>{element.a}</td>
                                            <td>{element.quota}</td>
                                            <td>{element.quota_banca}</td>
                                            <td>{element.liquidita}€</td>
                                            <td>{element.book2}</td> {/* Image dim: 80px horizontally, 20px verticaly */}
                                            <td>{element.rating}%</td>
                                            <td>{element.lastupdate}</td>
                                            <td>
                                                <Button
                                                    onClick={this.handleOpenModalMatch}
                                                >
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