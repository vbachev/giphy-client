const API_KEY = 'CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6'
const IMAGE_TYPE = 'fixed_width'
const STEP = 10

const getUrl = ({ term, offset }) => {
  return `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${STEP}&offset=${offset}&rating=G&lang=en&q=${term}`
}

export default {
  fetchImages: ({ term, offset = 0 }) => fetch(getUrl({ term, offset }))
    .then(response => response.json())
    .then(response => ({
      images: response.data.map(item => ({
        title: item.title,
        url: item.images[IMAGE_TYPE].url,
        width: item.images[IMAGE_TYPE].width,
        height: item.images[IMAGE_TYPE].height
      })),
      total: response.pagination.total_count
    }))
    .catch(error => {
      console.error(error)
      return {
        images: [],
        total: 0
      }
    })
}