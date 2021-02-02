import React from "react";
import { Link } from "react-router-dom";
// Higher order component (takes component as an argument)
import { connect } from "react-redux";

// auth library
import { auth } from "../../firebase/firebase.utils";
// cart related components
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

// currentUser prop from auth library
const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      {/* nav links */}
      <div className="options">
        <Link className="option" to="">
          SHOP
        </Link>
        <Link className="option" to="">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

// state is the root reducer
// destructure nested values from our state
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  //  root reducer -> gives us userReducer -> then we get currentUser value from user.reducer.js
  // currentUser: state.user.currentUser,
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
