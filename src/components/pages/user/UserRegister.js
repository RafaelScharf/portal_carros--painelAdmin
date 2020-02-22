import React, { Component } from "react";
import Main from "./../../common/main/Main";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Descrição da pagina"
};

export default class UserRegister extends Component {
  render() {
    return <Main {...headerProps}>Cadastro Usuários.</Main>;
  }
}
