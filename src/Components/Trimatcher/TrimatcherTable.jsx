import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import { bookLogos } from "../BookLogos/bookLogos"
import TrimatcherMatchModal from "./TrimatcherMatchModal"
import "./trimatcher.css"
const url = "https://jobista.altervista.org/api_trimatcher.php?cookies=cookie: "

class OddsmatcherTable extends Component {
    state={
        odds: [],
        isLoading: true,
        show: false,
        modalOdd: {}
    }

    // Fetching all available odds
    fetchOdds = async() => {
        try {
            const rawOdds = await fetch(url + "__cfduid=db057fbe44fb2c68bf0a0c5288dd84e0f1602236294; _ga=GA1.2.1652571559.1602236296; _gid=GA1.2.1831318163.1602236296; _gat_gtag_UA_134094661_1=1; cookieconsent_status=dismiss; flarum_remember=tIaJ3kZYhtP2Ykm7BfgnH72luAz0Y4s7bH1wmAQ5; wordpress_logged_in_fa686efef513bdb6e3e44099da671de0=ermander%7C1602409113%7CaNOudmAClhxH4SnHg7Ycw6FmEIkFYyaH6DRPlRO80Yd%7Cdfb6ec3d759f6f9de60d4799f2dc0820427e3f386a7698dd10115db23a00ad70")
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


    componentDidMount(){
        this.fetchOdds()
    }

    render() {
        return (
            <>
            <TrimatcherMatchModal 
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
                            <th>1</th>
                            <th>Book</th>
                            <th>X</th>
                            <th>Book</th>
                            <th>2</th>
                            <th>Book</th>
                            <th>ROI</th>
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
                                    <td></td>
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
                                        <td>
                                        <img style={{width: "100px", height: "40px"}} src={bookLogos[element.book]} alt={element.book}/>
                                        </td>
                                        <td>{element.b}</td>
                                        <td>
                                        <img style={{width: "100px", height: "40px"}} src={bookLogos[element.book2]} alt={element.book}/>
                                        </td>
                                        <td>{element.c}</td>
                                        <td>
                                        <img style={{width: "100px", height: "40px"}} src={bookLogos[element.book3]} alt={element.book}/>
                                        </td>
                                        <td>{element.rating}%</td>                                        
                                        <td>{element.lastupdate}</td>
                                        <td>
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