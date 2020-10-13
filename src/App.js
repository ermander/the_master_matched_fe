import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from "react-bootstrap-table-next"
import paginatorFactory from "react-bootstrap-table2-paginator"
import * as ReactBootStrap from "react-bootstrap"
const url = "https://jobista.altervista.org/api.php?cookies=cookie: "


const Table = () => {
  const [odds, setOdds] = useState([])
  const [loading, setLoading] = useState(false)

  const getOdds = async () => {
    try {
      const response = await fetch(url + "__cfduid=d7f8eec57d5b74a5146d370609eddc8a21602586726; _ga=GA1.2.359510800.1602586728; _gid=GA1.2.1892420503.1602586728; cookieconsent_status=dismiss; flarum_remember=xjRrMASNnbdoAttzkBGCRPjaNGbRhNmAXaMx3qZ1; wordpress_logged_in_fa686efef513bdb6e3e44099da671de0=ermander%7C1602759536%7C7p9ji9gn5yYFLTBxzkDcaVfCVznOc8SXlvBl9W1H7r0%7C0e2d7d252219a00f3a26cdd2cab1c952a2c54d56077aaaea8c2d25892cc1b230")
      if(response.ok){
        const parsedResponse = await response.json()
        const odds = parsedResponse.slice(0, 200)
        
        for(let i=0; i<odds.length; i++){
          const puntata = 100
          const commission = 0.05
          let lay_stake = (odds[i].quota * puntata ) / (odds[i].quota_banca - commission)
          let rawRating = (1 - commission) * lay_stake
          let rating = rawRating.toFixed(2)
          odds[i].rating = rating
        }
        console.log(odds)
        setOdds(odds)
      /* odds.sort(function(a, b){
        return b.rating - a.rating
      })*/} 
      
    } catch (error) {
      console.log(error)      
    }
  }

  const columns = [
    { dataField: "data", text: "Data"},
    { dataField: "ora", text: "Ora"},
    { dataField: "torneo", text: "torneo"},
    { dataField: "evento", text: "evento"},
    { dataField: "mercato", text: "mercato"},
    { dataField: "book", text: "book"},
    { dataField: "tipo", text: "tipo"},
    { dataField: "punta", text: "punta"},
    { dataField: "banca", text: "banca"},
    { dataField: "liquidità", text: "liquidità"},
    { dataField: "exchange", text: "exchange"},
    { dataField: "rating", text: "rating"},
  ]

  useEffect(() => {
    getOdds()
  }, [])

    return (
      <div className="App">
        <BootstrapTable 
        keyField="data"
        data={odds}
        columns={columns}
        pagination={paginatorFactory()}
        />
      </div>
    )
}

export default Table