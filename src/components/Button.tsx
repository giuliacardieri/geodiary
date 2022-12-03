import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "../css/button.css";

interface ButtonProps {
  link?: string;
  click?: Function;
  ariaLabel?: string;
  label: string;
}
class Button extends React.Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return this.props.link ? (
      <Router>
        <Link
          to={`/${this.props.link}`}
          className="button"
          aria-label={this.props.ariaLabel}
        >
          {this.props.label}
        </Link>
      </Router>
    ) : (
      <button className="button" aria-label={this.props.ariaLabel}>
        {this.props.label}
      </button>
    );
  }
}

export default Button;
