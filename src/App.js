import MainNavbar from "./components/MainNavbar";
import Login from "./pages/Login";
import Practice from "./pages/Practice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './app.css';

function App() {
  return (
    <>
      <Router>
        <MainNavbar sx={{mb: 8}} />
        <Switch>
          <Route exact path="/">
            <Practice />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
