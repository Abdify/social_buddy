import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Home from "./components/Home/Home";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
  return (
      <div className="App">
          <Router>
              <div>
                  <nav>
                      <ul>
                          <Link to="/home">
                              <li>Home</li>
                          </Link>
                          <Link to="/about">
                              <li>About</li>
                          </Link>
                      </ul>
                  </nav>

                  <Switch>
                      <Route exact path="/">
                          <Home />
                      </Route>
                      <Route path="/home">
                          <Home />
                      </Route>
                      <Route path="/about">
                          <About />
                      </Route>
                      <Route path="/post/:id">
                        <PostDetail />
                      </Route>
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

export default App;
