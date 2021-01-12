import "./App.css";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
