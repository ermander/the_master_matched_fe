import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import OddsMatcherMatchModal from "./OddsMatcherMatchModal"
import "./oddsmatcher.css"
import { bookLogos } from "../BookLogos/bookLogos"

class OddsmatcherTable extends Component {
    state={
        isLoading: true,
        show: false,
        modalOdd: {},
        activeBookmakers: [],
    }

    handleOpenModalMatch = (element) => {this.setState({modalOdd: element,show: true})}

    handleCloseModalMatch = () => {this.setState({ show: false })}

    render() {
        return (
            <>
            <OddsMatcherMatchModal 
                show={this.state.show}
                noShow={this.handleCloseModalMatch}
                odd={this.state.modalOdd}
                activeBookmakers={this.state.activeBookmakers}
            />
            
            <div>
                <Table striped bordered hover className="odds-table" style={{width: "95vw", margin: "5vh"}}>
                    <thead className="table-data">
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
                            <th colSpan={2}>Aggior.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.isLoading 
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
                                this.props.odds.map((element, i) => {
                                    return (
                                        <tr key={i}>
                                            <td className="table-data">{element.data}</td>
                                            <td className="table-data">{element.ora}</td>
                                            <td className="table-data">{element.campionato}</td>
                                            <td className="table-data">{element.home} vs {element.away}</td>
                                            <td className="table-data">{element.tipo}</td>
                                            <td className="table-data">
                                                <img className="table-data-image" src={bookLogos[element.book]} alt={element.book}/>
                                            </td>
                                            <td className="table-data">{element.a}</td>
                                            <td className="table-data">{element.quota}</td>
                                            <td className="table-data">{element.quota_banca}</td>
                                            <td className="table-data">{element.liquidita}€</td>
                                            <td className="table-data">
                                                <img className="table-data-image" src={bookLogos[element.book2]} alt={element.book2}/>
                                            </td> 
                                            <td className="table-data">{element.rating}%</td>
                                            <td className="table-data">{element.lastupdate}</td>
                                            <td className="table-data">
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