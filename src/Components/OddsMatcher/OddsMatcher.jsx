import React, { Component } from "react";

// Book logos
import { bookLogos } from "../BookLogos/bookLogos";

// React Bootstrap
import { Row, Col, Button } from "react-bootstrap";

// Components
import MultiplaModal from "./MultiplaModal.jsx";
import OddsMatcherFilters from "./OddsMatcherFilters";
import NavBar from "../Navbar/Navbar";
import NewTable from "./NewTable";
import OpenMatchModalButton from "./OpenMatchModalButton";
import PrimaryBookmaker from "./PrimaryBookmaker"

// CSS
import "./oddsmatcher.css";

// API
const url = "https://the-master-matched-be.herokuapp.com/odds-data/oddsmatcher";

class OddsMatcher extends Component {
  state = {
    show: false,
    filters: {
      show: false,
      allSports: false,
      soccer: false,
      tennis: false,
      basket: false,
      allMarkets: false,
      homeTieAway: false,
      underOver: false,
      goalNoGoal: false,
      headToHead: false,
      dataInizio: "",
      oraInizio: "",
      dataFine: "",
      oraFine: "",
      liquidita: "",
      quotaMin: "",
      quotaMax: "",
      stakeRimborso: "",
      stakeBonusRimborso: ""
    },
    odds: [],
    filteredOdds: [],
    isLoading: true,
    updateOdds: false,
    showBookmakersFilterModal: false,
    openMatchModal: false,
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  noShowBookmakersFilterModal = () => {
    this.setState({ showBookmakersFilterModal: false });
  };

  // Fetching all available odds
  fetchOdds = async () => {
    try {
      this.setState({ isLoading: true });
      const rawOdds = await fetch(url);
      console.log(rawOdds)
      if (rawOdds.ok) {
        const odds = await rawOdds.json();
        const slicedOdds = await odds[0].data.slice(0, 3500);        
        const bookLogoss = bookLogos;
        // Calculating odds rating
        for (let i = 0; i < slicedOdds.length; i++) {
          const puntata = 100;
          const commission = 0.05;
          let lay_stake =
            (slicedOdds[i].quota * puntata) /
            (slicedOdds[i].quota_banca - commission);
          let rawRating = (1 - commission) * lay_stake;
          let rating = rawRating.toFixed(2);
          slicedOdds[i].book = slicedOdds[i].book.toLowerCase()
          slicedOdds[i].book2 = slicedOdds[i].book2.toLowerCase()
          slicedOdds[i].liquidita = parseFloat(slicedOdds[i].liquidita);
          slicedOdds[i].rating = rating;
          slicedOdds[i].quota = parseFloat(slicedOdds[i].quota);
          slicedOdds[i].quota_banca = parseFloat(slicedOdds[i].quota_banca);
          slicedOdds[i].lastupdate = slicedOdds[i].lastupdate.split(" ")[1];
          slicedOdds[i].button = <OpenMatchModalButton odd={slicedOdds[i]} />;
          slicedOdds[i].bookLogo = (
            <img
              className="table-data-image"
              src={bookLogoss[slicedOdds[i].book]}
              alt={slicedOdds[i].book}
            />
          );
          slicedOdds[i].exchangeLogo = (
            <img
              className="table-data-image"
              src={bookLogoss[slicedOdds[i].book2]}
              alt={slicedOdds[i].book2}
            />
          );
          slicedOdds[i].evento =
            slicedOdds[i].home + " vs " + slicedOdds[i].away;
          slicedOdds[i].liquidità = slicedOdds[i].liquidita + "€";
          slicedOdds[i].tableRating = slicedOdds[i].rating + "%";
        }
        slicedOdds.sort(function (a, b) {
          return b.rating - a.rating;
        });
        this.setState({ odds: slicedOdds, filteredOdds: slicedOdds, isLoading: false });
      }        
    } catch (error) {
      console.log("fetchOdds function error: ", error);
    }
  };

  openMatchModal = () => {
    this.setState({ openMatchModal: true });
  };

  setFilters = () => {
    let odds = this.state.odds;
    const filters = this.state.filters;
    console.log(odds)
    console.log(filters)

    // Filter based on min odd
    if (filters.quotaMin !== "") {
      odds = odds.filter((odd) => odd.quota > filters.quotaMin);
    }

    // Filter based on max odd
    if (filters.quotaMax !== "") {
      odds = odds.filter((odd) => odd.quota < filters.quotaMax);
    }

    // Filter based on min liquidity
    if (filters.liquidita !== "") {
      odds = odds.filter((odd) => {
        return odd.liquidita > filters.liquidita;
      });
    }
    // 0 = calcio, 1 = tennis, 2 = basket
    // Filters based on sports

    if(filters.allSports){
      odds = odds.filter((odd) => odd)
    }else if(filters.soccer || filters.tennis || filters.basket){
      odds = odds.filter((odd) => {
        return (
          (filters.soccer && odd.sport === "0") ||
          (filters.tennis && odd.sport === "1") ||
          (filters.basket && odd.sport === "2") 
        )}
      )
    }

    // Filter based on markets (1, 2, X, GG, NG, O.25, U.25)
    if(filters.allMarkets === true){
      odds = odds.filter((odd) => odd.tipo === "1X2" || odd.tipo === "GG/NG" || odd.tipo === "U/O")
    }else if(filters.homeTieAway || filters.underOver || filters.goalNoGoal){
      odds = odds.filter(odd => 
        (filters.homeTieAway && odd.tipo === "1X2") ||
        (filters.underOver && odd.tipo === "U/O") ||
        (filters.goalNoGoal && odd.tipo === "GG/NG")
      )
    }
    // Filter based on start time
    // Filter based on end date
    // Filter based on end time

    console.log(odds);
    this.setState({ filteredOdds: odds });
    console.log(odds[0]);
  };

  reloadOdds = () => {
    console.log("ciao")
    const odds = this.state.odds
    this.setState({ filteredOdds: odds })
  }


  componentDidMount = () => {
    this.fetchOdds();
  };

  render() {
    return (
      <>
        <NavBar />
        {/*<BookmakersFilter
                    show={this.state.showBookmakersFilterModal}
                    noShow={this.noShowBookmakersFilterModal}
                />
                */}
        <div
          style={{
            backgroundColor: "#35454d",
            textAlign: "center",
            fontSize: "50px",
            marginBottom: "3vh",
            color: "#babfc2",
          }}
        >
          Odds - Matcher
        </div>
        <Row className="no-gutters">
          <Col className="ml-0" style={{ marginLeft: "0!important" }} xs={12}>
            <OddsMatcherFilters
              setFiltersToFather={(filters) =>{
                this.setState({ filters }, () => this.setFilters())}
              }
              reloadOdds={this.reloadOdds}
              filtersStatus={this.state.filters}
              fetchOdds={this.fetchOdds}
            />

            <Button
              className="mr-3"
              variant="light"
              onClick={() =>
                this.setState({ showBookmakersFilterModal: true })
              }
            >
              Select Owned Bookmakers
            </Button>
            {/*<Button
              className="mr-3"
              variant="light"
              onClick={() => this.setState({showMainBookmaker: true})}
              > Primary Bookmaker
            </Button>*/}
            {/*<MultiplaModal />*/}
            <Button className="ml-3" variant="danger" onClick={this.fetchOdds}>
              Reset
            </Button>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col xs={12}>
            <NewTable
              isLoading={this.state.isLoading}
              odds={this.state.filteredOdds}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default OddsMatcher;
