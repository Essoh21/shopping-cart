import React from "react"
const Search = (props) => {
    return (
        <div className="search-bar" >
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="search" >Search:</label>
                <div className="search-bar-container">
                    <input type="search" id="search" name="search" value={props.searchTerm} placeholder="search by title" onChange={props.onSearchChange} />
                    <button type="submit" aria-label="Search" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="1.3rem" viewBox="0 2 30 30"><path d="M22.71 21.29l-5.28-5.28a8 8 0 1 0-1.42 1.42l5.28 5.28a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM10 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6z" /></svg>
                    </button>
                </div>
            </form>
        </div >

    )
}

export default Search;