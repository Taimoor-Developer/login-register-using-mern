import React, { Component } from "react";
import "./nav.css";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="cont">
          <a className="navbar-brand text-info" href="#">
          DEGREE VERIFICATION USING BLOCKCHAIN
          </a>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-light" href="../login/login.js">
                ADMIN LOGIN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="../login/login.js">
                USER LOGIN
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
