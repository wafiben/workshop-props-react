import React from 'react';


function List({user,age,person,sayHello}) {
    const handleClick=()=>{
        sayHello(user);
    }
  
  return (
    <div style={{textAlign: 'center'}}>
    
    <h1>{user}</h1>
    <h2>{age}</h2>
    <h3>{person.name}</h3>
    <button onClick={handleClick}>say hello</button>
    </div>
  )
}

export default List