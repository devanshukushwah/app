import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CardNote from "./my-apps/CardNote/CardNote";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Good this is home page</h1>

          <h4 style={{ display: "flex" }}>
            <h2>Note: </h2> This is temporary! after next time, use direct
            <a href="https://devanshukushwah.web.app/cardnote">
              https://devanshukushwah.web.app/cardnote
            </a>
          </h4>
          <Link to="/cardnote">CardNote</Link>
        </Route>
        <Route exact path="/cardnote">
          <CardNote />
        </Route>
        <Route path="*">
          <h1>Page not exists...</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
