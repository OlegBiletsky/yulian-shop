import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import SwapiContainer from './SwapiContainer'
import { Switch, Route, Link } from "react-router-dom";

const App = () => (
  <div>
      <Link to={"/cart"}>Navigate to Cart</Link>
      <Link to={"/swapi"}>Navigate to swapi</Link>
      <Link to={"/"}>Navigate to homepage</Link>
      <Link to="/swapi/articles/2">Navigate to Cart</Link>

      <Switch>
          <Route exact path="/" component={ProductsContainer}/>
          <Route path="/cart">
              <h2>Shopping Cart Example</h2>
              <CartContainer />
          </Route>
          <Route path="/swapi" component={SwapiContainer}/>
      </Switch>
  </div>
)

export default App
