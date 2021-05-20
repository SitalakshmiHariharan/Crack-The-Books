import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'

const CourseDetail =(props) =>{
    return(
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>      
                </Card.Body>
                <Card.Footer>
                    <Button variant="warning"><Link to='/enquire'> Enquire </Link></Button>
                </Card.Footer>
            </Card>  
        </CardDeck>
    )
}

export default CourseDetail;



/*
<Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Button variant="warning"><Link to='/enquire'> Enquire </Link></Button>
            </Card.Body>
        </Card>*/


