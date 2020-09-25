import React, { Component } from 'react';
import { Table } from "react-bootstrap"
import "./oddsmatcher.css"
const url = "https://jobista.altervista.org/api.php?cookies=cookie: "


class OddsmatcherTable extends Component {
    state={
        odds: [],
        isLoading: true
    }

    // Fetching all available odds
    fetchOdds = async() => {
        try {
            const rawOdds = await fetch(url + "__cfduid=df5bb2c8d12ddb0c2e8ed2afbd224ffee1601038438; _ga=GA1.2.2129195312.1601038440; _gid=GA1.2.1857073251.1601038440; cookieconsent_status=dismiss; _gat_gtag_UA_134094661_1=1; flarum_remember=SjtP089CQ8P4LAuGpMqnfrfUpTHpzrflUJMu7fUu; wordpress_logged_in_fa686efef513bdb6e3e44099da671de0=ermander%7C1601227982%7CUewglddMbQL8LfVNmN6mOQ7GItGqvOZ1h36wg0Vl3lQ%7C9644728e33b55705b82cd77f13f8d3487cd58ae2385bc212d20ead7a10fe3a2e")
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