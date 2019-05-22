import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ""
    };
    this.changeVal = this.changeVal.bind(this);
  }
  changeVal(event) {
    this.setState({
      inputVal: event.target.value
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4 text-center">
            <h2>React State Challenge</h2>
            <InputComponent changeVal={this.changeVal} />
            <DisplayComponent inputVal={this.state.inputVal} />
          </div>
        </div>
      </div>
    );
  }
}
class InputComponent extends React.Component {
  render() {
    return (
      <input
        type="text"
        className="form-control"
        onChange={this.props.changeVal}
      />
    );
  }
}
class DisplayComponent extends React.Component {
  render() {
    return <h2>{this.props.inputVal}</h2>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
