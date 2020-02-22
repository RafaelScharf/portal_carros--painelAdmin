import React from "react";
import "./nav.css";

export default props => (
  <aside className="menu-area">
    <nav className="menu">
      <a href="/">
        <i className="fa fa-home" /> Home
      </a>
      <a href="/user/register/">
        <i className="fa fa-user" /> User
      </a>
    </nav>
  </aside>
);
