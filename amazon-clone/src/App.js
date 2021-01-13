import "./App.css";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect
  // Piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out..

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //cleanup
      unsubscribe();
    };
  }, []);

  console.log(user);

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
