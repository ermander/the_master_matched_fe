import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
const url = "https://jobista.altervista.org/api_dutcher.php?length=5000&cookies=cookie: "

class OddsmatcherTable extends Component {
    state={
        odds: [],
        isLoading: true,
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
        this.setState({ show: true })
    }

    // Fetching all available odds
    fetchOdds = async() => {
        try {
            const rawOdds = await fetch(url + "__cfduid=da38a847866851e2992ea38d654fe24a21601550565; _ga=GA1.2.932496912.1601550570; _gid=GA1.2.1631250188.1601550570; cookieconsent_status=dismiss; flarum_remember=SjZuPQ1NLe0CVkc2gTpOeT4EDSrvgtjwVejTKoFj; wordpress_logged_in_fa686efef513bdb6e3e44099da671de0=ermander%7C1601723394%7CVvvk6IHsCRAjZyNXq0KRZgI3kX4CHCQBJs0vYDuQ2xN%7Cca976d207360ce0c3ae58eb71f34d9113efac8143e21fc7ef6f59ecb3f8ee87e; _gat_gtag_UA_134094661_1=1")
            console.log(rawOdds)
            if(rawOdds.ok){
                const odds = await rawOdds.json()
                console.log(odds)
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
                                        <td>{element.book}</td>
                                        <td>{element.a}</td>
                                        <td>{element.yes}</td>
                                        <td>{element.no}</td>
                                        <td>{element.book2}</td>
                                        <td>{element.rating}%</td>
                                        <td>{element.lastupdate}</td>
                                        <td>
                                            <Button
                                                onClick={this.handleOpenModalMatch}
                                                matchInfo={element}
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
        );
    }
}

export default OddsmatcherTable;