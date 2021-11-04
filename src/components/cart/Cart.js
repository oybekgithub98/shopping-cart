import React from 'react';
import './Cart.css';
import StripeCheckout from "react-stripe-checkout";

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct }) => {


    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);



    return (
        <div className="cart">
            <div className="cart_header">
                cart items
                {
                    cartItems.quantity
                }
            </div>
            {
                cartItems.length === 0 && (
                    <div className="cart_items_empty">No items are added</div>
                )
            }
            <div>
                {cartItems.map((item) => {
                    return (
                        <>
                            <div key={item.id} className="cart_items_list">
                                <img className="cart_items_image" src={item.image} alt={item.name} />
                                <div className="cart_items_name">{item.name}</div>
                                <div className="cart_items_function">
                                    <button className="cart_item_add" onClick={() => handleAddProduct(item)}>+</button>
                                    <button className="cart_item_remove" onClick={() => handleRemoveProduct(item)}>-</button>
                                </div>
                                <div className="cart_items_price">
                                    {item.quantity} * ${item.price}
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
            <div className="cart_items_total_price_name">
                {
                    ! cartItems.length ? <p>Total price</p> : <div className="cart_items_total_price">${totalPrice}</div>
                }
                

                {
                    !cartItems.length ?
                        <div className="cart_items_total_price">${totalPrice}</div>
                        :
                        <div>
                            <StripeCheckout
                                stripeKey="pk_test_HnF0cQhq9UGw2GvWRltNiAQM00kn9HlRCg"
                                billingAddress
                                shippingAddress
                                name="all products in the cart"
                            />
                        </div>

                }

            </div>
        </div>
    )


}

export default Cart;