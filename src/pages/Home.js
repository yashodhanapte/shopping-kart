import React from 'react'

const Home = ({setName, name}) => {
  const handleNameChange = (e) => {
    if(setName){
      setName(e.target.value)
    }
  }
  return (
    <div>
      <h1>{name ? name : null}</h1>
      <input value={name} onChange={handleNameChange} />
      

    </div>

  )
}

export default Home
