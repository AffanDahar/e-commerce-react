import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase-utils";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import "./header.style.scss";
import CartIcon from "../carticon/CartIcon";
import CartDropdown from "../cartDropdown/CartDropdown";
import { selectCurrentUser } from "../../reducers/userReducer/userSelect";
import { selectCartHidden } from "../../reducers/cart/cartSelector";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {!currentUser ? (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      ) : (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
