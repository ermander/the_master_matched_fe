import React, { Component } from 'react';
import { Spinner, Table } from "react-bootstrap"
const url = "https://jobista.altervista.org/api.php?cookies=cookie: _ga=GA1.2.1943054744.1600348951; _gid=GA1.2.1807594624.1600348951; cookieconsent_status=dismiss; flarum_remember=VPSjTzhtbIkBVSVYJNvfnup7fSycdWGgZUIEqwVU; wordpress_logged_in_fa686efef513bdb6e3e44099da671de0=ermander%7C1600521762%7CF4ESYRsKbCx1I7QJSYOUoy9JMDu4WHjdiCRlft2pglR%7C5d711be36cde1e3778662a2b0f26c971a9ff1cbf00d71cad8a9d5173149a1909; __cfduid=d62c6ef5f530039c3adb867f90a4ded361600353024"


// 
// 

class OddsTable extends Component {
    state={
        odds: [],
        isLoading: true
    }

    // Fetching all available odds
    fetchOdds = async() => {
        try {
            this.setState({
                odds: []
            })
            const response = await fetch(url)
            console.log(response)
            if(response.ok){
                const parsedResponse = await response.json()
                console.log(parsedResponse)
                const parsedResponseSliced = await  parsedResponse.slice(0, 100)
                this.setState({
                    odds: parsedResponseSliced,
                    isLoading: false
                })
                console.log(this.state.odds)
                console.log("Item i=0", this.state.odds[0])
                const updatingOddsWithRating = []
                for(let i=0; i<this.state.odds.length; i++){
                    // Calcolo rating
                    let commissioni_percentuale = 0.05
                    let puntata = 100
                    console.log("iubiubi", this.state.odds[i].quota)
                    let stake_bancata = (this.state.odds[i].quota * puntata)/(this.state.odds[i].quota_banca - commissioni_percentuale)
                    console.log(stake_bancata)
                    
                    
                    let bancata = (this.state.odds[i].quota * puntata) - (((this.state.odds[i].quota-1) * puntata) / 100) / (this.state.odds[i].quota_banca - commissioni_percentuale / 100)
                    let responsabilità = bancata * (this.state.quota_banca - 1)
                    let rating = ((puntata * this.state.odds[i].quota - responsabilità) / puntata) * 100
                    
                    console.log(this.state.odds[i])
                }
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
                                        <td>{element.rating}</td>
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

export default OddsTable;