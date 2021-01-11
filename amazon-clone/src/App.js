import "./App.css";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import Header from "./Header";

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>Home Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
