import React from "react";

import { connect } from "react-redux";
import { mapperFunction } from "../store";

class CubeButton extends React.Component {
  render() {
    return <button>Cube</button>;
  }
}
let Cube = connect(mapperFunction)(CubeButton);

export { Cube };
