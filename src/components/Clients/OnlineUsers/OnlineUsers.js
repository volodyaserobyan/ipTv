import React, { useState } from 'react'
import DashboardTitle from '../../DashboardTitle'
import Item from './Item'

import './OnlineUsers.scss'

const OnlineUsers = () => {
    const [select, setSelect] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)
    const [todos, setTodos] = useState([1, 2, 3, 4, 5, 6, 3, 2, 3, 4, 5, 6, 7, 9, 7, 6, 4, 56, 7, 8, 9, 2, 43, 7, 8, 9, 10, 11])
    const [isActive, setIsActive] = useState('isActive')
    const [perPage, setPerPage] = useState(6)

    const indexOfLastTodo = currentPage * perPage;
    const indexOfFirstTodo = indexOfLastTodo - perPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
        return <Item key={index}
            id={todo}
            identifyerRadio={index} />
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
                className={number == currentPage && isActive}
            >
                {number}
            </li>
        );
    });

    const handleChange = selectedOption => {
        setPerPage(selectedOption.value)
        setSelect(selectedOption)
    }

    return (
        <section className="OnlineUsers">
            <div className="OnlineUsers-Table">
                <DashboardTitle 
                    setTodos={setTodos}
                    select={select}
                    handleChange={handleChange} />
                <div className="OnlineUsers-Table-Title">
                    <p>ID</p>
                    <p>MAC ADRESS</p>
                    <p>OWNER</p>
                    <p>STATUS</p>
                    <p>ONLINE</p>
                    <p>TRIAL</p>
                    <p>EXPIRATION</p>
                    <p>ACTIONS</p>
                </div>
                {renderTodos}
            </div>
            <div className="Pagination">
                {renderPageNumbers}
            </div>
        </section>
    )
}

export default OnlineUsers