// Write your Character component here
import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styled from 'styled-components'


const Character = props => {
    
    return (
        <div>
        <Card>
        <CardImg top width="100%" src={props.image} />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.status}</CardSubtitle>
          <CardText>{props.species}</CardText>
          <CardText>{props.gender}</CardText>
        </CardBody>
      </Card>
            {/* <img src = {props.image}></img>
            <h2>{props.name}</h2>
            <p>{props.status}</p>
            <p>{props.species}</p>
            <p>{props.gender} </p> */}
        </div>
    )
}

export default Character