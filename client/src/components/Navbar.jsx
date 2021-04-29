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
            <label for="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger"/>
            
            {/* <!-- [MENU ITEMS] --> */}
            <div id="hamitems">
                <Link to="/" className="nav-link" id="signup">Home</Link>
                <Link to="/projects" className="nav-link" id="signup">Projects</Link>
                <Link to="/gallery" className="nav-link" id="signup">Gallery</Link>
                <Link to="/book" className="nav-link" id="signup">WebSerial</Link>
                <Link to="/gamedev" className="nav-link" id="signup">GameDev</Link>
                <Link to="/about" className="nav-link" id="signup">About</Link>
                <Link to="/contact" className="nav-link" id="signup">Contact</Link>
            </div>
        </nav>
    )
  }
  
  export default Navbar
  