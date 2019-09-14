import React from 'react'

const Images = ({ images }) => {
  return (
    <ul>
      {images.map(image => (
        <li key={image}>
          <img src={image} />
        </li>
      ))}
    </ul>
  )
}

export default Images