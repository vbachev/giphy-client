import React from 'react'
import Image from './Image'

// @TODO:
// - listen to scroll events and trigger loading additional images
// - move layout state up to App
// - fix mobile layout

const Images = ({ images, keyword, total }) => {
  const [layout, setLayout] = React.useState('list')
  return (
    <div className={`images-container layout-${layout}`}>

      <div className='images-layout'>
        Display as:
        <button className='layout-button layout-grid' onClick={() => setLayout('grid')}>
          Grid
        </button>
        <button className='layout-button layout-list' onClick={() => setLayout('list')}>
          List
        </button>
      </div>

      <div className='images-summary'>
        <span className='images-keyword'>
          {keyword}
        </span>
        <span className='images-total'>
          {total} GIFs
        </span>
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