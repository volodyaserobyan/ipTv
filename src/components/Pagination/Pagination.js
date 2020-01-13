import React, { useState, useEffect } from 'react'

const Pagination = (props) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(6)

    const indexOfLastTodo = currentPage * perPage;
    const indexOfFirstTodo = indexOfLastTodo - perPage;
    const currentTodos = props.todos.slice(indexOfFirstTodo, indexOfLastTodo);

    // const renderTodos = currentTodos.map((todo, index) => {
    //     return <Item key={index} />
    // });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.todos.length / perPage); i++) {
        pageNumbers.push(i);
    }

    // useEffect(() => {
    //     props.toggleFunc(currentTodos)
    // })

    const handleClick = event => {
        setCurrentPage(Number(event.target.id))
        props.toggleFunc(currentTodos)
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
        <div>
            {renderPageNumbers}
        </div>
    )
}

export default Pagination