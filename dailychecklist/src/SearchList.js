import React from 'react'

const SearchList = ({search,setsearch}) => {
  return (
    <form id='searchList' className='searchItem addNewItem' action='search list'>
        <label htmlFor='searchItem'>Search</label>
        <input
            id='searchitem'
            placeholder='Search'
            value={search}
            onChange={(e)=>setsearch(e.target.value)}
        ></input>
    </form>
  )
}

export default SearchList