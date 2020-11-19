import React from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";

// CSS
import "./dutcher-table.css"

const DutcherTable = (props) => {
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
        Header: "Book A",
        accessor: "book1Logo",
        minWidth: 120,
      },
      {
        Header: "A",
        accessor: "a",
        minWidth: 70,
      },
      {
        Header: "Back A",
        accessor: "yes",
        minWidth: 80,
      },
      {
        Header: "Back B",
        accessor: "no",
        minWidth: 80,
      },
      {
        Header: "B",
        accessor: "b",
        minWidth: 80
      },
      {
        Header: "Book B",
        accessor: "book2Logo",
        minWidth: 120
      },
      {
        Header: "Rating",
        accessor: "tableRating",
        minWidth: 100,
      },
      {
        Header: "Last Up.",
        accessor: "lastUpdateHour",
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
    className="dutcher-table"
    data={props.odds} 
    columns={data.columns}
    defaultPageSize={10}
  />;
};

export default DutcherTable;
