const API_KEY = 'CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6'
const IMAGE_FORMAT = 'fixed_width'
const IMAGES_TO_LOAD = 21

const getUrl = ({ term, offset }) => [
  'https://api.giphy.com/v1/gifs/search?rating=G&lang=en',
  `api_key=${API_KEY}`,
  `limit=${IMAGES_TO_LOAD}`,
  `offset=${offset}`,
  `q=${term}`
].join('&')

export default {
  fetchImages: ({ term, offset = 0 }) => fetch(getUrl({ term, offset }))
    .then(response => response.json())
    .then(response => ({
      images: response.data.map(item => ({
        id: item.id,
        title: item.title,
        url: item.images[IMAGE_FORMAT].url,
        width: item.images[IMAGE_FORMAT].width,
        height: item.images[IMAGE_FORMAT].height
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
