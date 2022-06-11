import React from "react";
import CardUser from "./CardUser";
function List({ users, showName }) {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "space-around",
        marginTop: "300px",
      }}
    >
      {users.map((element, index) => (
        <CardUser key={index} element={element} showName={showName} />
      ))}
    </div>
  );
}

export default List;
