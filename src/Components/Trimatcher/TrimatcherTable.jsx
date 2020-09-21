import React, { Component } from 'react';
import "./trimatcher.css"
import { Table } from "react-bootstrap"
const url = "https://jobista.altervista.org/api_trimatcher.php?cookies=cookie: __cfduid=d52928491d5b88ccba3955c1963960c561600528918; _ga=GA1.2.19869112.1600528921; _gid=GA1.2.1402304421.1600528921; cookieconsent_status=dismiss; flarum_remember=vkEccjSqof7XaPBTlzepJBQmrZ9dDU5tXQ7mDu5G; wordpress_logged_in_fa686efef513bdb6e3e44099da671de0=ermander%7C1600704132%7Cl3uD6DEYhUNPnFbGRcMrinWlqRGK0nCAWRG7Qrw567D%7C8d5be5bca525193caefeb5817b23f0f83e8c6ddfdc20c0fe6e7ae6b8dc157a89; _gat_gtag_UA_134094661_1=1"


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
                            <th>1</th>
                            <th>Book</th>
                            <th>X</th>
                            <th>Book</th>
                            <th>2</th>
                            <th>Book</th>
                            <th>ROI</th>
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
                                        <td>{element.a}</td>
                                        <td>{element.book}</td>
                                        <td>{element.b}</td>
                                        <td>{element.book2}</td>
                                        <td>{element.c}</td>
                                        <td>{element.book3}</td>
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