import React from 'react'

const WineNameField = ({ name, handleChange }) => {
  return (
    <div className="field">
      <label className="label">
        <span role="img" aria-label="Wine">
          🍷
        </span>
        Name
      </label>
      <div className="control">
        <input
          className="input"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default WineNameField
