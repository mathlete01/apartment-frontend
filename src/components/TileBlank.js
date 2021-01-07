import React from 'react';
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'

const TileBlank = () => {

    return (
        <Card className="tile d-flex justify-content-center align-items-stretch container" >
            {/* <Carousel className='flex-grow-1'>
                <Carousel.Item>
                    <h4 className='cardImage'>Apartment Not found</h4>
                </Carousel.Item> */}
            {/* </Carousel> */}
            <Container className="spec-container d-flex justify-content-between align-items-center border-bottom">
            </Container>
            <div className="d-flex justify-content-between align-items-center">
                <h6 className='card-title' style={{width: '20rem'}}></h6>
            </div>
        </Card>
    );
}

export default TileBlank;