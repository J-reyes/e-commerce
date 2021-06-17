import React, { useContext } from "react";

import "./checkout-item.styles.scss";

import { CartContext } from "../../providers/cart/cart.providers";

import {
  CheckOutItemContainer,
  ImageContainer,
  TextSpan,
  QuantityContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles";

// pass in full item instead of spreading props & spread its objects
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);

  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextSpan>{name}</TextSpan>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextSpan>{price}</TextSpan>
      <RemoveButtonContainer
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckOutItemContainer>
  );
};

export default CheckoutItem;
