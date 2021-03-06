import React from 'react'
import giphy from '../giphy'
import { initialState, reducer } from '../store'
import Logo from './Logo'
import Gallery from './Gallery'
import SearchForm from './SearchForm'

const debounce = (delay, fn) => {
  let timeoutReference
  return (...args) => {
    clearTimeout(timeoutReference)
    timeoutReference = setTimeout(() => fn(...args), delay)
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { images, keyword, totalImages, layout } = state

  const searchByKeyword = async keyword => {
    const response = await giphy.fetchImages({ term: keyword })
    dispatch({ type: 'SET_IMAGES', payload: { ...response, keyword } })
  }

  const loadMoreImages = async () => {
    const response = await giphy.fetchImages({ term: keyword, offset: images.length })
    dispatch({ type: 'APPEND_IMAGES', payload: response })
  }

  const onScroll = debounce(100, () => {
    const { clientHeight, offsetHeight } = document.documentElement
    const isAtBottom = clientHeight + window.scrollY === offsetHeight
    const hasMoreImagesToLoad = images.length < totalImages
    if (isAtBottom && hasMoreImagesToLoad) loadMoreImages()
  })

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [state]) // @TODO: optimise this as it rebinds listeners whenever state changes :(

  const changeLayout = newLayout => dispatch({ type: 'CHANGE_LAYOUT', payload: newLayout })

  return (
    <div className='container'>
      <Logo />
      <SearchForm onSearch={searchByKeyword} />
      {images.length ? (
        <Gallery {...{ images, totalImages, keyword, layout }} onLayoutChange={changeLayout} />
      ) : (
        <div className='no-results'>
          No GIFs to show
        </div>
      )}
    </div>
  )
}

export default App
