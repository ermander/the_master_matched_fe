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
        filterable: true,
      },
      {
        Header: "Time",
        accessor: "ora",
        minWidth: 80,
        filterable: true,
      },
      {
        Header: "Tournament",
        accessor: "campionato",
        minWidth: 160,
        filterable: true,
      },
      {
        Header: "Event",
        accessor: "evento",
        minWidth: 250,
        filterable: true,
      },
      {
        Header: "Market",
        accessor: "tipo",
        minWidth: 100,
        filterable: true,
      },
      {
        Header: "Book",
        accessor: "bookLogo",
        minWidth: 120,
        filterable: true,
      },
      {
        Header: "Type",
        accessor: "a",
        minWidth: 70,
        filterable: true,
      },
      {
        Header: "Back",
        accessor: "quota",
        minWidth: 80,
        filterable: true,
      },
      {
        Header: "Lay",
        accessor: "quota_banca",
        minWidth: 80,
        filterable: true,
      },
      {
        Header: "Liquidity",
        accessor: "liquidità",
        minWidth: 100,
        filterable: true,
      },
      {
        Header: "Exchange",
        accessor: "exchangeLogo",
        minWidth: 100,
        filterable: true,
      },
      {
        Header: "Rating",
        accessor: "tableRating",
        minWidth: 100,
        filterable: true,
      },
      {
        Header: "Last Up.",
        accessor: "lastupdate",
        minWidth: 100,
        filterable: true,
      },
      {
        Header: "",
        accessor: "button",
        minWidth: 40,
        filterable: true,
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
