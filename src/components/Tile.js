import React from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import {FaRegThumbsUp} from "react-icons/fa"
import {FaRegThumbsDown} from "react-icons/fa"
import {BiRadioCircle} from "react-icons/bi"

const Tile = ({apartment}) => {

    return (
        <Card style={{ width: '30rem' }} className="shadow">
            <Card.Img className="cardImage" variant="top" src={apartment.images[0].url} />
            <Container className="d-flex justify-content-between">
                <span>{apartment.bedrooms} bedrooms</span>
                <span>{apartment.bathrooms} bathrooms</span>
                <BiRadioCircle/>
                <span>{apartment.square_feet} square feet</span>
                <span>${apartment.price}</span>
            </Container>
            <div className="d-flex justify-content-between">    
                <FaRegThumbsUp color="green" size="35px"/>
                <h5 style={{width: '20rem'}}>{apartment.title}</h5>
                <FaRegThumbsDown color="red" size="35px"/>
            </div>
        </Card>
    );
}

export default Tile;

// 