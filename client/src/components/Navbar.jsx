// // import { Link } from 'react-router-dom'
import './Component.css'; 
import {Link} from 'react-router-dom'

import { 
useEffect, 
useState,
React 
} from "react";

function Navbar({ children }) {
    const [imageIsLoading, setImageIsLoading] = useState(true);

    let count = 0;
    const handleImageLoaded = () => {
        count += 1;
        if (count >= 5){
            console.log("Icons Loaded")
            setImageIsLoading(false)
        }
    };

    useEffect(() => {
        const img = new Image();
            img.onload = handleImageLoaded;
            img.src = "linkedin-128.png";
    }, []);

    useEffect(() => {
        const img = new Image();
            img.onload = handleImageLoaded;
            img.src = "github-10-128.ico";
    }, []);

    useEffect(() => {
        const img = new Image();
            img.onload = handleImageLoaded;
            img.src = "twitter-5-128.ico";
    }, []);

    useEffect(() => {
        const img = new Image();
            img.onload = handleImageLoaded;
            img.src = "instagram-5-128.ico";
    }, []);

    useEffect(() => {
        const img = new Image();
            img.onload = handleImageLoaded;
            img.src = "gmail-128.png";
    }, []);

    return (
        <nav id="hamnav">
            {/* <!-- [THE HAMBURGER] --> */}
            <label htmlFor="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger"/>
            
            {/* <!-- [MENU ITEMS] --> */}
            <div id="hamitems">
                <div className="intraNav">
                    <Link to="/" className="nav-link">Home</Link>
                    <a href="https://www.torcularis.dev" className="nav-link" target="_blank" rel="noreferrer">Game</a>
                    <Link to="/book" className="nav-link">Story</Link>
                    <Link to="/projects" className="nav-link">Portfolio</Link>
                    <Link to="/gallery" className="nav-link">Gallery</Link>
                    <a href="BenjaminWakefield-Resume.pdf" target="_blank">Resume</a>
                    <Link to="/about" className="nav-link">About</Link>
                </div>
                {imageIsLoading ? (
                    <></>
                ) : (
                    <div className="extraNav">
                        <a href="https://www.linkedin.com/in/benjamin-wakefield-569143159/" target="_blank" rel="noreferrer">
                            <img style={{width: "35px", padding: "0"}} className="nav-link" src="linkedin-128.png" alt="linkedin icon"/>
                        </a>
                        <a href="https://github.com/asyncronous" target="_blank" rel="noreferrer">
                            <img style={{width: "35px"}} className="nav-link" src="github-10-128.ico" alt="Github icon"/>
                        </a>
                        {/* <a href="https://codepen.io/asyncronous" target="_blank" rel="noreferrer">
                            <img style={{width: "40px", margin: "0"}} className="nav-link" src="/codepen-128.png" alt="Codepen icon"/>
                        </a> */}
                        <a href="https://twitter.com/Asyncronous14" target="_blank" rel="noreferrer">
                            <img style={{width: "35px"}} className="nav-link" src="twitter-5-128.ico" alt="Twitter icon"/>
                        </a>
                        <a href="https://www.instagram.com/bentropy.wake/" target="_blank" rel="noreferrer">
                            <img style={{width: "35px"}} className="nav-link" src="instagram-5-128.ico" alt="instagram icon"/>
                        </a>
                        <a href="mailto:bwakefield34@gmail.com" target="_blank" rel="noreferrer">
                            <img style={{width: "35px"}} className="nav-link" src="gmail-128.png" alt="gmail icon"/>
                        </a>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
  