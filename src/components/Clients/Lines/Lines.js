import React, { useState } from 'react'
import { options } from '../../Const/Const'
import Select from 'react-select'
import Search from '../../Search/Search'
import './Lines.scss'

const Lines = () => {
    const [select, setSelect] = useState(6)
    const [todos, setTodos] = useState([1, 2, 3, 4, 5, 6, 3, 2, 3, 4, 5, 6, 7, 9, 7, 6, 4, 56, 7, 8, 9, 2, 43, 7, 8, 9, 10, 11])
    const [perPage, setPerPage] = useState(6)

    const handleChange = (selectedOption) => {
        setPerPage(selectedOption.value)
        setSelect(selectedOption)
    }

    return (
        <section className="Lines">
            <div className="Lines-Table">
                <div className="Lines-Table-Control">
                    <h1>Manage Lines</h1>
                    <Search setTodos={setTodos} />
                    <Select
                        value={select}
                        className="SelectNpm"
                        classNamePrefix="SelectNpm-Inner"
                        onChange={handleChange}
                        options={options}
                        placeholder="Show 6 entries"
                    />
                </div>
                <div className="Lines-Table-Add">
                    <p>+New Line</p>
                    <Select
                        value={select}
                        className="SelectNpm"
                        classNamePrefix="SelectNpm-Inner"
                        onChange={handleChange}
                        options={options}
                        placeholder="Show 6 entries"
                    />
                </div>
                <div className="Lines-Table-Title">
                    <p className="Lines-Table-Title_id">ID</p>
                    <p>MASS ACTIONS</p>
                    <p>ON/OFF</p>
                    <p>CREATED BY/ID</p>
                    <p>USERNAME</p>
                    <p>PASSWORD</p>
                    <p>EXPIRY DATE</p>
                    <p>CONNECTIONS</p>
                    <p>NOTES</p>
                    <p>STATUS</p>
                    <p>LIVE CHANNEL</p>
                    <p>MAC ADDRESS</p>
                    <p>ACTIONS</p>
                </div>
                <div className="Lines-Table-Item">
                    <p className="Lines-Table-Item_id">1</p>
                    <p className="Lines-Table-Item_address">Lorem</p>
                    <p className="Lines-Table-Item_owner">Lorem Ipsum</p>
                    <p className="Lines-Table-Item_status">Movies</p>
                    <div>
                        <label className="radioLabel">
                            <input />
                            <div className="check"></div>
                        </label>
                    </div>
                    <div>
                        <label className="radioLabel">
                            <input />
                            <div className="check"></div>
                        </label>
                    </div>
                    <p>2019/01/08</p>
                    <p>Actions</p>
                    <p>Actions</p>
                    <p>Actions</p>
                    <p>Actions</p>
                    <p>Actions</p>
                </div>
            </div>
        </section>
    )
}

export default Lines