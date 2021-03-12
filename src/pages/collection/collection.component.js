import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  // Destructure collection
  const { title, items } = collection;
  console.log(collection);
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// ownProps are the props from the component we wrap in connect()
const mapStateToProps = (state, ownProps) => ({
  // adding state here is necessary because this selector needs a part
  //  of the state depending on the URL parameter
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  // ^^ we are passing the function returned by the function - state as a prop
});

export default connect(mapStateToProps)(CollectionPage);
