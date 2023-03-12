import React from 'react';
import { Link } from 'react-router-dom';
import AddToCart from './AddToCart';

function Card(props) {

    return (
        <div className="card" onClick={props.handleClick}>
            <Link to={props.title}> <img src={props.src} alt={props.title} onClick={props.handleItemClick} /></Link>
            <div className="card-title">{props.title}</div>
            <AddToCart />
        </div>
    );
}

export default Card;
