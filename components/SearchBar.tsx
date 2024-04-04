'use client'

import React, { useState } from 'react'

function SearchBar() {

  const [searchPrompt, setSearchPrompt] = useState('')

  return (
    <form 
      className="flex flex-wrap gap-4 mt-12" 
      onSubmit={() => {}}
    >
      <input 
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link"
        className="searchbar-input"
      />

      <button 
        type="submit" 
        className="searchbar-btn"
        disabled={searchPrompt === ''}
      >
        {false ? 'Searching...' : 'Search'}
      </button>
    </form>
  )
}

export default SearchBar