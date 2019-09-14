import React from 'react'
import Logo from './Logo'
import Images from './Images'
import SearchBar from './SearchBar'

const url = 'https://api.giphy.com/v1/gifs/search?api_key=CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6&limit=5&offset=0&rating=G&lang=en&q='

// @TODO:
// - extract API calls to a separate module
// - load some initial images
// - animation while waiting for image requests
// - keep local state for pagination
// - message for no results

const App = () => {
  const [images, setImages] = React.useState([])
  const [keyword, setKeyword] = React.useState('')
  const [total, setTotal] = React.useState(0)

  const searchByKeyword = async keyword => {
    setKeyword(keyword)
    const response = await (await fetch(url + keyword)).json()
    setTotal(response.pagination.total_count)
    setImages(response.data.map(item => ({
      title: item.title,
      url: item.images.fixed_width.url,
      width: item.images.fixed_width.width,
      height: item.images.fixed_width.height
    })))
  }

  return (
    <div className='container'>
      <Logo />
      <SearchBar onSearch={searchByKeyword} />
      <Images images={images} total={total} keyword={keyword} />
    </div>
  )
}

export default App