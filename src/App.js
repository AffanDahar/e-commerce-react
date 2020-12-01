import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignupSignin from "./pages/signup-signin/signup-signin";
import { auth, createUserProfileDocument } from "./firebase-utils";
import { setCurrentUser } from "./reducers/userReducer/userActions";
import { selectCurrentUser } from "./reducers/userReducer/userSelect";
import Checkout from "./pages/checkout/Checkout";
import { createStructuredSelector } from "reselect";

function App({ setCurrentUser, currentUser }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          console.log(snapshot.data());
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [setCurrentUser]);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignupSignin />
            }
          />
        </Switch>
      </Router>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
