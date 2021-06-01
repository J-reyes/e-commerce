import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionFooterContainer,
  CollectionItemContainer,
  BackgroundImage,
  AddButton,
  NameContainer,
  PriceContainer
} from './collection-item.styles'

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      {/* div to hold image */}
      <BackgroundImage className='image' imageUrl={imageUrl}/>
      {/* Collection footer */}
      <CollectionFooterContainer >
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  // our additem function
  // will get an item as a propery
  addItem: (item) => dispatch(addItem(item)),
});

// pass 'null' since we are not mapping any state to props
export default connect(null, mapDispatchToProps)(CollectionItem);
