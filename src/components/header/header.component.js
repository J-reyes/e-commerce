import React, { useContext, useState } from "react";
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
// contexts
import CurrentUserContext from "../../contexts/current-user/current-user.context";
import CartContext from "../../contexts/cart/cart.context";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  // need state to be in the parent container
  const [hidden, setHidden] = useState(true);
  // toggle to opposite value + gets passed as the new function
  // inside our cart.context
  const toggleHidden = () => setHidden(!hidden);

  return (
    <HeaderContainer>
      <LogoContainer className="logo-container" to="/">
        <Logo className="logo" />
      </LogoContainer>
      {/* nav links */}
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink className="option" to="/signin">
            SIGN IN
          </OptionLink>
        )}

        <CartContext.Provider value={{ hidden, toggleHidden }}>
          <CartIcon />
        </CartContext.Provider>
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

// pass in entire state instead of just a portion
const mapStateToProps = createStructuredSelector({
  // createStructuredSelector points to the correct selector and auto passes our top level state
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
