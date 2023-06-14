import React from "react";
import LinkedIn from "../linkedin.png";
import Github from "../github.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <ul className="footer--list">
        <li>
          <a href="https://www.linkedin.com/in/angel-ortega-b37b88127/">
            <img src={LinkedIn} alt="LinkedIn Icon" className="footer--icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/anorte13">
            <img src={Github} alt="Github Logo" className="footer--icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}
