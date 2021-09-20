import React from "react";
import "./App.css";
import Results from "./components/Results";
import PushButton from "./components/Search";
import Contact from "./components/Results";
import {
 useParams, NavLink, Link, Redirect, BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Search from "./components/Search";




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/results/:keyword" exact>
            <Results />
            </Route>
          <Route path="/" exact>
            <Search />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

{/* <Router> */}
{/* Nav bar for two Links for paths */}
{/* Inside Router, but outside Switch */}
{/* <nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About Us</Link>
    </li>
  </ul>
</nav> */}

{/* <nav>
<ul>
<li><NavLink to="/" exact>Home</NavLink></li>
<li><NavLink to="/about" exact>About Us</NavLink></li>
<li><NavLink to="/about/teams" exact>About Teams</NavLink></li>
</ul>
</nav>

<h1>Welcome</h1>

<PushButton />

<Switch>
 
  <Route path="/about/teams" exact>
    <h1>About teams</h1>
  </Route>
  <Route path="/about" exact>
    <h1>About us</h1>
    {/* <Redirect to="/about/teams" /> */}
  {/* </Route>
  <Route path="/" exact>
    <h1>Home</h1>
  </Route>
  <Route path="/contact" exact>
   <h1>Contact Us</h1>
  </Route>
  <Route path="/contact/:name" exact>
   <Contact />
  </Route>
</Switch>
</Router> */} 
