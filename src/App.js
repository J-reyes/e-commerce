import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
// redux
import { connect } from "react-redux";
// auto passes state by pointing to the correct selector
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// action from redux
import { setCurrentUser } from "./redux/user/user.actions";

// selector
import { selectCurrentUser } from "./redux/user/user.selector";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // if user exists
      if (userAuth) {
        // use userRef returned from createUserProfileDocument
        const userRef = await createUserProfileDocument(userAuth);

        // listens(checks) to see if ref has been updated w/ new data
        userRef.onSnapshot((snapShot) => {
          // setting the user reducer value when
          // snapshot value updates
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        // we just need the object
        setCurrentUser(userAuth);
      }
    });
  }

  // remove subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
