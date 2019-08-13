import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutUs">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactUs">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact={true} component={Home} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/contactUs" component={ContactUs} />
      </Router>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home Page- Attainu University</h2>
        <hr />
        <p>Hello, welcome to Attainu University</p>
      </div>
    );
  }
}

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <h2>AboutUs- Attainu University</h2>
        <hr />
        <p>Hello, welcome to Attainu University</p>
        <pre>
          Empowering students through individual-aligned (interest and ability),
          market-aligned (outcome focused) and scalable (accessible, affordable)
          higher education
        </pre>
      </div>
    );
  }
}

class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <h2>ContactUs-Attainu University</h2>
        <hr />
        <p>Hello, welcome to Attainu University</p>
        <pre>
          info@attainu.com +91 8297816161‬ 91springboard 80ft Road Indiranagar
          Bengaluru - 560038 Karnataka, India
        </pre>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
