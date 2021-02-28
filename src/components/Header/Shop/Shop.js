import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Cart from '../../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [product,setProduct] = useState(first10);
    const [cart,setCart]=useState([]);

    const handleAddproduct=(product)=>{
        console.log("Product added",product);
        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container"> 
                {
                    product.map(pdct=><Product handleAddproduct={handleAddproduct} product={pdct}></Product>)
                }   
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;