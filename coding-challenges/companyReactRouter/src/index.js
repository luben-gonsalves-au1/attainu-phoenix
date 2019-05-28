import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Iframe from "react-iframe";

class Package1 extends React.Component {
  render() {
    return (
      <div className="col-sm ">
        <hr />
        <h5 className="offset-3"> Package #1</h5>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSTPloBiHQBQpJIqBSFAF1JGP4seXPIHiycQZcowMf83DsY5QPQ"
          alt="First Plan"
          className="img-thumbnail"
        />
        <h3 className="offset-3">
          Goa <small className="text-muted"> 10, 000 Rs </small>
        </h3>
      </div>
    );
  }
}
class Package2 extends React.Component {
  render() {
    return (
      <div className="col-sm">
        <hr />
        <h5 className="offset-3"> Package #2</h5>
        <img
          src="https://www.jetairways.com/Explore/Srinagar-2-1024x400.jpg"
          alt="First Plan"
          className="img-thumbnail"
        />
        <h3 className="offset-1">
          SriNagar <small className="text-muted"> 15, 000 Rs </small>
        </h3>
      </div>
    );
  }
}
class Package3 extends React.Component {
  render() {
    return (
      <div className="col-sm">
        <hr />
        <h5 className="offset-3"> Package #3</h5>
        <img
          src="https://d1j3wd17d78ehn.cloudfront.net/system/images/000/050/094/cce898414f1447e2005bfa3165b5aa8b/original/Andaman-Nicobar-10.jpg?1519412734"
          alt="First Plan"
          className="img-thumbnail"
        />
        <h3 className="offset-1">
          Andaman <small className="text-muted"> 25, 000 Rs </small>
        </h3>
      </div>
    );
  }
}
class Package4 extends React.Component {
  render() {
    return (
      <div className="col-sm">
        <hr />
        <h5 className="offset-3"> Package #4</h5>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa1iD7iWm8JModjDUTkoVRvsomxaBUcK2_QZSQcXHL3t77jX8L"
          alt="First Plan"
          className="img-thumbnail"
        />
        <h3>
          Leh - ladakh <small className="text-muted"> 30, 000 Rs </small>
        </h3>
      </div>
    );
  }
}

class Heading extends React.Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1 className="offset-5"> MyTrip.com </h1> <hr />
        <br />
        <div className="row">
          <Package1 />
          <Package2 />
          <Package3 />
          <Package4 />
        </div>
      </div>
    );
  }
}

class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only"> (current) </span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="aboutUs">
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="contactUs">
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

class ContactUs extends React.Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1 className="offset-5">Contact US</h1>
        <hr />
        <br />
        <br />
        <pre>Mytrip,#361,first floor, Surathkal,krishnapura,</pre>
        <Iframe
          className="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.687945090296!2d74.79151731388335!3d12.991799990842598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba351f73884a797%3A0x6528408a37903649!2sKrec+Nitk!5e0!3m2!1sen!2sin!4v1551944375456"
          width="1000"
          height="450"
          frameborder="0"
          style="border:0"
          allowfullscreen
        />
      </div>
    );
  }
}

class AboutUs extends React.Component {
  render() {
    return (
      <div className="container">
        <br />
        <h1 className="offset-5">About US</h1>
        <hr />
        <br />
        <br />
        <div className="row">
          <div className="col-6">
            <h4 className="offset-3">CEO-John</h4>
            <p className="offset-3">Ex Google,Traveller</p>
            <br />
            <h4 className="offset-3">CTO-Drake</h4>
            <p className="offset-3">Full stack developer(MERN)</p>
            <br />
            <h4 className="offset-3">Technical Head-Katie</h4>
            <p className="offset-3">Technical Assistant</p>
          </div>

          <div className="col-6">
            <div className="offset-4">
              <img src="ceo.png" className="img-circle" alt="Cinque Terre" />
              <br />
              <img src="cto.png" className="img-circle" alt="Cinque Terre" />
              <br />
              <img
                src="technicalassistant.png"
                className="img-circle"
                alt="Cinque Terre"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <Heading />
      </div>
    );
  }
}

ReactDOM.render(<Navbar />, document.getElementById("root"));
