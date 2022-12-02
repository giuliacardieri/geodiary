import React from "react";
import "../css/cardGrid.css";
import Card from "./Card";

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

this component should get all countries from storage and do the actions
might be easier to break it down, lets see
*/

interface Country {
  name: string;
  flag: string;
  tips: number;
  linkName: string;
  categories: string[];
}

class CardGrid extends React.Component {
  render() {
    let countries: Country[] = [
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
    ];

    return (
      <ul className="card-grid">
        {countries.map((country) => (
          <Card country={country} />
        ))}
      </ul>
    );
  }
}

export default CardGrid;
