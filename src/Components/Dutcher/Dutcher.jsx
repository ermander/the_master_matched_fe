import React, { Component } from 'react';

// Book logos
import { bookLogos } from "../BookLogos/bookLogos";

// React Bootstrap
import { Row, Col, Button } from "react-bootstrap"

// Components
import DutcherModal from "./DutcherModal"
import DutcherTable from "./DutcherTable"
import DutcherMatchModal from "./DutcherMatchModal"
import NavBar from "../Navbar/Navbar"
import OpenDutcherMatchModalButton from "./OpenDutcherMatchModalButton";

// API
const url = "https://the-master-matched-be.herokuapp.com/odds-data/dutcher"

class Dutcher extends Component {
    state={
        odds: [],
        filteredOdds: [],
        filters: {
            show: false,
            allSports: false,
            soccer: false,
            tennis: false,
            basket: false,
            allMarkets: false,
            doubleChange: false,
            underOver: false,
            goalNoGoal: false,
            headToHead: false,
            specials: false,
            dataInizio: "",
            oraInizio: "",
            dataFine: "",
            oraFine: "",
            quotaMin: "",
            quotaMax: "",
            stakeRimborso: "",
            stakeBonusRimborso: ""
          },
        isLoading: true,
        show: false,
        odd: {}
    }

    // Fetching all available odds
    fetchOdds = async() => {
        try {
            const rawOdds = await fetch(url)
            if(rawOdds.ok){
                const odds = await rawOdds.json()
                const slicedOdds = odds[0].data
                console.log(slicedOdds)

                for(let i = 0; i < slicedOdds.length; i++){
                    slicedOdds[i].book = slicedOdds[i].book.toLowerCase()
                    slicedOdds[i].book2 = slicedOdds[i].book2.toLowerCase()
                    slicedOdds[i].book1Logo = <img className="table-data-image" src={bookLogos[slicedOdds[i].book]} alt={slicedOdds[i].book}/>
                    slicedOdds[i].book2Logo = <img className="table-data-image" src={bookLogos[slicedOdds[i].book2]} alt={slicedOdds[i].book2}/>
                    slicedOdds[i].evento = slicedOdds[i].home + " vs " + slicedOdds[i].away
                    slicedOdds[i].lastUpdateHour = slicedOdds[i].lastupdate.split(" ")[1]
                    slicedOdds[i].tableRating = slicedOdds[i].rating + "%"
                    slicedOdds[i].yes = parseFloat(slicedOdds[i].yes)
                    slicedOdds[i].no = parseFloat(slicedOdds[i].no)
                    slicedOdds[i].button = <OpenDutcherMatchModalButton odd={slicedOdds[i]}/>
                }      
                debugger             
                this.setState({odds: slicedOdds, filteredOdds: slicedOdds, isLoading: false})             
            }        
        } catch (error) {
            console.log("fetchOdds function error: ", error)            
        }
    }

    show = (odd) => {this.setState({show: true, odd: odd})}

    setFilters = () => {
        let odds = this.state.odds;
        const filters = this.state.filters;
        console.log(filters)
        console.log(odds)
        console.log(filters)
    
        // Filter based on min odd
        if (filters.quotaMin !== "") {
          odds = odds.filter((odd) => parseFloat(odd.yes) > parseFloat(filters.quotaMin));
        }
    
        // Filter based on max odd
        if (filters.quotaMax !== "") {
          odds = odds.filter((odd) => parseFloat(odd.yes) < parseFloat(filters.quotaMax));
        }
        
        // 0 = calcio, 1 = tennis, 2 = basket
        // Filters based on sports    
        if(filters.allSports){
          odds = odds.filter((odd) => odd /*.sport === "0" || odd.sport === "1" || odd.sport === "2"*/)
        }else if(filters.soccer || filters.tennis || filters.basket){
          odds = odds.filter((odd) => {
            return (
              (filters.soccer && odd.sport === "0") ||
              (filters.tennis && odd.sport === "1") ||
              (filters.basket && odd.sport === "2") 
            )}
          )
        }
        
        // Filters based on markets
        if(filters.allMarkets){
           
            odds = odds.filter((odd) => odd.tipo === "DC" || odd.tipo === "O25" || odd.tipo === "U25" || odd.tipo === "O35" || odd.tipo === "U35" || odd.tipo === "O15" || odd.tipo === "U15" || odd.tipo === "GG" || odd.tipo === "NG")
        }else if(filters.doubleChange || filters.underOver || filters.goalNoGoal){
            odds = odds.filter((odd) =>{
            return(
                (filters.doubleChange && odd.tipo === "DC") ||
                (filters.underOver && odd.tipo === "O25") ||
                (filters.underOver && odd.tipo === "U25") ||
                (filters.underOver && odd.tipo === "O35") ||
                (filters.underOver && odd.tipo === "U35") ||
                (filters.underOver && odd.tipo === "O15") ||
                (filters.underOver && odd.tipo === "U15") ||
                (filters.goalNoGoal && odd.tipo === "GG") ||
                (filters.goalNoGoal && odd.tipo === "NG")
            )}
        )}
        console.log(odds);
        this.setState({ filteredOdds: odds });
        console.log(odds[0]);
    }

    reloadOdds = () => {
        const odds = this.state.odds
        this.setState({ filteredOdds: odds })
    }

    componentDidMount(){
        this.fetchOdds()
    }

    render() {
        return (
            <>
                <DutcherMatchModal 
                    show={this.state.show}
                    noShow={this.handleCloseModalMatch}
                    odd={this.state.odd}
                />

                <NavBar />
                    <div
                    style={{
                        backgroundColor: "#35454d",
                        textAlign: "center",
                        fontSize: "50px",
                        marginBottom: "3vh",
                        color: "#babfc2",
                    }}
                    >
                    Dutcher
                </div>
                <Row>
                    <Col>
                        <DutcherModal 
                            setFiltersToFather={(filters) =>{
                                this.setState({ filters }, () => this.setFilters())}
                            }
                            reloadOdds={this.reloadOdds}
                            filtersStatus={this.state.filters}
                            fetchOdds={this.fetchOdds}
                        />
                        <Button className="ml-3" variant="danger" onClick={this.fetchOdds}>
                            Reset
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DutcherTable 
                            odds={this.state.filteredOdds}
                        />
                    </Col>
                </Row>
                            
            </>
        );
    }
}

export default Dutcher;