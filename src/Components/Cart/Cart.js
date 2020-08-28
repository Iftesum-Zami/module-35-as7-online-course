import React from 'react';
import './cart.css'

const Cart = (props) => {
    const course = props.cart;
    const totalPrice = course.reduce((total, product) => total + product.price, 0);
    return (
        <div>
            <h3>Order Summery</h3>
            <p>Course ordered: {course.length}</p>
            <h4 className="price">Total Cost: ${totalPrice}</h4>
            <button className="btn btn-secondary">Buy Now</button>
        </div>
    );
};

export default Cart;