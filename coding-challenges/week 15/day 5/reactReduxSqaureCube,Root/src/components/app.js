import React from "react";

import { Input } from "./input";
import { Display } from "./display";
import { Sqaure } from "./square";
import { Cube } from "./cube";
import { SquareRoot } from "./squareRoot";
import { Provider } from "react-redux";
import { store } from "../store.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Input />;
          <Sqaure />;
          <Cube />;
          <SquareRoot />;
          <Display />
        </Provider>
      </div>
    );
  }
}

export { App };
