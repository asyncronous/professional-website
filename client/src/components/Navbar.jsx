// // import { Link } from 'react-router-dom'
import './Component.css'; 
import {Link} from 'react-router-dom'
  
  function Navbar({ children }) {
    return (
        // <div>
        //     <div />
        //     <div >
        //       <header className="Component"> Navbar </header>
        //     </div>
        // </div>
        <nav id="hamnav">
            {/* <!-- [THE HAMBURGER] --> */}
            <label htmlFor="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger"/>
            
            {/* <!-- [MENU ITEMS] --> */}
            <div id="hamitems">
                <div className="intraNav">
                    <Link to="/" className="nav-link" id="signup">Home</Link>
                    <Link to="/projects" className="nav-link" id="signup">Portfolio</Link>
                    <Link to="/gallery" className="nav-link" id="signup">Gallery</Link>
                    {/* <Link to="/book" className="nav-link" id="signup">WebSerial</Link> */}
                    <Link to="/gamedev" className="nav-link" id="signup">GameDev</Link>
                    <Link to="/about" className="nav-link" id="signup">About</Link>
                    {/* <Link to="/contact" className="nav-link" id="signup">Contact</Link> */}

                </div>
                <div className="extraNav">

                <a href="https://www.linkedin.com/in/benjamin-wakefield-569143159/" target="_blank" rel="noreferrer">
                    <img style={{width: "35px", padding: "0"}} className="nav-link" src="linkedin-128.png" alt="linkedin icon"/>
                </a>
                <a href="https://github.com/asyncronous" target="_blank" rel="noreferrer">
                    <img style={{width: "35px"}} className="nav-link" src="/github-10-128.ico" alt="Github icon"/>
                </a>
                {/* <a href="https://codepen.io/asyncronous" target="_blank" rel="noreferrer">
                    <img style={{width: "40px", margin: "0"}} className="nav-link" src="/codepen-128.png" alt="Codepen icon"/>
                </a> */}
                <a href="https://twitter.com/Asyncronous14" target="_blank" rel="noreferrer">
                    <img style={{width: "35px"}} className="nav-link" src="/twitter-5-128.ico" alt="Twitter icon"/>
                </a>
                <a href="https://www.instagram.com/bentropy.wake/" target="_blank" rel="noreferrer">
                    <img style={{width: "35px"}} className="nav-link" src="/instagram-5-128.ico" alt="instagram icon"/>
                </a>
                <a href="mailto:bwakefield34@gmail.com" target="_blank" rel="noreferrer">
                    <img style={{width: "35px"}} className="nav-link" src="/gmail-128.png" alt="gmail icon"/>
                </a>
                    </div>
            </div>
        </nav>
    )
  }
  
  export default Navbar
  