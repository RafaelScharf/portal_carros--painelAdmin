import React from "react";
import "./styles.css";
import Logo from "./components/common/logo/Logo";
import Nav from "./components/common/nav/Nav";
import Main from "./components/common/main/Main";
import Footer from "./components/common/footer/Footer";

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
