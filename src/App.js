import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ForgotPassword from "./components/Forgot Password/ForgotPassword";
import UserSignIn from './components/Sign In/UserSignIn';
import UserSignUp from './components/Sign Up/UserSignUp';

function App() {
  return (
    <Router>
      
      <Switch>
          <Route exact path="/">
              <UserSignIn />
          </Route>

          <Route exact path="/ForgotPassword">
              <ForgotPassword />
          </Route>

          <Route exact path="/UserSignUp">
              <UserSignUp />
          </Route>

      </Switch>
    </Router>
  );
}

export default App;
