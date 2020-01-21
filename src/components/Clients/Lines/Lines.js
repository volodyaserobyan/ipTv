import React, { useState } from 'react'
import { options } from '../../Const/Const'
import Select from 'react-select'
import Item from './Item'
import Search from '../../Search/Search'
import { connect } from 'react-redux'
import './Lines.scss'
import { isModalActive } from '../../Action'

const Lines = props => {
    const [select, setSelect] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)
    const [todos, setTodos] = useState([1, 2, 3, 4, 5, 6, 3, 2, 3, 4, 5, 6, 7, 9, 7, 6, 4, 56, 7, 8, 9, 2, 43, 7, 8, 9, 10, 11])
    const [perPage, setPerPage] = useState(6)
    const [isActive, setIsActive] = useState(null)
    const [addLine, setaddLine] = useState(false)

    const indexOfLastTodo = currentPage * perPage;
    const indexOfFirstTodo = indexOfLastTodo - perPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
        return <Item key={index}
            id={todo}
            identifyerRadio={index} />
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
                className={number == currentPage ? isActive : ""}
            >
                {number}
            </li>
        );
    });

    const addNewLine = () => {
        if(props.isOpenModal) {
            props.isModalOpen(false)
        } else {
            props.isModalOpen(true)
        }
    }


    // <div onClick={addNewLine} className="Modal-NewLine">
    //                 <div className="Modal-NewLine-Cont">
    //                     <div className="newLine-Box">

    //                     </div>
    //                 </div>
    //             </div>

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
                    <p onClick={addNewLine}>+New Line</p>
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
                {renderTodos}
            </div>
            <div className="Pagination">
                {renderPageNumbers}
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        isOpenModal: state.modalReducer.isModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        isModalOpen: bool => dispatch(isModalActive(bool))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lines)