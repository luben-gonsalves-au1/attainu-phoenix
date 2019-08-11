// import { createStore } from "redux";

// //reducer function
// let myReducer = function(state, action) {
//   console.log("reducer called", state, action);
// };

// //redux data store
// let store = createStore(myReducer, "intial state");

// //dispatch actions
// //let the store knows that we are changing the data
// store.dispatch({
//   type: "DATA_CHANGED"
// });

// import { createStore } from "redux";

// //reducer function
// let myReducer = function(state, action) {
//   console.log(state, action);
//   if (!state) {
//     return {
//       username: "unknown"
//     };
//   }

//   if (action.type == "DATA_CHANGED") {
//     let newState = state;
//     console.log("entered");
//     newState.username = action.username;
//     return newState;
//   }
// };

// //redux data store
// let store = createStore(myReducer, "intial state");

// //subscriber function that get called when data changes
// store.subscribe(function() {
//   let state = store.getState();
//   console.log("subscriber called=>", state);
// });

// //dispatch actions
// //let the store knows that we are changing the data
// store.dispatch({
//   type: "DATA_CHANGED",
//   username: "luben"
// });

// store.dispatch({
//   type: "DATA_CHANGED",
//   username: "frank"
// });

// import { createStore } from "redux";

// let scoreReducer = function(state, action) {
//   if (!state) {
//     return {
//       currentScore: 0
//     };
//   }
//   if (action.type === "UPDATE_BONUS") {
//     let newState = state;
//     newState.currentScore = newState.currentScore + 100;
//     return newState;
//   }

//   if (action.type === "LEVEL_COMPLETED") {
//     let newState = state;
//     newState.currentScore = newState.currentScore + 500;
//     return newState;
//   }

//   if (action.type === "LIFE_LOST") {
//     let newState = state;
//     newState.currentScore = newState.currentScore - 250;
//     return newState;
//   }
// };

// let store = createStore(scoreReducer);

// store.subscribe(function() {
//   let state = store.getState();
//   console.log("socre update=>", state);
// });

// store.dispatch({
//   type: "UPDATE_BONUS"
// });

// store.dispatch({
//   type: "LEVEL_COMPLETED"
// });

// store.dispatch({
//   type: "LIFE_LOST"
// });

// import { createStore } from "redux";

// let myReducer = function(state, action) {
//   if (!state) {
//     return { counter: 0 };
//   }
//   if (action.type == "INCREMENT") {
//     let newState = state;
//     newState.counter = newState.counter + 1;
//     return newState;
//   }

//   if (action.type == "DECREMENT") {
//     let newState = state;
//     newState.counter = newState.counter - 1;
//     return newState;
//   }

//   if (action.type == "RESET") {
//     let newState = state;
//     newState.counter = newState.counter = 0;
//     return newState;
//   }
// };

// let store = createStore(myReducer);

// store.subscribe(function() {
//   var state = store.getState();
//   console.log("current counter value=>", state);
// });

// store.dispatch({
//   type: "INCREMENT"
// });

// store.dispatch({
//   type: "DECREMENT"
// });

// store.dispatch({
//   type: "RESET"
// });

// import { createStore } from "redux";

// let myReducer = function(state, action) {
//   if (!state)
//     return {
//       number: 0,
//       isOdd: false,
//       isEven: false
//     };
//   console.log(state);
//   if (action.type === "CHECK") {
//     let newState = state;
//     newState.number = action.number;
//     return newState.number % 2 == 0
//       ? (newState.isEven = true)
//       : (newState.isOdd = true);
//   }
// };

// let store = createStore(myReducer);

// store.subscribe(function() {
//   var state = store.getState();
//   console.log(state);
// });

// store.dispatch({
//   type: "CHECK",
//   number: 123
// });

// --------------------------------------------------------------------------------

// import React from "react";
// import ReactDOM from "react-dom";

// import { createStore } from "redux";

// import { Provider, connect } from "react-redux";

// /*

//     REDUX SECTION

//  */

// // Our reducer
// let counterReducer = function(oldState, action) {
//   let newState = { counter: 0 };

//   // If empty state, initialize the state
//   if (!oldState) {
//     return newState;
//   }

//   // Perform INCREMENT action
//   if (action.type == "INCREMENT") {
//     newState.counter = oldState.counter + 1;
//   }

//   // Perform DECREMENT action
//   if (action.type == "DECREMENT") {
//     newState.counter = oldState.counter - 1;
//   }

//   // Perform RESET to zero
//   if (action.type == "RESET") {
//     newState.counter = 0;
//   }

//   return newState;
// };

// // Create a store from the reducer
// let counterStore = createStore(counterReducer);

// // Subscribe to changes in state
// counterStore.subscribe(function() {
//   console.log(counterStore.getState());
// });

// function counterStoreMapper(state) {
//   return state;
// }

// /*

//     REACT COMPONENTS

// */

// class IncrementComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.buttonClicked = this.buttonClicked.bind(this);
//   }

//   buttonClicked() {
//     this.props.dispatch({
//       type: "INCREMENT"
//     });
//   }

//   render() {
//     return <button onClick={this.buttonClicked}>+</button>;
//   }
// }
// let Increment = connect(counterStoreMapper)(IncrementComponent);

// class DecrementComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.buttonClicked = this.buttonClicked.bind(this);
//   }

//   buttonClicked() {
//     this.props.dispatch({
//       type: "DECREMENT"
//     });
//   }

//   render() {
//     return <button onClick={this.buttonClicked}>-</button>;
//   }
// }
// let Decrement = connect(counterStoreMapper)(DecrementComponent);

// class ResetComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.buttonClicked = this.buttonClicked.bind(this);
//   }

//   buttonClicked() {
//     this.props.dispatch({
//       type: "RESET"
//     });
//   }
//   render() {
//     return <button onClick={this.buttonClicked}>Reset</button>;
//   }
// }

// let Reset = connect(counterStoreMapper)(ResetComponent);
//  class DisplayComponent extends React.Component {
//   render() {
//     return <h2>Counter: {this.props.counter}</h2>;
//   }
// }
// let Display = connect(counterStoreMapper)(DisplayComponent);

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Provider store={counterStore}>
//           <Display />
//           <Increment />
//           <Decrement />
//           <Reset />
//         </Provider>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

//------------------------------------------------------------------------
//react-redux -ES6 modules
// import React from "react";
// import ReactDOM from "react-dom";

// import { GoogleLogin } from "react-google-login";

// class App extends React.Component {
//   succ() {
//     console.log("passed");
//   }
//   fail() {
//     console.log("failed");
//   }
//   render() {
//     return (
//       <div>
//         <GoogleLogin
//           clientId="818823629438-6k6npa3npr52pnmdtmnib2e1imfn6uq5.apps.googleusercontent.com"
//           buttonText="Login"
//           onSuccess={this.succ}
//           onFailure={this.fail}
//         />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));
