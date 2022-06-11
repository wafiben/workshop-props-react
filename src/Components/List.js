import React from "react";

function List({ users }) {
  return (
    <div style={{ textAlign: "center" }}>
      {users.map((element, index) => (
        <div  key={index}>
          <h1>{element.name}</h1>
          <p>{element.email}</p>
        </div>
      ))}
    </div>
  );
}

export default List;
