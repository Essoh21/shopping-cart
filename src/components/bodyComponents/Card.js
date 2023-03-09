import React from 'react';
import AddToCart from './AddToCart';

function Card(props) {

    return (
        <div className="card" onClick={props.handleClick}>
            <img src={props.src} alt={props.title} onClick={props.handleItemClick} />
            <div className="card-title">{props.title}</div>
            <AddToCart />
        </div>
    );
}

export default Card;
