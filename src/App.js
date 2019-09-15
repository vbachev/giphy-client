import React from 'react'
import giphy from './giphy'
import { initialState, reducer } from './store'
import Logo from './Logo'
import Images from './Images'
import SearchBar from './SearchBar'
import Loader from './Loader'

// @TODO:
// - load some initial images

const debounce = (delay, fn) => {
  let timeoutReference
  return (...args) => {
    clearTimeout(timeoutReference)
    timeoutReference = setTimeout(() => fn(...args), delay)
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { images, keyword, total, loading, layout } = state

  const searchByKeyword = async keyword => {
    dispatch({ type: 'SHOW_LOADER' })
    const response = await giphy.fetchImages({ term: keyword })
    dispatch({ type: 'SET_IMAGES', payload: { ...response, keyword } })
  }

  const loadMoreImages = async () => {
    dispatch({ type: 'SHOW_LOADER' })
    const response = await giphy.fetchImages({ term: keyword, offset: images.length })
    dispatch({ type: 'APPEND_IMAGES', payload: response })
  }

  const onScroll = debounce(100, () => {
    const { clientHeight, offsetHeight } = document.documentElement
    const isAtBottom = clientHeight + window.scrollY === offsetHeight
    const hasMoreImagesToLoad = images.length < total
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
      <SearchBar onSearch={searchByKeyword} />
      
      {total ? (
        <Images {...{ images, total, keyword, layout }} onLayoutChange={changeLayout}/>
      ) : (
        <div className='no-results'>
          No GIFs to show
        </div>
      )}
      
      {loading && (
        <Loader />
      )}
    </div>
  )
}

export default App