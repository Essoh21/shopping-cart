import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import addToCartAndReturnCart from '../../functions/addToCartAndReturnCart';
import AddToCart from './AddToCart';

function Card(props) {

    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedData = localStorage.getItem("cart");
        if (storedData) {
            setCart(JSON.parse(storedData));
        }
    }, [])


    const handleAddToCart = (currentItem) => {
        const updatedCart = addToCartAndReturnCart(currentItem, cart);
        setCart(updatedCart);
    }
    return (
        <div className="card">
            <Link to={"Item/" + props.title}> <img src={props.src} alt={props.title} onClick={props.handleItemClick} /></Link>
            <div className="card-title">{props.title}</div>
            <AddToCart handleAddToCartClick={() => handleAddToCart(props.currentItem)} />
        </div>
    );
}

export default Card;
