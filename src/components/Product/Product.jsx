import React from 'react';
import './product.css'

const Product = (props) => {
    console.log(props.product)
    const { img, name, price, ratings, seller } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h5 className='product-name'>{name}</h5>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} start</p>
            </div>
            <button className='btn-cart'>Add To Card</button>
        </div>
    );
};

export default Product;