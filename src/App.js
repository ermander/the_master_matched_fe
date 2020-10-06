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
      const response = await fetch(url + "__cfduid=da3837b45d3bb5760a860c72682fbebe01601907281; _ga=GA1.2.1425073749.1601907285; _gid=GA1.2.570572914.1601907285; cookieconsent_status=dismiss; flarum_remember=mS8kqj1dMJKtSNvgHItmQ8QDxhhsx4mp8eVU0j3t; wordpress_logged_in_fa686efef513bdb6e3e44099da671de0=ermander%7C1602159691%7CgSxXIjv1vStH0OBG4LgR4PDM9xkV4C3AcKRpeK8UkOG%7C38d8fc10fdf73237b49f7e2a24127a10a8ab32d3ed47752322c056c5cae71756; _gat_gtag_UA_134094661_1=1")
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