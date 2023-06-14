import React from "react";
import logo from "../profile-photo.png";

export default function Info() {
  return (
    <div className="info--container">
      <img src={logo} alt="Businsess Card" className="info--photo"></img>
      <h1 className="info--header">Angel Ortega</h1>
      <p className="info--about">
        Full-Stack Developer | Gamer | Rock Enthusiast
      </p>
    </div>
  );
}
