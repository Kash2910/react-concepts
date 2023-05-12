import React from 'react'

const Search = ({searchText, handleSearch}) => {
  return (
    <div>
        Search
        <input type="text" 
        value={searchText} 
        onChange={handleSearch} 
        />
    </div>
  )
}

export default Search