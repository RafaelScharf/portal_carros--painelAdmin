import React from "react";
import Header from "./../header/Header";

export default props => (
  <React.Fragment>
    <Header {...props} />
    <main className="content">Conteudo</main>
  </React.Fragment>
);
