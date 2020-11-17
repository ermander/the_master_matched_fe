import React from "react";
import { MDBDataTable } from "mdbreact";
import "./newtable.css";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";

const DatatablePage = (props) => {
  const data = {
    columns: [
      {
        Header: "Data",
        accessor: "data",
        minWidth: 100,
      },
      {
        Header: "Ora",
        accessor: "ora",
        minWidth: 80,
      },
      {
        Header: "Torneo",
        accessor: "campionato",
        minWidth: 160,
      },
      {
        Header: "Evento",
        accessor: "evento",
        minWidth: 250,
      },
      {
        Header: "Mercato",
        accessor: "tipo",
        minWidth: 100,
      },
      {
        Header: "Book",
        accessor: "bookLogo",
        minWidth: 120,
      },
      {
        Header: "Tipo",
        accessor: "a",
        minWidth: 70,
      },
      {
        Header: "Punta",
        accessor: "quota",
        minWidth: 80,
      },
      {
        Header: "Banca",
        accessor: "quota_banca",
        minWidth: 80,
      },
      {
        Header: "Liquidità",
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
        Header: "Aggior.",
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

  return <ReactTable data={props.odds} columns={data.columns} />;
};

export default DatatablePage;
