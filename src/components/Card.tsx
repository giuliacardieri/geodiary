import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "../css/card.css";

/*
add interfaces in a file and import it? not sure
*/

interface Country {
  name: string;
  flag: string;
  tips: number;
  linkName: string;
  categories: string[];
}
interface CardProps {
  country: Country;
}
class Card extends React.Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    return (
      <Router>
        <li className="card">
          <Link
            to={`/country/${this.props.country.linkName}`}
            className="card__link"
          >
            <header className="card__header">
              <img
                className="card__flag"
                src={require(`../assets/images/flags/${this.props.country.flag}.png`)}
                alt={`${this.props.country.name} flag`}
              />
              <h2 className="card__title">{this.props.country.name}</h2>
            </header>
            <div className="card__info">
              <h3 className="card__text">{this.props.country.tips} tips</h3>
              {this.props.country.categories.length && (
                <div className="card__categories">
                  {this.props.country.categories.map((category) => (
                    <span className="card__category">{category}</span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        </li>
      </Router>
    );
  }
}

export default Card;
