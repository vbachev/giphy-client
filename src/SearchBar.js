import React from 'react'

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = React.useState('')

  const submitKeyword = event => {
    event.preventDefault()
    onSearch(keyword)
  }

  return (
    <form className='search-container' onSubmit={submitKeyword}>
      <input type='text' className='search-field' placeholder='Search all the GIFs' value={keyword} onChange={e => setKeyword(e.target.value)} />
      <button type='submit' className='search-button'>
        SEARCH
      </button>
    </form>
  )
}

export default SearchBar