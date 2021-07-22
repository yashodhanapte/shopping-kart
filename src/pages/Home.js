import React, { useState } from 'react'

const Home = (props) => {
  // const [nameValue, setNameValue] = useState(name);
  const {name}=props
  console.log(props)
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
