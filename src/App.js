import React from "react";
import Info from "./components/Info";
import "./App.css";
import About from "./components/About";
import Interests from "./components/Interests";

export default function App() {
  return (
    <div className="app--body">
      <Info />
      <About />
      <Interests />
    </div>
  );
}
