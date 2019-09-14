import React from 'react'

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = React.useState('')

  const submitKeyword = event => {
    event.preventDefault()
    onSearch(keyword)
  }

  return (
    <form onSubmit={submitKeyword}>
      <input id="keyword" value={keyword} onChange={e => setKeyword(e.target.value)} />
    </form>
  )
}

export default SearchBar