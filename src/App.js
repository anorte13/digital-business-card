import React from "react";
import Info from "./components/Info";
import "./App.css";
import About from "./components/About";

export default function App() {
  return (
    <div className="app--body">
      <Info />
      <About />
    </div>
  );
}
