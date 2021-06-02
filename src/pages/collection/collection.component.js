import React, { useContext } from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";

import CollectionsContext from "../../contexts/collections/collections.context";

import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  // using useContext hook
  // pulls in the value collectionsContext is storing
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId]
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

export default CollectionPage;
