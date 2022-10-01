import "./About.css";
import "./Projects.css";
import "./Gallery.css";
import "./Lightbox.css";
import React from "react";
import {Link} from 'react-router-dom'

export default function Projects() {
  return (
    <div className="Projects">
      <h1 className="Heading">About Me</h1>
      <div className="ProjectElement">
        <div className="ProjectInfo">
            <div className="ProjElementTitle">
                <a className="HyperGold" href="https://youtu.be/gKQOXYB2cd8?t=4" target="_blank" rel="noreferrer">Who do you think you are, I am!?</a>
            </div>
            <div className="ProjElementContent">
                Hi! I’m Ben, and programming saved my life 👨‍💻
                <div class="h-divider">
                    <div class="shadow"></div>
                </div> 
                Okay so that was a bit dramatic, but it’s pretty close to the truth. I spent a long time trying to figure out what the hell to do with my life, completing a degree I didn’t particularly want to use, then completing half of another degree in a different field and getting to the same point, and feeling pretty directionless as a result.
                <br /><br />
                Can't remember what spurred me to do it, but I started learning to code with <a className="HyperGold" href="https://unity.com" target="_blank" rel="noreferrer">Unity</a>. Had no idea what I was doing in C#, but eventually figured out variables, functions and classes.
                <br /><br />
                From there I realised, hey, I could totally do this professionally, but I didn’t want to do the degree thing again! So, I jumped into an accelerated <a className="HyperGold" href="https://www.coderacademy.edu.au/web-development-bootcamp" target="_blank" rel="noreferrer">Full Stack Web Development</a> course with Coder Academy, which covered all the basics for web dev (below list non-exhaustive):
                <ul>
                    <li>Basic Comp-Sci knowledge (binary, what’s a variable, bare-bones stuff)</li>
                    <li>Terminal, Git, Bash scripting</li>
                    <li>HTML, CSS, SCSS</li>
                    <li>Ruby, Rails</li>
                    <li>Javascript, React, Node, Express</li>
                    <li>Cypress, Mocha/Chai</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                </ul>
                Also provided me with a tidy little portfolio of work, since an assignment was produced for each chunk of learning. If you want to see those you can go <Link to="/projects" className="nav-link HyperGold">here</Link> or see them on my resume <a className="HyperGold" href="BenjaminWakefield-Resume.pdf" target="_blank" rel="noreferrer">here</a>, link also on the sidebar.
                <div class="h-divider">
                    <div class="shadow"></div>
                </div> 
                Now a few years on from 2020 I’m in my second year of a Software Engineering career working full time for <a className="HyperGold" href="https://www.linkedin.com/company/domino's-pizza-enterprises-limited/mycompany/" target="_blank" rel="noreferrer">Domino's</a>, primarily on backend .NET microservices. 
                <br/>
                <br/>
                I still haven’t finished that game I starting working on way back in the beginning of my coding journey, but I occasionally find time to work on it. (If you’re interested in that and following its progress, I’ll be launching a dev site for it <a className="HyperGold" href="https://www.torcularis.dev" target="_blank" rel="noreferrer">here</a> in the future. I'll also (hopefully, eventually) get around to writing a book set in the same universe, which I'll post chapters of <Link to="/book" className="nav-link HyperGold">here</Link>.)
                <br/>
                <br/>
                I also have a little gallery, mostly filled with photos from my pre-covid Europe trip: <Link to="/gallery" className="nav-link HyperGold">Gallery</Link>.
            </div>
        </div>
      </div>
      <section className="ProjectsContainer">
      </section>
    </div>
  );
}
