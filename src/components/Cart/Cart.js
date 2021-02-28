import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    const total=cart.reduce((total,prd)=> total+prd.price,0)
    let shipping =0;
    const tax=Math.round(total/10);
    if(total>35){
        shipping=0;
    }
    else if(total>15){
        shipping=4.99;
    }
    else if(total>0){
        shipping=12.99;
    }
    return (
        <div>
            <h2>Order Sammary</h2>
            <p>Item Odered {cart.length}</p>
            <p><small>Shipping Cost : ${shipping}</small></p>
            <p><small>Tax fees : ${tax}</small></p>
            <p>Product Price : ${Math.round(total)}</p>

        </div>
    );
};

export default Cart;