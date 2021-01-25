import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import List from "../List";
import Card from "../Card";
import Books from "../Books";
import "../../assets/css/style.css";
import Contribution from "../Fetch/Pages/Contribution";
import Contributor1 from "../NewContributor/Contributor1";
import PokemonDetails from "../Pokemon/PokemonHooks";
import PokemonHooks from "../Pokemon/PokemonHooks";
import CardDetail from "../Fetch/CardDetail";
class Header extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="header">
            <div class="logo">
              <img
                src="https://dezig.net/wp-content/uploads/2019/05/free.png"
                alt=""
              />
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/card">Cards</Link>
              </li>
              <li>
                <Link to="/books">Books</Link>
              </li>
              <li>
                <Link to="/Fetch/Pages/Contribution">Contribution</Link>
              </li>
              <li>
                <Link to="/newContributor/contributor1">Contribution</Link>
              </li>
              {/* <li>
                <Link to="/Pokemon-hooks">Pokemon</Link>
              </li> */}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/card">
              <List />
            </Route>
            <Route path="/books">
              <Books />
            </Route>
            {/* <Route path="/Fetch/Pages/Contribution">
              <Contribution />
            </Route> */}
            {/* <Route path="/Pokemon">
              <PokemonHooks />
            </Route> */}
            {/* <Route
              exact
              path="/newContributor/contributor1"
              component={Contributor1}
            /> */}
            <Route
              exact
              path="/Fetch/Pages/Contribution"
              component={Contribution}
            />
            <Route path="/cards/:id" component={Card} />
            <Route path="/card-detail/:id" component={CardDetail} />
            {/* <Route exact path="/pokemon-hooks" component={PokemonHooks} />
            <Route path="/pokemon-hooks/:id" component={PokemonDetails} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Header;
