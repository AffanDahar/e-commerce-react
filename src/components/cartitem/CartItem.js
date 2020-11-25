import React from "react";
import "./cart-item.style.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt='cart-pic' />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>{quantity} * ${price}</span>
      </div>
    </div>
  );
};

export default CartItem;
