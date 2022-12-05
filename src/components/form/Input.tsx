import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import "../../css/form/input.css";

interface InputProps {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  icon: IconProp;
}

class Input extends React.Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return (
      <div className="input">
        {this.props.label && (
          <label className="input__label" htmlFor={this.props.name}>
            {this.props.label}
          </label>
        )}
        <div className="input__group">
          {this.props.icon && (
            <FontAwesomeIcon className="input__icon" icon={this.props.icon} />
          )}
          <input
            className="input__input"
            type={this.props.type}
            name={this.props.name}
            placeholder={this.props.placeholder}
            aria-label={this.props.placeholder ? this.props.placeholder : ""}
          />
        </div>
      </div>
    );
  }
}

export default Input;
