import React from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import {FaRegThumbsUp} from "react-icons/fa"
import {FaRegThumbsDown} from "react-icons/fa"
import {BiRadioCircle} from "react-icons/bi"

const Tile = ({apartment}) => {

    return (
        <Card style={{ width: '30rem', height: '14rem' }} className="shadow">
            <Card.Img className="cardImage" variant="top" src={apartment.images[0].url} />
            <Container className="spec-container d-flex justify-content-between align-items-center border-bottom">
                <span>{apartment.bedrooms} bed {apartment.bathrooms} bath</span>
                <BiRadioCircle/>
                <span>{apartment.square_feet} sq. ft.</span>
                <BiRadioCircle/>
                <span>${apartment.price}</span>
            </Container>
            <div className="d-flex justify-content-between align-items-center">    
                <FaRegThumbsUp color="green" size="35px"/>
                <h6 className='card-title' style={{width: '20rem'}}>{apartment.title}</h6>
                <FaRegThumbsDown color="red" size="35px"/>
            </div>
        </Card>
    );
}

export default Tile;

// 