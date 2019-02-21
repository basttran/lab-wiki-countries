import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import "./App.css";
import CountryDetail from "./components/CountryDetail.js";
import countries from "./countries.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryArray: countries
    };
  }
  render() {
    const { countryArray } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <nav>WikiCountries</nav>
        </header>

        <div class="row">
          <div class="col-5">
            <div class="list-group">
              return(
              {countryArray.map((oneCountry, index) => {
                // {index ? (active) : ()} maybe to set first item as active
                <a href="#" class="list-group-item list-group-item-action">
                  <div>
                  <p>{oneCountry.flag}</p> <h4>{oneCountry.name.official}</h4>
                  </div>
                </a>
              })}
              ; );
            </div>
          </div>
          <div class="col-7">
            <Switch>
              <Route exact path="/" component={CountryDetail} />
              <Route
                path="/countrt-details/:countryId"
                component={CountryDetail}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
