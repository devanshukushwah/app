import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardNote from "./my-apps/CardNote/CardNote";
import ColorGenerator from "./my-apps/Color-Generator/ColorGenerator";
import Signup from "./my-apps/CardNote/components/Signup";
import Login from "./my-apps/CardNote/components/Login";
import { AuthProvider } from "./my-apps/CardNote/context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./components/home/Home";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
  }, []);
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute exact path="/cardnote" component={CardNote} />
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
