import React, { Component } from 'react';
import { Table } from "react-bootstrap"
const url = "https://jobista.altervista.org/api.php?cookies=cookie: __cfduid=d52928491d5b88ccba3955c1963960c561600528918; _ga=GA1.2.19869112.1600528921; _gid=GA1.2.1402304421.1600528921; cookieconsent_status=dismiss; _gat_gtag_UA_134094661_1=1; flarum_remember=vkEccjSqof7XaPBTlzepJBQmrZ9dDU5tXQ7mDu5G; wordpress_logged_in_fa686efef513bdb6e3e44099da671de0=ermander%7C1600704132%7Cl3uD6DEYhUNPnFbGRcMrinWlqRGK0nCAWRG7Qrw567D%7C8d5be5bca525193caefeb5817b23f0f83e8c6ddfdc20c0fe6e7ae6b8dc157a89"


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
                <Table striped bordered hover variant="dark" style={{width: "95vw", margin: "5vh"}}>
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
                                this.state.odds.map(element => {
                                    return (
                                        <tr>
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