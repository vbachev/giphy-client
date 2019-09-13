import React from 'react'

const url = 'https://api.giphy.com/v1/gifs/search?api_key=CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6&limit=5&offset=0&rating=G&lang=en&q='

const App = () => {
  const [images, setImages] = React.useState([])

  const searchByKeyword = async event => {
    event.preventDefault()
    const keyword = document.getElementById('keyword').value
    const response = await (await fetch(url + keyword)).json()
    setImages(response.data.map(item => item.images.preview_gif.url))
  }

  return (
    <>
      <form onSubmit={searchByKeyword}>
        <input id="keyword" />
      </form>
      <ul>
        {images.map(image => (
          <li key={image}>
            <img src={image} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default App