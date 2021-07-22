import React, {useEffect} from 'react';

const Home = ({setName, name, getAllUsers, allUsers}) => {

  useEffect(() => {
    if(getAllUsers){
      getAllUsers();
    }
  }, []);
  const handleNameChange = (e) => {
    if(setName){
      setName(e.target.value)
    }
  };
  return (
    <div>
      {/* fetching value from reducer directly */}
      <h1>{name ? name : null}</h1>

      {/* setting value in redux using action setName */}
      <input value={name} onChange={handleNameChange} />

      {/* api call from action, stored in reducer, method called in useEffect and displayed here */}
      <p>{allUsers && allUsers.data ?allUsers.data[0].name: 'not found bruh'}</p>

    </div>

  )
}

export default Home
