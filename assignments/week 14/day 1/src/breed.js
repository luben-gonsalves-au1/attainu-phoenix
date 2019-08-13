import React from "react";
import { connect } from "react-redux";

import { storeMapper } from "./store.js";

class BreedComponent extends React.Component {
  render() {
    if (this.props.breedTypes.length === 0) {
      return <p> </p>;
    } else {
      return this.props.breedTypes.map(item => {
        return (
          <button className="btn btn-secondary" key={item}>
            {item}
          </button>
        );
      });
    }
  }
}

let Breed = connect(storeMapper)(BreedComponent);

export { Breed };
