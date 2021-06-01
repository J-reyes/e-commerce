import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
// helps with HOC

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
// High Order Component
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  // passing this value into our WithSpinner component
  isLoading: selectIsCollectionFetching,
});

// WithSpinner wraps CollectionOverview
// which will then get passed to the connect
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
