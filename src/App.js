import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      // track user subscription
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
          console.log(snapShot);
          // setState w/ user Object
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                // rest of the users props
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        // if user logs out set to null
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
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
