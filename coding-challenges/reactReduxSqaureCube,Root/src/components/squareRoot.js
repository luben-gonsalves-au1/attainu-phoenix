import React from "react";

import { connect } from "react-redux";
import { mapperFunction } from "../store";

class SqaureRootButton extends React.Component {
  render() {
    return <button> Sqaure Root </button>;
  }
}
let SquareRoot = connect(mapperFunction)(SqaureRootButton);

export { SquareRoot };
