import React from 'react';
import { MDBDataTable } from 'mdbreact';
import "./newtable.css"

const DatatablePage = (props) => {
  const data = {
    columns: [
      {
        label: 'Data',
        field: 'data',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Ora',
        field: 'ora',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Torneo',
        field: 'campionato',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Evento',
        field: 'evento',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Mercato',
        field: 'tipo',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Book',
        field: 'bookLogo',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Tipo',
        field: 'a',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Punta',
        field: 'quota',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Banca',
        field: 'quota_banca',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Liquidità',
        field: 'liquidità',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Exchange',
        field: 'exchangeLogo',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Rating',
        field: 'tableRating',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Aggior.',
        field: 'lastupdate',
        sort: 'asc',
        width: 100
      },
      {
        label: '',
        field: 'button',
        sort: 'asc',
        width: '20'
      }
    ],
    rows: props.odds
  };

  console.log('ROWS', props.odds)

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default DatatablePage;