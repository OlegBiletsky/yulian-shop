import React from 'react';
import { Switch, Route, Link, useParams } from "react-router-dom";
import ProductsContainer from "../containers/ProductsContainer";

const Swapi  = ({ swapi, getPostById, getPostBulk, getPlanets, getMorePlanets }) => {
    let a, b;
    if(swapi.byBulk && swapi.byBulk.data) {
        a = swapi.byBulk.data.map(i =>
            <div>{i.title} <Link to={"/swapi/articles/"+i.id}>Navigate to swapi</Link></div>
        );
    } else {
        a = <div>No data</div>
    }
    if(swapi.planets && swapi.planets.data && swapi.planets.data.results) {
        b = swapi.planets.data.results.map(i =>
            <div>{i.name}</div>
        );
    } else {
        b = <div>No data</div>
    }
    let { id } = useParams();
    console.log(id);

  return (
    <div>
      <h3>Swapi</h3>
        <Link to={"/swapi/planets"}>Navigate to swapi</Link>
        <Switch>
            <Route path="/swapi/articles/:id" >
                <button onClick={getPostBulk}>133</button>
                {a}
            </Route>
            <Route path="/swapi/planets" >
                <button onClick={getPlanets}>Planets</button>
                {swapi.planets && swapi.planets.data && swapi.planets.data.next ? <button disabled={swapi.planets.isLoading} onClick={() => getMorePlanets(swapi.planets.data.next)}>MorePlanets</button> : null}
                {b}
            </Route>
        </Switch>
    </div>
  )
}

export default Swapi