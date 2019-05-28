import React from "react";
import ReactDOM from "react-dom";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      val: ""
    };
    this.change = this.change.bind(this);
    this.check = this.check.bind(this);
  }

  change(event) {
    if (event.target.value === "") this.setState({ answer: "" });
    this.setState({
      val: event.target.value
    });
  }

  check(event) {
    event.target.value % 2 === 0
      ? this.setState({ answer: "Even" })
      : this.setState({ answer: "Odd" });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center col-md-4 offset-md-4">
            Check if even or odd
            <input
              type="text"
              className="form-control"
              placeholder="Enter a number"
              onChange={this.change}
            />
            <br />
            <button
              className="btn btn-primary"
              onClick={this.check}
              value={this.state.val}
            >
              Check
            </button>
            <p>{this.state.answer}</p>
          </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <Box />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
