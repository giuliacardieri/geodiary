import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import "../css/button.css";

interface ButtonProps {
  link?: string;
  click?: Function;
  ariaLabel?: string;
  label: string;
  icon?: IconProp;
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
          {this.props.icon ? (
            <FontAwesomeIcon className="button__icon" icon={this.props.icon} />
          ) : null}
          {this.props.label}
        </Link>
      </Router>
    ) : (
      <button className="button" aria-label={this.props.ariaLabel}>
        {this.props.icon ? (
          <FontAwesomeIcon className="button__icon" icon={this.props.icon} />
        ) : null}
        {this.props.label}
      </button>
    );
  }
}

export default Button;
