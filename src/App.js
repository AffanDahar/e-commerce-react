import React from 'react'
import './App.css';
import Homepage from './pages/homepage/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Hats from './pages/Hats';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignupSignin from './pages/signup-signin/signup-signin';
function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
     <Switch>
       <Route exact path='/' component={Homepage}/>
       <Route exact path='/shop' component={Shop}/>
       <Route path='/shop/hats' component={Hats}/>
       <Route path='/signin' component={SignupSignin}/>
     </Switch>
    </Router>
    
    </div>
  );
}

export default App;
