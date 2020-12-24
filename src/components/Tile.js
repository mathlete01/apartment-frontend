import React from 'react';
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
// import Carousel from 'react-bootstrap/Carousel'


//description only available on TileDetails component
//like buttons on hover, show TileDetails on div click or separate button ? 
//arrow buttons on the images div to scroll through images
//if some data is nil, don't render ?
//use Card component from React Bootstrap
//use carousel for the images 

const Tile = ({images},{title},{price},{square_feet},{bed},{bath},{showTileDetails},{handleLike},{handleDislike}) => {
// const Tile = (props) => {

    return (
        <div>
            <button onClick={showTileDetails}>Show Details</button>
            <div>
                <button> next image </button>
                <div>{images}</div>
                <button> prev image </button>
            </div>
            <div>
                <button onClick={handleLike}> Like </button>
                <button onClick={handleDislike}> Dislike </button>
            </div>
            <div>
                <span>{bed}</span>
                <span>{bath}</span>
                <span>{square_feet}</span>
                <span>{price}</span>
            </div>
            <h3>{title}</h3>
        </div>
    );
}

export default Tile;

