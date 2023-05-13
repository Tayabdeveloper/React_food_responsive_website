import React from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Menu from "./Components/Menu";
import Clients from "./Components/Clients";
import Prices from "./Components/Prices";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Prices />
    </div>
  );
}

export default App;
