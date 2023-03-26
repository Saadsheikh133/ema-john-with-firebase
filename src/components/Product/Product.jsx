import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const handleAddToCart = props?.handleAddToCart;
    const { img, name, price, ratings, seller } = props?.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h5 className='product-name'>{name}</h5>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} start</p>
            </div>
            <button onClick={() =>handleAddToCart(props.product)} className='btn-cart'>
                Add To Card
                <FontAwesomeIcon icon={faCartShopping} />
                </button>
        </div>
    );
};

export default Product;