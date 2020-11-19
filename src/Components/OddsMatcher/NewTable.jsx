import React from "react";
import "./newtable.css";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";

const DatatablePage = (props) => {
  const data = {
    columns: [
      {
        Header: "Date",
        accessor: "data",
        minWidth: 100,
      },
      {
        Header: "Time",
        accessor: "ora",
        minWidth: 80,
      },
      {
        Header: "Tournament",
        accessor: "campionato",
        minWidth: 160,
      },
      {
        Header: "Event",
        accessor: "evento",
        minWidth: 250,
      },
      {
        Header: "Market",
        accessor: "tipo",
        minWidth: 100,
      },
      {
        Header: "Book",
        accessor: "bookLogo",
        minWidth: 120,
      },
      {
        Header: "Type",
        accessor: "a",
        minWidth: 70,
      },
      {
        Header: "Back",
        accessor: "quota",
        minWidth: 80,
      },
      {
        Header: "Lay",
        accessor: "quota_banca",
        minWidth: 80,
      },
      {
        Header: "Liquidity",
        accessor: "liquidità",
        minWidth: 100,
      },
      {
        Header: "Exchange",
        accessor: "exchangeLogo",
        minWidth: 100,
      },
      {
        Header: "Rating",
        accessor: "tableRating",
        minWidth: 100,
      },
      {
        Header: "Last Up.",
        accessor: "lastupdate",
        minWidth: 100,
      },
      {
        Header: "",
        accessor: "button",
        minWidth: 40,
      },
    ],
  };

  return <ReactTable 
    className="oddsmatcher-table"
    data={props.odds} 
    columns={data.columns}
    defaultPageSize={10}
  />;
};

export default DatatablePage;
