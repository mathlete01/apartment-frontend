import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import Container from 'react-bootstrap/Container'
import { Container } from 'reactstrap';
// import Carousel from 'react-bootstrap/Carousel'


//description only available on TileDetails component
//like buttons on hover, show TileDetails on div click or separate button ? 
//arrow buttons on the images div to scroll through images
//if some data is nil, don't render ?
//use Card component from React Bootstrap
//use carousel for the images 

const Tile = ({apartment}) => {
// const Tile = (props) => {
    // debugger
    // console.log(apartment.images)
    return (
        <Card style={{ width: '30rem' }} className="shadow">
            <Card.Img className="cardImage" variant="top" src={apartment.images[0].url} />
            <Container className="d-flex justify-content-between">
                <span>{apartment.bedrooms} bedrooms</span>
                <span>{apartment.bathrooms} bathrooms</span>
                <span>o</span>
                <span>{apartment.square_feet} square feet</span>
                <span>${apartment.price}</span>
            </Container>
            <div className="d-flex justify-content-between">
                <i class="far fa-thumbs-up"></i>
                <h5 style={{width: '20rem'}}>{apartment.title}</h5>
                <Button> Dislike </Button>
            </div>
        </Card>
    );
}

export default Tile;

// 