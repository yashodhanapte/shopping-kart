import React, { useState } from 'react'

const Home = ({ name }) => {
  // const [nameValue, setNameValue] = useState(name);

  const handleNameChange = (e) => {
    // setNameValue(e.target.value);
    
  }
  return (
    <div>
      <h1>{name ? name : null}</h1>
      <input value={name} onChange={handleNameChange} />
      

    </div>

  )
}

export default Home
