import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
const url = "https://jobista.altervista.org/api_dutcher.php?length=5000&cookies=cookie: "
const bookLogos = {
    "888Sport": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693155/Solo%20Capstone/888Sport_hczenq.png",
    "AdmiralYES": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693153/Solo%20Capstone/Admiral_Yes_srmgvq.png",
    "Bet365": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693153/Solo%20Capstone/Bet365_ez0m2j.png",
    "Betaland": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693153/Solo%20Capstone/Betaland_gwfqbu.jpg",
    "Betclic": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693153/Solo%20Capstone/Betclic_hiw5gy.webp",
    "betfair": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693154/Solo%20Capstone/BetfairSportBook_ft2kbk.png",
    "BetFlag": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693154/Solo%20Capstone/BetflagSportBook_infneq.png",
    "betman": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693154/Solo%20Capstone/Betman_ybpb2v.webp",
    "better": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693154/Solo%20Capstone/Better_dxguec.png",
    "Betway": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693154/Solo%20Capstone/Betway_ntfplf.png",
    "Betwill": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693154/Solo%20Capstone/Betwill_ltieoj.png",
    "Bwin": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693154/Solo%20Capstone/Bwin_iv1jiu.png",
    "chancebet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693155/Solo%20Capstone/Chencebet_n8ah64.png",
    "DomusBet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693155/Solo%20Capstone/DomusBet_jqkzfp.jpg",
    "eurobet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693155/Solo%20Capstone/Eurobet_ye5nxl.png",
    "Flashbet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693155/Solo%20Capstone/Flashbet_ynbnst.png",
    "Gioco Digitale": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693155/Solo%20Capstone/gioco_digitale_ds96er.png",
    "GoldBet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693155/Solo%20Capstone/Goldbet_aef4tk.png",
    "LeoVegas": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693155/Solo%20Capstone/LeoVegas_brlfxq.png",
    "Marathonbet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693155/Solo%20Capstone/Marathobet_r3xkub.png",
    "Merkur Win": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/MerkurWin_tnpt8u.png",
    "Newgioco": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/NweGioco_tyxa9a.png",
    "PinterBet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/PinterBet_gxchdh.png",
    "PlanetWin365": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/PlanetWin365_egmsdn.png",
    "plexbet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/Plexbet_pdjsvt.png",
    "Scommettendo": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/Scommettendo_faor2n.png",
    "sisal": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/Sisal_j8nlfc.png",
    "Skybet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/Skybet_hyg0vu.png",
    "snai": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/Snai_al0ikv.png",
    "SportPesa": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693157/Solo%20Capstone/Sportpesa_s67dyp.png",
    "Stanleybet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/Stanleybet_h55wd1.png",
    "StarVegas": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693157/Solo%20Capstone/StarVegas_kcfxig.png",
    "Terrybet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693157/Solo%20Capstone/Terrybet_bvmy6y.png",
    "TotoWinBet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693157/Solo%20Capstone/TotoWinBet_mxth01.png",
    "unibet": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693157/Solo%20Capstone/Unibet2_wecikf.png",
    "William Hill": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693245/Solo%20Capstone/Bookmaker%20Logos/William_Hill_g1hzi8.png",
    "Zona Gioco": "https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693157/Solo%20Capstone/ZonaGioco_zlw3df.png"
}

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
            // console.log(rawOdds)
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
                                        {console.log(element)}
                                        <td>{element.data}</td>
                                        <td>{element.ora}</td>
                                        <td>{element.campionato}</td>
                                        <td>{element.home} vs {element.away}</td>
                                        <td>{element.tipo}</td>
                                        <td>
                                            <img style={{width: "100px", height: "40px"}} src={bookLogos[element.book]}/>
                                        </td>
                                        <td>{element.a}</td>
                                        <td>{element.yes}</td>
                                        <td>{element.no}</td>
                                        <td>
                                            <img style={{width: "90px", height: "40px"}} src={bookLogos[element.book2]}/>
                                        </td>
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
        );
    }
}

export default OddsmatcherTable;