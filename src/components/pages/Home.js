import React from "react";
import backgroundImage from '../../Images/background.png';

export default function Home() {
  return (
    <div>
      <h1>Ethan Plott Portfolio</h1>
      <img
        src={backgroundImage}
        alt={"One Piece"}
        className="hero"
      />
    </div>
  );
}