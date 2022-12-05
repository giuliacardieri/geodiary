import React from "react";
import "../../css/form/form.css";

interface FormProps {
  children: React.ReactNode;
  inline: boolean;
}

class Form extends React.Component<FormProps> {
  constructor(props: FormProps) {
    super(props);
  }

  render() {
    return (
      <form className={`form ${this.props.inline ? "form--inline" : ""}`}>
        {this.props.children}
      </form>
    );
  }
}

export default Form;
