import React from "react";
import Header from "./../header/Header";
import "./main.css";

export default props => (
  <React.Fragment>
    <Header {...props} />
    <main className="content container-fluid">
      <div className="p-3 mt-3">content</div>
    </main>
  </React.Fragment>
);
