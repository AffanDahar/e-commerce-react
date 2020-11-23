import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hats from "./pages/Hats";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignupSignin from "./pages/signup-signin/signup-signin";
import { auth, createUserProfileDocument } from "./firebase-utils";
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( async userAuth => {

      console.log(userAuth)
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          console.log(snapshot.data())
          setCurrentUser({
            id : snapshot.id,
            ...snapshot.data()
          })
          
        })
         setCurrentUser(userAuth)
      }
    });
    return () => {
      unsubscribe();
    };
  }, [setCurrentUser]);
  return (
    <div className="App">
    
      <Router>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/hats" component={Hats} />
          <Route path="/signin" component={SignupSignin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
