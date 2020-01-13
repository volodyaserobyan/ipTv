import React, { useState, useEffect, useRef } from 'react'
import Tvv from '../../assets/Tvv.png'
import TvIcon from '../../assets/Group 4.png'
import Mark from '../../assets/Mark.png'
import Label from '../../assets/Label.png'
import Pagination from '../Pagination/Pagination'
import microphone from '../../assets/microphone.png'
import Select from 'react-select'
import Item from './Item'
import "./Radio.scss"

const Radio = (props) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(6)
    const [todos, setTodos] = useState([1, 2, 3, 4, 5, 6, 3, 2, 3, 4, 5, 6, 7, 9, 7, 6, 4, 56, 7, 8, 9, 2, 43, 7, 8, 9, 10, 11])
    const [select, setSelect] = useState(6)
    const [width, setWidth] = useState(null)
    const [isActive, setIsActive] = useState(null)

    const indexOfLastTodo = currentPage * perPage;
    const indexOfFirstTodo = indexOfLastTodo - perPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const toggleWidth = (width) => {
        setWidth(width)
    }

    const renderTodos = currentTodos.map((todo, index) => {
        return <Item key={index}
            toggleWidth={toggleWidth} />
    });


    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / perPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = event => {
        setIsActive('isActive')
        setCurrentPage(Number(event.target.id))
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li
                key={number}
                id={number}
                onClick={handleClick}
                className={number == currentPage ? isActive : ""}
            >
                {number}
            </li>
        );
    });

    const options = [
        { value: 4, label: 'Show 4  entries' },
        { value: 5, label: 'Show 5  entries' },
        { value: 6, label: 'Show 6  entries' },
    ];

    const handleChange = selectedOption => {
        setPerPage(selectedOption.value)
        setSelect(selectedOption)
    }

    return (
        <div className="Radio">
            <div className="Radio-Select">
                <div className="Radio-Select-1">
                    {!props.isRadio ? <img src={Tvv} alt="" />: <img src={microphone} alt="" />}
                    <h1>{props.isRadio ? "Radio" : "Tv"}</h1>
                </div>
                <div className="Radio-Select-2">
                    <Select
                        value={select}
                        className="SelectNpm"
                        classNamePrefix="SelectNpm-Inner"
                        onChange={handleChange}
                        options={options}
                        placeholder="Show 6 entries"
                    />
                </div>
            </div>
            <div className="Radio-Title">
                <div className="Wrapper-Left">
                    <img src={TvIcon} alt="" />
                </div>
                <div style={{
                    width: width,
                    display: "flex",

                }} className="Wrapper-Right">
                    <div>
                        <img className="Wrapper-Right-1" src={Mark} alt="" />
                    </div>
                    <div>
                        <img className="Wrapper-Right-2" src={Label} alt="" />
                    </div>
                </div>
            </div>
            {renderTodos}
            {/* <ul id="page-numbers"> */}
            <div className="Radio-Pagination">
                {renderPageNumbers}
            </div>
            {/* </ul> */}
        </div>
    )
}

export default Radio