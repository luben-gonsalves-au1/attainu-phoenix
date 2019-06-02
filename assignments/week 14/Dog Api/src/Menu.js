import React from "react";
import { connect } from "react-redux";

import { storeMapper } from "./store.js";

class MenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_MENU"
    });
  }

  handleClick(event) {
    this.props.dispatch({
      type: "GET_TYPES",
      breedName: event.target.value
    });
  }

  render() {
    if (this.props.isMenuLoading) {
      return <p>Loading Menu...</p>;
    } else {
      return this.props.breeds.map((b, i) => {
        return (
          <button
            className="btn btn-secondary"
            onClick={this.handleClick}
            key={b}
            value={b}
          >
            {b}
          </button>
        );
      });
    }
  }
}

let Menu = connect(storeMapper)(MenuComponent);

export { Menu };
