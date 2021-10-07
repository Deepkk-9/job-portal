import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import ForgotPassword from "./components/Forgot Password/forgotPassword";
import UserSignIn from './components/Sign Up/userSignIn';

function App() {
  return (
    <Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      
      <Switch>
          <Route exact path="/ForgotPassword">
              <ForgotPassword />
          </Route>
          <Route exact path="/">
              <UserSignIn />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
