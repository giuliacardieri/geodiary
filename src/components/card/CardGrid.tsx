import React from "react";
import "../../css/card/cardGrid.css";
import Card from "./Card";
import Country from "../../interfaces/Country.interface";

/*
props:
- ordering
  - alphabetically a-z
  - alphabetically z-a
  - updated a long time ago
  - most recent updated
  - less categories
  - more categories
- filtering
  - string
  - category
*/

interface CardGridProps {}

class CardGrid extends React.Component<
  CardGridProps,
  { countries: Country[] }
> {
  constructor(props: CardGridProps) {
    super(props);
    this.state = {
      countries: [
        {
          name: "Brazil",
          linkName: "brazil",
          flag: "br",
          tips: 10,
          categories: ["cars", "landscape"],
        },
        {
          name: "Dominican Republic",
          linkName: "dominican-republic",
          flag: "do",
          tips: 2,
          categories: ["brands", "landscape"],
        },
      ],
    };
  }

  getCountries(): Country[] {
    const countriesData: string | null =
      localStorage.getItem("geotips-countries");
    let countries: Country[] = [];
    if (countriesData) countries = JSON.parse(countriesData);
    return countries;
  }

  setCountries(country: Country) {
    const countries: Country[] = this.getCountries();
    countries.push(country);
    this.setState({
      countries: countries,
    });
    localStorage.setItem("geotips-countries", JSON.stringify(countries));
  }

  render() {
    return (
      <ul className="card-grid">
        {this.state.countries.map((country: Country) => (
          <Card country={country} />
        ))}
      </ul>
    );
  }
}

export default CardGrid;
