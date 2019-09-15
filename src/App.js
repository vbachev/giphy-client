import React from 'react'
import giphy from './giphy'
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
  const [state, setState] = React.useState({
    images: [],
    keyword: '',
    total: 0,
    loading: false
  })

  const searchByKeyword = async keyword => {
    setState({ ...state, loading: true })
    const response = await giphy.fetchImages({ term: keyword })
    setState({
      ...state,
      keyword,
      total: response.total,
      images: response.images,
      loading: false
    })
  }

  const loadMoreImages = async () => {
    setState({ ...state, loading: true })
    const response = await giphy.fetchImages({ term: state.keyword, offset: state.images.length })
    setState({
      ...state,
      total: response.total,
      images: state.images.concat(response.images),
      loading: false
    })
  }

  const onScroll = debounce(100, () => {
    const { clientHeight, offsetHeight } = document.documentElement
    const isAtBottom = clientHeight + window.scrollY === offsetHeight
    const hasMoreImagesToLoad = state.images.length < state.total
    if (isAtBottom && hasMoreImagesToLoad) loadMoreImages()
  })

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [state]) // @TODO: optimise this as it rebinds listeners whenever state changes :(

  return (
    <div className='container'>
      <Logo />
      <SearchBar onSearch={searchByKeyword} />
      
      {state.total ? (
        <Images images={state.images} total={state.total} keyword={state.keyword} />
      ) : (
        <div className='no-results'>
          No GIFs to show
        </div>
      )}
      
      {state.loading && (
        <Loader />
      )}
    </div>
  )
}

export default App