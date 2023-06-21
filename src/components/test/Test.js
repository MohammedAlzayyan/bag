import React, { useState } from 'react'
import GitHubUser from './GitHubUser'
import SearchForm from './SearchForm'

const Test = () => {
  const [login, setLogin] = useState('')
  return (
    <div>
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
    </div>
  )
}

export default Test
