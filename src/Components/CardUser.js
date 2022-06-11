import React from "react";
import { Button, Card } from "react-bootstrap";

function CardUser({ element, showName }) {
    
    const handleClick=()=>{
        showName(element.name);
    }
  return (
    <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={element.img} />
      <Card.Body>
        <Card.Title>{element.name}</Card.Title>
        <Card.Title>{element.email}</Card.Title>

        <Button variant="primary" onClick={handleClick}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardUser;
