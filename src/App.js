import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login"
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from "./store/FirebaseContext";
import Post from "./store/PostContext";


function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  
  useEffect(()=>{
firebase.auth().onAuthStateChanged((user)=>{
  setUser(user)
})
  })
  return (
   <Post>
      <Router>
        <div>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/view">
            < View/>
          </Route>
        </div>
      </Router>
   </Post>
  );
}

export default App;
