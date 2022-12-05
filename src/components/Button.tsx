import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import "../css/button.css";

interface ButtonProps {
  ariaLabel?: string;
  click?: Function;
  icon?: IconProp;
  label: string;
  link?: string;
  secondary?: boolean;
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
          className={`button ${
            this.props.secondary ? "button--secondary" : ""
          }`}
          aria-label={this.props.ariaLabel}
        >
          {this.props.icon ? (
            <FontAwesomeIcon className="button__icon" icon={this.props.icon} />
          ) : null}
          {this.props.label}
        </Link>
      </Router>
    ) : (
      <button
        className={`button ${this.props.secondary ? "button--secondary" : ""}`}
        aria-label={this.props.ariaLabel}
      >
        {this.props.icon ? (
          <FontAwesomeIcon className="button__icon" icon={this.props.icon} />
        ) : null}
        {this.props.label}
      </button>
    );
  }
}

export default Button;
