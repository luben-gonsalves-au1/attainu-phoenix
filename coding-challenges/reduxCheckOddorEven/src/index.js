import { createStore } from "redux";

let myReducer = function(state, action) {
  if (!state)
    return {
      number: 0,
      isOdd: false,
      isEven: false
    };
  console.log(state);
  if (action.type === "CHECK") {
    let newState = state;
    newState.number = action.number;
    return newState.number % 2 == 0
      ? (newState.isEven = true)
      : (newState.isOdd = true);
  }
};

let store = createStore(myReducer);

store.subscribe(function() {
  var state = store.getState();
  console.log(state);
});

store.dispatch({
  type: "CHECK",
  number: 123
});
