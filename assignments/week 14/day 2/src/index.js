import { createStore } from "redux";

let scoreReducer = function(state, action) {
  if (!state) {
    return {
      currentScore: 0
    };
  }
  if (action.type == "UPDATE_BONUS") {
    let newState = state;
    newState.currentScore = newState.currentScore + 100;
    return newState;
  }

  if (action.type == "LEVEL_COMPLETED") {
    let newState = state;
    newState.currentScore = newState.currentScore + 500;
    return newState;
  }

  if (action.type == "LIFE_LOST") {
    let newState = state;
    newState.currentScore = newState.currentScore - 250;
    return newState;
  }
};

let store = createStore(scoreReducer);

store.subscribe(function() {
  let state = store.getState();
  console.log("socre update=>", state);
});

store.dispatch({
  type: "UPDATE_BONUS"
});

store.dispatch({
  type: "LEVEL_COMPLETED"
});

store.dispatch({
  type: "LIFE_LOST"
});
