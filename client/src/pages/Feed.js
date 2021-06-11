import React, { useEffect } from "react";
import { loadUser } from "../actions/authActions";
import { getAllCategorie } from "../actions/categorieActions";
import { useDispatch, useSelector } from "react-redux";
import {Container,Row,Col} from 'react-bootstrap'
import FeedCard from "./FeedCard";

const Feed = () => {

  const dispatch = useDispatch();
  const auth         = useSelector((state) => state.auth);
  const categories   =useSelector((state)=>state.catR.categories);
  useEffect(() => {
    dispatch(loadUser());
    dispatch(getAllCategorie())
    console.log('All cat',categories)
  }, []);
  return (
           
    <Container style={{marginTop:'100px'}}>
    <Row>
    {    categories ?  categories.map(el=> 
    <Col xl={4}>
     <FeedCard categorie={el} /> 
     </Col>
     ) : null
     }
    </Row >
    </Container>
)
}

export default Feed;
