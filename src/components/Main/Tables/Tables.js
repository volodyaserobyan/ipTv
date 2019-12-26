import React from 'react'

import ReactDataTablePagination from 'react-datatable-pagination'
// import { MDBDataTable } from 'mdbreact'
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// import '@fortawesome/fontawesome-free/css/all.min.css';

import "./Tables.scss"

const Tables = () => {

    const arrayOfObjects = [
        {
            "Type": 'Jon Snow',
            "Username": 'Lord Commander',
            "Notes": 'Castle Black',
            "Info": '28'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Type": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Notes": 'Capital',
            "Info": '18'
        },
        {
            "Name": 'Bran, The Broken',
            "Username": 'King of 6 kingdoms',
            "Office": 'Capital',
            "Info": '18'
        }
    ];

    return (
        <div>
            <ReactDataTablePagination arrayOfObjects={arrayOfObjects} dataInOnePage={4} />
        </div>
    )
}

export default Tables