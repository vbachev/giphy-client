export const initialState = {
  images: [],
  keyword: '',
  totalImages: 0,
  layout: 'list'
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LAYOUT':
      return {
        ...state,
        layout: action.payload
      }
    case 'SET_IMAGES':
      return {
        ...state,
        keyword: action.payload.keyword,
        totalImages: action.payload.total,
        images: action.payload.images
      }
    case 'APPEND_IMAGES':
      return {
        ...state,
        totalImages: action.payload.total,
        images: [...state.images, ...action.payload.images]
      }
    default:
      throw new Error('Unhandled action type')
  }
}
