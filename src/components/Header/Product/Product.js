import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img ,name,seller,price,stock}=props.product;
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt=""/>
            </div>
            <div>
            <h4 className="product-name">{name}</h4>
            <br/>
            <p><small>By seller : {seller}</small></p>
            <p>${price}</p>
            <p>Only {stock} left in Stock- Order soon</p>
            <button onClick={()=>props.handleAddproduct(props.product)} className="main-button"><FontAwesomeIcon icon={faShoppingCart} />  Add to Cart</button>
            </div>

        </div>
    );
};

export default Product;