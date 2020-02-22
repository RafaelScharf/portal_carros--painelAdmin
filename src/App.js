import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./styles.css";
import { HashRouter } from "react-router-dom";

//componentes
import Routes from "./Routes";
import Logo from "./components/common/logo/Logo";
import Nav from "./components/common/nav/Nav";
import Home from "./components/pages/home/Home";
import User from "./components/pages/user/UserRegister";
import Footer from "./components/common/footer/Footer";

export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </HashRouter>
  );
}
