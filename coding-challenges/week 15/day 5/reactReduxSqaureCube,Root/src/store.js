import { createStore } from "redux";

let myReducer = function(state, action) {
  let newState = {
    number: 0,
    output: 0
  };

  if (!state) {
    return newState;
  }

  if (action.type == "NUMBERCHANGE") {
    newState.number = parseInt(action.number);
  } else {
    newState.number = state.number;
  }
  if (action.type == "SQUARE") {
    console.log("inside sqaure", newState);
    newState.output = newState.number * newState.number;
    console.log("inside sqaure after calculating sqaure", newState.output);
  }
  console.log("before returning newState", newState);
  return newState;
};

let store = createStore(myReducer);

store.subscribe = function() {
  let state = store.getState();
  console.log(state);
};

function mapperFunction(state) {
  return state;
}

export { store, mapperFunction };
