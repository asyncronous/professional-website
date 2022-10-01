import "./Home.css";
import {Link} from 'react-router-dom'
import "../components/FallingLeaves.css";
import React from "react";

export default function Projects() {
  return (
    <div className="Home">
      <div className="HomeContainer">
        <section className="HeadshotContainer">
        </section>
        <div className="HomeInfo">
          <h1 className="HomeTitle">
            bwake.dev
          </h1>
          <h2 className="HomeContent">
            <Link to="/about" className="HyperGold nav-link">Software Engineer | Part Time Game Developer | Amateur Writer & Photographer</Link>
          </h2>
        </div>
      </div>
      <div className="fallingLeaves">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>
  );
}