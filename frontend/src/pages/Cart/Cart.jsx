// import React from 'react'
import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  console.log(cartItems);
  console.log(food_list);
  return (
    <div className="cart">
      <div className="cart_items">
        <div className="cart_items_title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((elem, i) => {
          if (cartItems[elem._id] > 0) {
            return (
              <div key={i}>
                <div className="cart_items_title cart_items_item">
                  <img src={elem.image} alt="" />
                  <p>{elem.name}</p>
                  <p>${elem.price}</p>
                  <p>{cartItems[elem._id]}</p>
                  <p>${elem.price * cartItems[elem._id]}</p>
                  <p onClick={() => removeFromCart(elem._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart_bottom">
        <div className="cart_total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart_total_details">
              <p>Subtotal</p>
              <p>{0}</p>
            </div>
            <div className="cart_total_details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <b>Total</b>
              <b>{0}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart_promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart_promocode_input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
