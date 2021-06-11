import React from 'react';
import { Button,Card ,Container,Row,Col} from 'react-bootstrap';

import "../css/FeedCard.css";
const FeedCard = ({ categorie}) => {
    console.log("cat========>",categorie)
    return (
        <div >
            <Container>
            <Card className="card">
           <Card.Img variant="top" style={{width:"80px",margin:"20px 100px 10px"}}   src={"/images/dog.jpg"}  />
            <Card.Body>
            <Card.Title style={{width:"80px",margin:"10px 100px 5px"}}>{categorie.name}</Card.Title>
            <a  style={{width:"80px",margin:"10px 100px 5px"}} href="#"> ANNONCES {categorie.name}</a>

            <Card.Text>
             <br/>
             </Card.Text>
             </Card.Body>
             </Card>
             </Container>

</div>
    )
}

export default FeedCard