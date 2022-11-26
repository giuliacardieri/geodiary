import "../css/card.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import BrazilFlag from "../assets/images/flags/br.png";

function Card() {
  return (
    <Router>
      <li className="card">
        <Link to="/country/brasil" className="card__link">
          <header className="card__header">
            <img className="card__flag" src={BrazilFlag} alt="Brazil flag" />
            <h2 className="card__title">Brazil</h2>
          </header>
          <div className="card__info">
            <p className="card__text">XX Entries</p>
            <p className="card__text">Updated 2 days ago</p>
            <div className="card__categories">
              <span className="card__category">Cars</span>
              <span className="card__category">Landscape</span>
            </div>
          </div>
        </Link>
      </li>
    </Router>
  );
}

export default Card;
