import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.style.scss";
import CustomButton from "../custombutton/CustomButton";
import CartItem from "../cartitem/CartItem";
import { withRouter } from "react-router-dom";
import { selectCartItemsCount } from "../../reducers/cart/cartSelector";
import { showCart } from "../../reducers/cart/cartActions";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-cart">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(showCart());
        }}
      >
        Go to checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
