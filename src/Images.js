import React from 'react'
import Image from './Image'

// @TODO:
// - listen to scroll events and trigger loading additional images
// - message for no results
// - display the keyword that was searched for and the total results count
// - display layout buttons (grid/list)

const Images = ({ images }) => {
  return (
    <ul className='images-list'>
      {images.map(image => (
        <li key={image.title}>
          <Image {...image} />
        </li>
      ))}
    </ul>
  )
}

export default Images