export const initialState = {
  images: [],
  keyword: '',
  total: 0,
  loading: false,
  layout: 'list'
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_LOADER':
      return {
        ...state,
        loading: true
      }
    case 'CHANGE_LAYOUT':
      return {
        ...state,
        layout: action.payload
      }
    case 'SET_IMAGES':
      return {
        ...state,
        keyword: action.payload.keyword,
        total: action.payload.total,
        images: action.payload.images,
        loading: false
      }
    case 'APPEND_IMAGES':
      return {
        ...state,
        total: action.payload.total,
        images: [...state.images, ...action.payload.images],
        loading: false
      }
    default:
      throw new Error('Unhandled action type')
  }
}
