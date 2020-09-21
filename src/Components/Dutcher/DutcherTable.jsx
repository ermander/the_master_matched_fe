import React, { Component } from 'react';
import { Table } from "react-bootstrap"
const url = "https://jobista.altervista.org/api_dutcher.php?length=5000&cookies=cookie: __cfduid=d8e4bb509f0d3879c7e2ca4839e1ffd211600674364; _ga=GA1.2.1123265171.1600674365; _gid=GA1.2.1151311242.1600674365; cookieconsent_status=dismiss; flarum_remember=ePGRjJDPZIbGEQ64fpxWiIsuAQLnRRr556LjwSXE; wordpress_logged_in_fa686efef513bdb6e3e44099da671de0=ermander%7C1600854352%7CP85HhZJgzur6NtPKr4SDppB8DNGtGIig2e6bNdcpNAS%7C3219e39bf633569966fe0ed05ac145c9e53ec04215e68e35808f8132c6b768e7; _gat_gtag_UA_134094661_1=1"

class OddsmatcherTable extends Component {
    state={
        odds: [],
        isLoading: true
    }

    // Fetching all available odds
    fetchOdds = async() => {
        try {
            const rawOdds = await fetch(url)
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
                                </tr>
                            )
                            :
                            (
                                this.state.odds.data.map(element => {
                                    return (
                                        <tr>
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