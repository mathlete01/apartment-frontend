import React, { useState } from "react"
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import {FaRegThumbsUp} from "react-icons/fa"
import {FaRegThumbsDown} from "react-icons/fa"
import {FaThumbsUp} from "react-icons/fa"
import {FaThumbsDown} from "react-icons/fa"
import {BiRadioCircle} from "react-icons/bi"
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Tile = ({apartment}) => {

    //like / dislike buttons
    const [display, setDisplay] = useState("notdisplayed");
    const showButton = e => {
        e.preventDefault();
        setDisplay("displayed");
    };

    const hideButton = e => {
        e.preventDefault();
        setDisplay("notdisplayed");
    };

    const [like, setLiked] = useState(false)
    const handleLike = e => {
        setLiked(!like)
    }

    const [dislike, setDisliked] = useState(false)
    const handleDislike = e => {
      setDisliked(!dislike)
      //remove this apartment from the tile stack 
    }

    //controlled carousel 
    const renderCarousel = () => {
        return apartment.images.map(image => 
        <Carousel.Item>
            <img
                className="cardImage" 
                src={image.url}
                alt="uh oh!"
                key={image.url}
            />
        </Carousel.Item>)
    }

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    //handling modal 
    const [modalShow, setModalShow] = useState(false)

    function CenteredModal(props) {
        return (
          <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={false}
            scrollable={true}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {apartment.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel activeIndex={index} onSelect={handleSelect} interval={null} slide={true}>
                {renderCarousel()}
                </Carousel>
              <div className="d-flex justify-content-around" style={{height: '60px'}}> 
                {dislike === true ? <FaThumbsDown color="red" size="35px" onClick={handleDislike} className="align-self-center"/> : <FaRegThumbsDown color="red" size="35px" onClick={handleDislike} className="align-self-center"/> }
                {like === true ? <FaThumbsUp color="green" size="35px" onClick={handleLike} className="align-self-center"/> : <FaRegThumbsUp color="green" size="35px" onClick={handleLike} className="align-self-center"/>}
              </div>
              <h4>Description</h4>
              <ul>
                  <li>${apartment.price}/month</li> 
                  <li>{apartment.bedrooms} bed {apartment.bathrooms} bath</li>
                  <li>{apartment.square_feet} square feet</li>
              </ul>
              <p>
                {apartment.description}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    const handleClick = (e) => {
      if (e.target.tagName === 'SPAN' || e.target.tagName === 'LI' || e.target.tagName === 'svg' || e.target.tagName === 'path') return
      setModalShow(true)
    }

    return (
        <>
        <Card className="shadow" onMouseEnter={e => showButton(e)} onMouseLeave={e => hideButton(e)} onClick={ handleClick }>
            <Carousel className='flex-grow-1' activeIndex={index} onSelect={handleSelect} interval={null}>
                {renderCarousel()}
            </Carousel>
            <Container className="spec-container d-flex justify-content-between align-items-center border-bottom">
                <span>{apartment.bedrooms} bed {apartment.bathrooms} bath</span>
                <BiRadioCircle/>
                <span>{apartment.square_feet} sq. ft.</span>
                <BiRadioCircle/>
                <span>${apartment.price}</span>
            </Container>
            <div className="d-flex justify-content-between align-items-center">
                {dislike === true ? <FaThumbsDown color="red" size="35px" onClick={handleDislike}/> : <FaRegThumbsDown color="red" size="35px" onClick={handleDislike}/> }
                <h6 className='card-title' style={{width: '20rem'}}>{apartment.title}</h6>
                {like === true ? <FaThumbsUp color="green" size="35px" onClick={handleLike}/> : <FaRegThumbsUp color="green" size="35px" onClick={handleLike}/>}    
            </div>
        </Card>
        <CenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        </>
    );
}

export default Tile;