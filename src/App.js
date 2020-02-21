import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./styles.css";
import Logo from "./components/common/logo/Logo";
import Nav from "./components/common/nav/Nav";
import Home from "./components/pages/home/Home";
import Footer from "./components/common/footer/Footer";

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}
