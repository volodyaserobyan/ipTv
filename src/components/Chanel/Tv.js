import React, { useState } from 'react'
import Tvv from '../../assets/Tvv.png'
import TvIcon from '../../assets/Group 4.png'
import Mark from '../../assets/Mark.png'
import Label from '../../assets/Label.png'
import Item from './Item'

import './Tv.scss'

const Tv = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(5)
    const [todos, setTodos] = useState([1, 2, 3, 4, 5, 6, 3, 2, 3, 4, 5, 6, 7, 9, 7, 6, 4, 56, 7, 8, 9, 2, 43, 7, 8, 9, 10, 11])

    const indexOfLastTodo = currentPage * perPage;
    const indexOfFirstTodo = indexOfLastTodo - perPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
        return <Item key={index} />
    });


    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / perPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = event => {
        setCurrentPage(Number(event.target.id))
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li
                key={number}
                id={number}
                onClick={handleClick}
            >
                {number}
            </li>
        );
    });

    return (
        <div className="Tv">
            <div className="Tv-Select">
                <div className="Tv-Select-1">
                    <img src={Tvv} alt="" />
                    <h1>TV</h1>
                </div>
                <div className="Tv-Select-2">
                    <p>Show 60 entries</p>
                </div>
            </div>
            <div className="Tv-Title">
                <div className="Wrapper-Left">
                    <img src={TvIcon} alt="" />
                </div>
                <div className="Wrapper-Right">
                    <img className="Wrapper-Right-1" src={Mark} alt="" />
                    <img className="Wrapper-Right-2" src={Label} alt="" />
                </div>
            </div>
            {renderTodos}
            <ul id="page-numbers">
                {renderPageNumbers}
            </ul>
        </div>
    )
}

export default Tv