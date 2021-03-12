import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import {firestore, convertCollectinosSnapshotToMap} from '../../firebase/firebase.utils';

class ShopPage extends React.Component {
  
  unsubscribeFromSnapShot = null;

  // fetch snapshot of the collection array using componentDidMount
  componentDidMount() {
    const collectionRef = firestore.collection('collections');

    // get data when ever collectionRef updates
    // or code runs for thhe first time -> ref will send us the snapshot 
    collectionRef.onSnapshot(async snapshot => {
      convertCollectinosSnapshotToMap(snapshot)
    })
  }
  
  render() {
    const {match} = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        {/* dynamically get the correct category from reducer */}
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

export default ShopPage;
