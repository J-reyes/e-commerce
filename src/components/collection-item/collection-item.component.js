import React, { useContext } from "react";
import { CartContext } from "../../providers/cart/cart.providers";

import {
  CollectionFooterContainer,
  CollectionItemContainer,
  BackgroundImage,
  AddButton,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);

  return (
    <CollectionItemContainer>
      {/* div to hold image */}
      <BackgroundImage className="image" imageUrl={imageUrl} />
      {/* Collection footer */}
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

// pass 'null' since we are not mapping any state to props
export default CollectionItem;
