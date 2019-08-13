import { createStore } from "redux";

let myReducer = function(state, action) {
  if (!state) {
    return { counter: 0 };
  }
  if (action.type == "INCREMENT") {
    let newState = state;
    newState.counter = newState.counter + 1;
    return newState;
  }

  if (action.type == "DECREMENT") {
    let newState = state;
    newState.counter = newState.counter - 1;
    return newState;
  }

  if (action.type == "RESET") {
    let newState = state;
    newState.counter = newState.counter = 0;
    return newState;
  }
};

let store = createStore(myReducer);

store.subscribe(function() {
  var state = store.getState();
  console.log("current counter value=>", state);
});

store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "DECREMENT"
});

store.dispatch({
  type: "RESET"
});
