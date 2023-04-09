import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    // console.log(product)
    const {id, category, price, shipping, img } = product;
    return (
        <div className='review-items'>
            <img src={img} alt="" />
            <div className='text'>
                <h4>{category}</h4>
                <p>Price: ${price}</p>
                <p>Shipping: ${shipping}</p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)}>X</button>
        </div>
    );
};

export default ReviewItem;