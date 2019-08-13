import React from "react";

import { connect } from "react-redux";
import { mapperFunction } from "../store";

class DisplayComponent extends React.Component {
  render() {
    return <h3> Result: {this.props.output} </h3>;
  }
}

let Display = connect(mapperFunction)(DisplayComponent);

export { Display };
