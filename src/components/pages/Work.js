import React from "react";

export default function Work() {
  return (
    <div className="work">
      <h1>Some Of My Work!</h1>
      <div className="custom-container">
        <a
          className="repolink"
          href="https://github.com/EthanP94/Home-Improvement"
        >
          GitHub Repository
        </a>
        <a href="https://github.com/EthanP94/Home-Improvement">
          <img id="HI" src={require("../../Images/ScreenshotHI.png")} />
          <div className="caption">
            Home Improvement
            <br />
            MERN STACK, Heroku, Material UI
          </div>
        </a>
      </div>
      <div className="custom-container">
        <a
          className="repolink"
          href="https://github.com/EthanP94/The-Recipe-Box"
        >
          GitHub Repository
        </a>
        <a href="https://immense-cliffs-14605.herokuapp.com/">
          <img id="TRB" src={require("../../Images/ScreenshotTRB.png")} />
          <div className="caption">
            The Recipe Box
            <br />
            Javascript, Express, Node, Handlebas, CSS, MySQL
          </div>
        </a>
      </div>
      <div className="custom-container">
        <a
          className="repolink"
          href="https://github.com/EthanP94/tech-connection"
        >
          GitHub Repository
        </a>
        <a href="https://quiet-shelf-22355.herokuapp.com/">
          <img id="TC" src={require("../../Images/ScreenshotTC.png")} />
          <div className="caption">
            Tech Connection
            <br />
            MySQL, Express, Handlebars, MVC
          </div>
        </a>
      </div>
      <div className="custom-container">
        <a
          className="repolink"
          href="https://github.com/EthanP94/The-Grand-Line"
        >
          GitHub Repository
        </a>
        <a href="https://github.com/EthanP94/The-Grand-Line">
          <img id="TCZ" src={require("../../Images/ScreenshotTGLA.jpg")} />
          <div className="caption">
            The Grand Line Anime
            <br />
            HTML, CSS, JS, Jikan API and Animchan Api
          </div>
        </a>
      </div>
      <div className="custom-container">
        <a
          className="repolink"
          href="https://github.com/EthanP94/Note-Keeper"
        >
          GitHub Repository
        </a>
        <a href="https://warm-wildwood-26018.herokuapp.com/">
          <img id="DP" src={require("../../Images/ScreenshotNK.png")} />
          <div className="caption">
            Note Keeper
            <br />
            HTML, Javascript, MySQL
          </div>
        </a>
      </div>
    </div>
  );
}