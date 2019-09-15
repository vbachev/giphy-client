import React from 'react'
import PropTypes from 'prop-types'

// @TODO:
// - animation while loading
// - lazy-load when in viewport
// - display title, user avatar and user name on hover

const Image = ({ url, width, height, title }) => {
  return (
    <div className='image-container'>
      <img className='image' src={url} width={width} height={height} alt={title} />
    </div>
  )
}

const { string, number } = PropTypes
Image.propTypes = {
  url: string.isRequired,
  width: string,
  heigt: string,
  title: string.isRequired
}

export default Image
