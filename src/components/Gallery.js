import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'

// @TODO:
// - fix mobile layout

const Gallery = ({ images, keyword, totalImages, layout, onLayoutChange }) => {
  return (
    <div className={`images-container layout-${layout}`}>

      <div className='images-layout'>
        Display as:
        <button className='layout-button layout-grid' onClick={() => onLayoutChange('grid')}>
          Grid
        </button>
        <button className='layout-button layout-list' onClick={() => onLayoutChange('list')}>
          List
        </button>
      </div>

      <div className='images-summary'>
        <span className='images-keyword'>
          {keyword}
        </span>
        <span className='images-total'>
          {totalImages} GIFs
        </span>
      </div>

      <ul className='images-list'>
        {images.map(image => (
          <li key={image.id}>
            <Image {...image} />
          </li>
        ))}
      </ul>
    </div>
  )
}

const { string, number, func, arrayOf, shape } = PropTypes
Gallery.propTypes = {
  images: arrayOf(shape({
    id: string
  })).isRequired,
  keyword: string.isRequired,
  totalImages: number.isRequired,
  layout: string.isRequired,
  onLayoutChange: func.isRequired
}

export default Gallery
