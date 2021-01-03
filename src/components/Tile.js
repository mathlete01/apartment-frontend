// import React from 'react';
import React, { useState } from "react"
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import {FaRegThumbsUp} from "react-icons/fa"
import {FaRegThumbsDown} from "react-icons/fa"
import {BiRadioCircle} from "react-icons/bi"
import Carousel from 'react-bootstrap/Carousel'

const Tile = ({apartment}) => {
    const [display, setDisplay] = useState("notdisplayed");
    const showButton = e => {
        e.preventDefault();
        setDisplay("displayed");
    };

    const hideButton = e => {
        e.preventDefault();
        setDisplay("notdisplayed");
    };

    const renderCarousel = () => {
        return apartment.images.map(image => 
        <Carousel.Item>
            <img
                className="cardImage" 
                src={image.url}
            />
        </Carousel.Item>)
    }

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  

    return (
        <Card style={{ width: '30rem' }} className="shadow" onMouseEnter={e => showButton(e)} onMouseLeave={e => hideButton(e)}>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                {renderCarousel()}
            </Carousel>
            <Container className="d-flex justify-content-between border-bottom flex-grow-1 align-items-center">
                <span>{apartment.bedrooms} bed {apartment.bathrooms} bath</span>
                <BiRadioCircle/>
                <span>{apartment.square_feet} sq. ft.</span>
                <BiRadioCircle/>
                <span>${apartment.price}</span>
            </Container>
            <div className="d-flex justify-content-between flex-grow-1 align-items-center">    
                <FaRegThumbsUp color="green" size="35px" className={display}/>
                <h5>{apartment.title} </h5>
                <FaRegThumbsDown color="red" size="35px" className={display}/>
            </div>
        </Card>
    );
}

export default Tile;