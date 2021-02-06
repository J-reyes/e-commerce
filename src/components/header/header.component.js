import React from "react";
import { Link } from "react-router-dom";
// Higher order component (takes component as an argument)
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// auth library
import { auth } from "../../firebase/firebase.utils";
// cart related components
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

// selectors
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

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
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
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

// pass in entire state instead of just a portion
const mapStateToProps = createStructuredSelector({
  // createStructuredSelector points to the correct selector and auto passes our top level state
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
