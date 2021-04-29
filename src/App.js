import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CardNote from "./my-apps/CardNote/CardNote";
import ColorGenerator from "./my-apps/Color-Generator/ColorGenerator";
import Signup from "./my-apps/CardNote/components/Signup";
import Login from "./my-apps/CardNote/components/Login";
import { AuthProvider } from "./my-apps/CardNote/context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>Good this is home page</h1>
            <h4>
              <h2>Note: </h2> This is temporary! after next time, use direct
              <a href="https://devanshukushwah.web.app/cardnote">
                https://devanshukushwah.web.app/cardnote
              </a>
            </h4>
            <Link to="/cardnote">CardNote</Link>
            <br></br>
            <Link to="/colorgenerator">color-generator</Link>
          </Route>
          <PrivateRoute exact path="/cardnote/" component={CardNote} />
          <Route exact path="/cardnote/signup">
            <Signup />
          </Route>
          <Route exact path="/cardnote/login">
            <Login />
          </Route>
          <Route exact path="/colorgenerator">
            <ColorGenerator />
          </Route>
          <Route path="*">
            <h1>Page not exists...</h1>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
