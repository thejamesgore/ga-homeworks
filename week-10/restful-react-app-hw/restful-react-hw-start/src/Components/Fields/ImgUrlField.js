import React from 'react'

const ImageUrlField = ({ image, handleChange }) => {
  return (
    <div className="field">
      <label className="label">
        <span role="img" aria-label="image">
          🖼
        </span>
        Image URL
      </label>
      <div className="control">
        <textarea
          className="input"
          placeholder="Image URL"
          name="image"
          value={image}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default ImageUrlField
