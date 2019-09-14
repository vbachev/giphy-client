import React from 'react'
import Header from './Header'
import Images from './Images'
import SearchBar from './SearchBar'

const url = 'https://api.giphy.com/v1/gifs/search?api_key=CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6&limit=5&offset=0&rating=G&lang=en&q='

const App = () => {
  const [images, setImages] = React.useState([])

  const searchByKeyword = async keyword => {
    const response = await (await fetch(url + keyword)).json()
    setImages(response.data.map(item => item.images.preview_gif.url))
  }

  return (
    <div className='container'>
      <Header />
      <SearchBar onSearch={searchByKeyword} />
      <Images images={images} />
    </div>
  )
}

export default App