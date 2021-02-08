import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/login">Login</Link>
                      </li>
                  </ul>
              </nav>
              <Switch>
                  <Route exact path="/" component={Welcome}/>
                  <Route path="/login" component={Login}/>
              </Switch>
          </div>
      </Router>
    </>
  );
}

export default App;
