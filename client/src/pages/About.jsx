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
                Hi! I'm Ben, a Software Engineer passionate about building scalable solutions and modernising platforms 👨‍💻
                <div class="h-divider">
                    <div class="shadow"></div>
                </div> 
                My journey into tech started after exploring a few different career paths and discovering a love for programming through Unity and C#. I quickly realised I wanted to pursue software engineering professionally, so I completed an accelerated Full Stack Web Development course with Coder Academy, covering:
                <ul>
                    <li>Computer Science fundamentals</li>
                    <li>Terminal, Git, Bash scripting</li>
                    <li>HTML, CSS, SCSS</li>
                    <li>Ruby, Rails</li>
                    <li>JavaScript, React, Node, Express</li>
                    <li>Cypress, Mocha/Chai</li>
                    <li>MongoDB, PostgreSQL</li>
                </ul>
                Since 2020, I've been working full time as a Software Engineer. Most recently at Zeroflucs, a sports betting technology company, where I work on high-throughput distributed pricing systems in Go.
                <br/><br/>
                Prior to that, several years at Domino's focused on backend .NET microservices, cloud migrations (Azure, AWS), DevOps automation, and global platform modernisation — including legacy .NET upgrades, automated translation workflows, SQL deployment pipelines, and cross-team tooling adoption. My experience spans:
                <ul>
                    <li>Backend: Go, .NET 6/8, Node.js, GraphQL</li>
                    <li>Frontend: React, Vite, HTML/CSS</li>
                    <li>Cloud platforms: Azure, AWS</li>
                    <li>DevOps: CI/CD, Azure DevOps, GitHub Actions, Harness</li>
                    <li>Database: SQL Server, CosmosDB, Scylla</li>
                    <li>Distributed systems: gRPC, protobuf, Kafka, microservices</li>
                    <li>Performance: parallelisation, caching, batching, load testing</li>
                </ul>
                I'm recognised for my technical breadth, reliability, and drive for continuous improvement across both frontend and backend — from low-level performance work to shipping polished user-facing features.<div class="h-divider">
                    <div class="shadow"></div>
                </div> 
                Outside of work, I'm still working on my original game project (dev site coming soon), and occasionally write fiction set in the same universe (<Link to="/book" className="nav-link HyperGold">here</Link>). I also enjoy photography—check out my <Link to="/gallery" className="nav-link HyperGold">Gallery</Link> for some travel shots.
            </div>
        </div>
      </div>
      <section className="ProjectsContainer">
      </section>
    </div>
  );
}
