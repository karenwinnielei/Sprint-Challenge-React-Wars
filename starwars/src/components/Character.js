// Write your Character component here
import React from 'react'
import {Card} from './Styled'


const Character = props => {
    
    return (
        <Card>
            <img src = {props.image} alt = "Rick & Morty character"></img>
            <h2>{props.name}</h2>
            <p>Status: {props.status}</p>
            <p>Species: {props.species}</p>
            <p>Gender: {props.gender} </p>
        </Card>
    )
}

export default Character