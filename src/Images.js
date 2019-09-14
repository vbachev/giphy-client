import React from 'react'
import Image from './Image'

// @TODO:
// - listen to scroll events and trigger loading additional images
// - display layout buttons (grid/list)

const Images = ({ images, keyword, total }) => {
  return (
    <div className='images-container'>
      <div className='images-summary'>
        <span className='images-keyword'>{keyword}</span>
        <span className='images-total'>{total} GIFs</span>
      </div>
      <ul className='images-list'>
        {images.map(image => (
          <li key={image.title}>
            <Image {...image} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Images