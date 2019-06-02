import { createStore } from "redux";

let reducer = function(oldState, action) {
  let initialState = {
    isMenuLoading: false,
    breeds: [],
    breedTypes: [],
    objData: {}
  };

  if (!oldState) {
    return initialState;
  }

  let newState = initialState;

  if (action.type === "FETCH_MENU") {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        store.dispatch({
          type: "MENU_LOADED",
          data: Object.keys(data.message),
          objData: data.message
        });
      })
      .catch(function(err) {
        console.log(err);
      });

    newState.isMenuLoading = true;
  }

  if (action.type === "MENU_LOADED") {
    newState.breeds = action.data;
    newState.objData = action.objData;
  }

  if (action.type === "GET_TYPES") {
    newState = oldState;
    var temp = Object.values(newState.objData[action.breedName]);
    newState.breedTypes = temp;
  }

  return newState;
};

let store = createStore(reducer);

store.subscribe(function() {
  console.log(store.getState());
});

function storeMapper(state) {
  return state;
}

export { store, storeMapper };
