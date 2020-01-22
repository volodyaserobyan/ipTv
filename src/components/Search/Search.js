import React, { useState } from 'react'
import VectorSearch from '../../assets/VectorSearch.png'

import './Search.scss'

const Search = props => {

    const [search, setSearch] = useState('')

    const handleChangeSearch = e => {
        const search = e.target.value
        setSearch(e.target.value)
        let currentList = [1, 2, 3, 4, 5, 6, 3, 2, 3, 4, 5, 6, 7, 9, 7, 6, 4, 56, 7, 8, 9, 2, 43, 7, 8, 9, 10, 11];
        let newList = [];

        if (search !== "") {
            newList = currentList.filter(item => {
                const lc = item.toString().toLowerCase();
                const filter = search.toString().toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = [1, 2, 3, 4, 5, 6, 3, 2, 3, 4, 5, 6, 7, 9, 7, 6, 4, 56, 7, 8, 9, 2, 43, 7, 8, 9, 10, 11]
        }

        if(typeof props.setTodos == 'function') {
            props.setTodos(newList)
        }
    }

    return (
        <div className="Search">
            <input name='search' value={search} onChange={handleChangeSearch} placeholder="Search" />
            <div className="Search_search">
                <img src={VectorSearch} />
            </div>
        </div>
    )
}

export default Search