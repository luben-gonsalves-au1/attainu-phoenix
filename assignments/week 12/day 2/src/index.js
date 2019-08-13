import React from "react";
import ReactDOM from "react-dom";

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <div className="form-group">
          UserName:
          <input type="text" className="form-control" placeholder="username" />
        </div>
        <div className="form-group">
          Password:
          <input
            type="password"
            className="form-control"
            placeholder="password"
          />
        </div>
      </form>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center offset-md-4">
            <h3>Login</h3>
            <hr />
            <Form />
            <Button />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
