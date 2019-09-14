import React from 'react'
import Image from './Image'

// @TODO:
// - layout prop to control 1-column VS 3-column display
// - listen to scroll events and trigger loading additional images

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