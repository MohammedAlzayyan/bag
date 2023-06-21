import React, { useState } from 'react'

function SearchForm({ value, onSearch }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(input)
    setInput('')
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="User Name"
          value={input.name}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  )
}

export default SearchForm
