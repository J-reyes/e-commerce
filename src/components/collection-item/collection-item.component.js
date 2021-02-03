import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/button.component";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      {/* div to hold image */}
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      {/* Collection footer */}
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  // our additem function
  // will get an item as a propery
  addItem: (item) => dispatch(addItem(item)),
});

// pass 'null' since we are not mapping any state to props
export default connect(null, mapDispatchToProps)(CollectionItem);
