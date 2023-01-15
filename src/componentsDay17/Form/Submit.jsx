import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import './RegForm.css'

const Submit = () => {
  return (
    <>
    <div className="main">
        <Card style={{ width: '18rem' }} className="container col-4">
        <Card.Body>
            <ListGroup>
                <ListGroup.Item>Name</ListGroup.Item>
                <ListGroup.Item>Dev Name</ListGroup.Item>
                <ListGroup.Item>Email</ListGroup.Item>
                <ListGroup.Item>Position</ListGroup.Item>
                <ListGroup.Item>Condition</ListGroup.Item>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </ListGroup>
        </Card.Body>
        </Card>
    </div>
    </>
  )
}

export default Submit