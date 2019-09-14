import React from 'react'
import giphy from './giphy'
import Logo from './Logo'
import Images from './Images'
import SearchBar from './SearchBar'
import Loader from './Loader'

// @TODO:
// - load some initial images
// - keep local state for pagination

const App = () => {
  const [images, setImages] = React.useState([])
  const [keyword, setKeyword] = React.useState('')
  const [total, setTotal] = React.useState(0)
  const [loading, setLoading] = React.useState(false)

  const searchByKeyword = async keyword => {
    setKeyword(keyword)
    setLoading(true)
    const response = await giphy.fetchImages({ term: keyword })
    setTotal(response.total)
    setImages(response.images)
    setLoading(false)
  }

  return (
    <div className='container'>
      <Logo />
      <SearchBar onSearch={searchByKeyword} />
      
      {loading && (
        <Loader />
      )}
      
      {!loading && !!total && (
        <Images images={images} total={total} keyword={keyword} />
      )}

      {!loading && !total && (
        <div className='no-results'>
          No GIFs to show
        </div>
      )}
    </div>
  )
}

export default App