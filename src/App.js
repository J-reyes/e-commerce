import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import CurrentUserContext from "./contexts/current-user/current-user.context";

class App extends React.Component {
  constructor() {
    super();

    // local state
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // if user exists
      if (userAuth) {
        // use userRef returned from createUserProfileDocument
        const userRef = await createUserProfileDocument(userAuth);

        // listens(checks) to see if ref has been updated w/ new data
        userRef.onSnapshot((snapShot) => {
          // setting the user reducer value when
          // snapshot value updates
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        // else use doesn't yet exist
        // setState
        this.setState({ currentUser: userAuth });
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
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header />
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.state.currentUser ? (
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

export default App;
