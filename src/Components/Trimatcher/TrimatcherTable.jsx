import React, { Component } from 'react';
import { Table } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import "./trimatcher.css"
const url = "https://jobista.altervista.org/api_trimatcher.php?cookies=cookie: "

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
        isLoading: true
    }

    // Fetching all available odds
    fetchOdds = async() => {
        try {
            const rawOdds = await fetch(url + "__cfduid=defe77d8abaedbfec9c603cfea1c9ad041601474329; _ga=GA1.2.1869698237.1601474343; _gid=GA1.2.596859381.1601474343; cookieconsent_status=dismiss; flarum_remember=VUYFDw9crKkkts88AqiIZcj6n4IT7NN5g0wU07sZ; wordpress_logged_in_fa686efef513bdb6e3e44099da671de0=ermander%7C1601647165%7C9cvFPRYnAZELAhn55HcHot0t6uFCIH6Tf0CiBIWOznB%7C3a9ba8d41de25a7cb99a27e4520e85ad5d2b40729874768ca55b6072127e1296; _gat_gtag_UA_134094661_2=1")
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
                                        <td>{element.book}</td>
                                        <td>{element.b}</td>
                                        <td>{element.book2}</td>
                                        <td>{element.c}</td>
                                        <td>{element.book3}</td>
                                        <td>{element.rating}%</td>                                        
                                        <td>{element.lastupdate}</td>
                                        <td>
                                            <FontAwesomeIcon icon={faCalculator} />
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