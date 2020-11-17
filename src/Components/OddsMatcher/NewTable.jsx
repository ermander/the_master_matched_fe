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
        filterable: true,
      },
      {
        Header: "Ora",
        accessor: "ora",
        minWidth: 80,
        filterable: true,
      },
      {
        Header: "Torneo",
        accessor: "campionato",
        minWidth: 160,
        filterable: true,
      },
      {
        Header: "Evento",
        accessor: "evento",
        minWidth: 250,
        filterable: true,
      },
      {
        Header: "Mercato",
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
        Header: "Tipo",
        accessor: "a",
        minWidth: 70,
        filterable: true,
      },
      {
        Header: "Punta",
        accessor: "quota",
        minWidth: 80,
        filterable: true,
      },
      {
        Header: "Banca",
        accessor: "quota_banca",
        minWidth: 80,
        filterable: true,
      },
      {
        Header: "Liquidità",
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
        Header: "Aggior.",
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

  return <ReactTable data={props.odds} columns={data.columns} />;
};

export default DatatablePage;
