import React, { useState } from 'react'
import Item from './Item'
import DashboardTitle from '../../DashboardTitle'
import { connect } from 'react-redux'
import arrowDawn from '../../../assets/arrowDown.png'
import topArrow from '../../../assets/TopArrow.png'
import './Lines.scss'
import { isModalActive } from '../../Action'

const Lines = props => {
    const [select, setSelect] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)
    const [todos, setTodos] = useState([1, 2, 3, 4, 5, 6, 3, 2, 3, 4, 5, 6, 7, 9, 7, 6, 4, 56, 7, 8, 9, 2, 43, 7, 8, 9, 10, 11])
    const [perPage, setPerPage] = useState(6)
    const [isActive, setIsActive] = useState('isActive')
    const indexOfLastTodo = currentPage * perPage;
    const indexOfFirstTodo = indexOfLastTodo - perPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
    
    const renderTodos = currentTodos.map((todo, index) => {
        return <Item key={index}
            id={todo}
            ident={index} />
    });

    const handleChange = (selectedOption) => {
        setPerPage(selectedOption.value)
        setSelect(selectedOption)
    }


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

    return (
        <section className="Lines">
            <div className="Lines-Table">
                <DashboardTitle
                    setTodos={setTodos}
                    select={select}
                    handleChange={handleChange}
                    isLines={true} />
                <div className="Lines-Table-Add">
                    <p onClick={() => props.isModalOpen(true)}>+New Line</p>
                    <p>Mass Action <img src={arrowDawn} alt='' /></p>
                </div>
                <div className="Lines-Table-Title">
                    <p className="Lines-Table-Title_id">ID</p>
                    <p>OWNER</p>
                    <p>USERNAME</p>
                    <p>PASSWORD</p>
                    <p>LOGO</p>
                    <p>NOW</p>
                    <p>IP</p>
                    <p>UPTIME</p>
                    <p>EXPIRE DATE</p>
                    <p>NOTE</p>
                    <p>CLIENT COUNTRY</p>
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

const mapDispatchToProps = dispatch => {
    return {
        isModalOpen: obj => dispatch(isModalActive(obj))
    }
}

export default connect(null, mapDispatchToProps)(Lines)