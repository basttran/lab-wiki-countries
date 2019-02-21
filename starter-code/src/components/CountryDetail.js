import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./CountryDetail.css";
import countries from "../countries.json";

class CountryDetail extends Component {
  render() {
    // this.props.match contains information about the ROUTE
    // (including path parameters)
    console.log(this.props.match);
    const { params } = this.props.match;

    // search for the project in the array
    const countryItem = countries.find(oneCountry => {
      return oneCountry.cca3 === params.countryId;
    });
    return (
      <section className="CountryDetail">
        {countryItem ? (
          <div>
            <h2>Country Details</h2>
            <h3>{countryItem.name.official}</h3>
            <p>Capital: {countryItem.capital} km²</p>
            <p>Area: {countryItem.area} km²</p>
            <p>Borders: {countryItem.borders}</p>
          </div>
        ) : (
          <h2>Country Not Found</h2>
        )}

        <p>ID: {params.countryId}</p>
        <Link to="/project-list">Back to All Projects</Link>
      </section>
    );
  }
}

export default CountryDetail;
