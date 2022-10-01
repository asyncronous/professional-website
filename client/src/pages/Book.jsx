import "./About.css";
import "./Projects.css";
import "./Gallery.css";
import "./Lightbox.css";
import React from "react";

export default function Book() {
  return (
    <div className="Projects">
      <div className="ProjectElement">
        <div className="ProjectInfo">
            <div className="ProjElementTitle">
                Torcularis: A WebSerial 📚 (Working title, lol. I'll probably call it something else.)
            </div>
            <div className="ProjElementContent">
                So for a number of years now I've been meaning to start writing a book. Ended up reading a number of books that turned out very similar to a lot of my ideas so I've had to rethink the world a number of times (It's also very daunting to start writing something when you're comparing your own writing to the likes of <a className="HyperGold" href="https://www.royalroad.com/fiction/25137/worth-the-candle" target="_blank" rel="noreferrer">Worth the Candle</a> and <a className="HyperGold" href="https://parahumans.wordpress.com/" target="_blank" rel="noreferrer">Worm</a>, two of my all time favourite stories). 
                <br/>
                <br/>
                I'm at the point now where I'm basically ready to start, but all my spare energy is being put into the game I'm making set in the same universe: <a className="HyperGold" href="https://www.torcularis.dev" target="_blank" rel="noreferrer">Link</a>. Once I've got the game into a playable state I'll switch gears and actually start working on the web serial. I'll probably post the chapters here and a few other places.
            </div>
        </div>
      </div>
    </div>
  );
}
