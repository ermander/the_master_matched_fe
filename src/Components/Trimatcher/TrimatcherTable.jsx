import React, { Component } from 'react';
import "./trimatcher.css"
import { Table } from "react-bootstrap"
const url = "https://jobista.altervista.org/api_trimatcher.php?cookies=cookie: "


class OddsmatcherTable extends Component {
    state={
        odds: [],
        isLoading: true
    }

    // Fetching all available odds
    fetchOdds = async() => {
        try {
            const rawOdds = await fetch(url + "__cfduid=df5bb2c8d12ddb0c2e8ed2afbd224ffee1601038438; _ga=GA1.2.2129195312.1601038440; _gid=GA1.2.1857073251.1601038440; cookieconsent_status=dismiss; flarum_remember=yOhjwC8W5CAIHYFwsdGp1DzjylU8xGQ06J7874iT; wordpress_logged_in_fa686efef513bdb6e3e44099da671de0=ermander%7C1601211248%7Cod6xaL0hlJB8WjKvSgxxcBou4QcXWygpdRRnlkh1EdK%7Cd75a395fa5f7be987bcfd4acba79e77306b0d85a8cef528e6ee86fb524a3caf1")
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
                                this.state.odds.map((element, i) => {
                                    return (
                                        <tr key={i}>
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