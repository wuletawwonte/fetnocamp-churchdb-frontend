import MainNavbar from './components/MainNavbar';
import Login from './pages/Login';
import Practice from './pages/Practice';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return <>
  <Router>
    <MainNavbar />
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

}

export default App;
