import React from "react";

import { connect } from "react-redux";
import { mapperFunction } from "../store";

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.dispatch({
      type: "NUMBERCHANGE",
      number: event.target.value
    });
  }

  render() {
    return <input type="number" onChange={this.handleChange} />;
  }
}

let Input = connect(mapperFunction)(InputComponent);

export { Input };
