import React from 'react'

const SearchForm = ({ onSearch }) => {
  const searchField = React.useRef(null)

  React.useEffect(() => {
    searchField.current.focus()
  }, [])

  const submitKeyword = event => {
    event.preventDefault()
    onSearch(searchField.current.value)
  }

  return (
    <form className='search-container' onSubmit={submitKeyword}>
      <input type='text' className='search-field' placeholder='Search all the GIFs' ref={searchField} />
      <button type='submit' className='search-button'>
        SEARCH
      </button>
    </form>
  )
}

export default SearchForm
