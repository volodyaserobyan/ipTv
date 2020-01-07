import React, { useState, useEffect } from 'react'

import ReactDataTablePagination from 'react-datatable-pagination'
import Select from 'react-select'
import Group4 from '../../../assets/Group 4.png'

import "./Tables.scss"

const Tables = () => {
    const [selectedOption, setSelectedOption] = useState(null);

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

    const options = [
        { value: 4, label: 'Show 4  entries' },
        { value: 5, label: 'Show 5  entries' },
        { value: 6, label: 'Show 6  entries' },
    ];

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption)
    }

    useEffect(() => {
        const content = document.getElementsByClassName('css-1wa3eu0-placeholder')[0];
        content.innerHTML = selectedOption == null ? "Show 4  entries" : selectedOption.label
    }, [])

    return (
        <div className="Tables">
            <div className="Tables-Title">
                <p>Expiring in 1 Week</p>
                <Select
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                />
            </div>
            <ReactDataTablePagination arrayOfObjects={arrayOfObjects} dataInOnePage={selectedOption == null ? 4 : selectedOption.value} />
        </div>
    )
}

export default Tables