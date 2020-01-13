import React, { useState, useRef, useEffect } from 'react'
import Select from 'react-select'

import './OnlineUsers.scss'

const OnlineUsers = () => {
    const [select, setSelect] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)
    const [todos, setTodos] = useState([1, 2, 3, 4, 5, 6, 3, 2, 3, 4, 5, 6, 7, 9, 7, 6, 4, 56, 7, 8, 9, 2, 43, 7, 8, 9, 10, 11])
    const [isActive, setIsActive] = useState(null)
    const [perPage, setPerPage] = useState(6)
    const [onlineRadio, setOnlineRadio] = useState(null)
    const ref = useRef(null);
    let width = null

    const indexOfLastTodo = currentPage * perPage;
    const indexOfFirstTodo = indexOfLastTodo - perPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
        return <div key={index} className="OnlineUsers-Table-Item">
            <p className="OnlineUsers-Table-Item_id">2566</p>
            <p className="OnlineUsers-Table-Item_address">Lorem</p>
            <p className="OnlineUsers-Table-Item_owner">Lorem Ipsum</p>
            <p className="OnlineUsers-Table-Item_status">Movies</p>
            <div>
                <input type='radio' name='online' checked={onlineRadio == true} onChange={() => { setOnlineRadio(true) }} />
            </div>
            <div>
                <input type='radio' name='online' checked={onlineRadio == false} onChange={() => { setOnlineRadio(false) }} />
            </div>
            <p>2019/01/08</p>
            <p>Actions</p>
        </div>
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

    const handleChange = selectedOption => {
        setPerPage(selectedOption.value)
        setSelect(selectedOption)
    }

    useEffect(() => {
        width = ref.current ? ref.current.offsetWidth : 0;
        console.log(width)
    }, [ref.current])


    const options = [
        { value: 4, label: 'Show 4  entries' },
        { value: 5, label: 'Show 5  entries' },
        { value: 6, label: 'Show 6  entries' },
    ];

    return (
        <section className="OnlineUsers">
            <div className="OnlineUsers-Table">
                <div className="OnlineUsers-Table-Control">
                    <h1>Online Users</h1>
                    <input placeholder="Search" />
                    <Select
                        value={select}
                        className="SelectNpm"
                        classNamePrefix="SelectNpm-Inner"
                        onChange={handleChange}
                        options={options}
                        placeholder="Show 6 entries"
                    />
                </div>
                <div className="OnlineUsers-Table-Title">
                    <p>ID</p>
                    <p ref={ref}>MAC ADRESS</p>
                    <p>OWNER</p>
                    <p>STATUS</p>
                    <p>ONLINE</p>
                    <p>TRIAL</p>
                    <p>EXPIRATION</p>
                    <p>ACTIONS</p>
                </div>
                {renderTodos}
            </div>
            <div className="OnlineUsers-Pagination">
                {renderPageNumbers}
            </div>
        </section>
    )
}

export default OnlineUsers