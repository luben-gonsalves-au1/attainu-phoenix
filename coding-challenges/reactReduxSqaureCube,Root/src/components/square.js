import React from "react";

import { connect } from "react-redux";
import { mapperFunction } from "../store";

class SqaureButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.dispatch({
      type: "SQUARE"
    });
  }

  render() {
    return <button onClick={this.handleClick}> Sqaure </button>;
  }
}

let Sqaure = connect(mapperFunction)(SqaureButton);

export { Sqaure };
