import React, { useState } from 'react';

import './SearchForm.css';

function SearchForm({ onSearch }) {

    const [ search, setSearch ] = useState({ text: "" });

    function onChange(e) {
        const newSearch = { text: e.target.value };
        setSearch(newSearch);
    }

    function Search() {
        const newSearch = { text: search.text };
        if(onSearch) {
            onSearch(newSearch);
        }
    }

    return (
        <form className="search-form d-flex">
            <input type="text" onChange={onChange} className="form-control" placeholder="What do you want to watch?"/>
            <button onClick={Search} type="button">Search</button>
        </form>
    )
}

export default SearchForm;