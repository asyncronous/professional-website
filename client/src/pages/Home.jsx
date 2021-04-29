// import { Link } from 'react-router-dom'
import "./Home.css";
import UserContext from "../components/UserContext";

import React from "react";
import { 
  useState, 
  useEffect, 
  useContext 
} from "react";

export default function Projects(props) {
  const [projects, setProjects] = useState(null);

  const user = useContext(UserContext);
  const fileInput = React.useRef();
  const dummyRef = React.useRef();

  return (
    <div className="Home">
      {/* <h1 className="Heading">Portfolio {user.loggedInUser}</h1> */}
      {/* <div className="HomeContainer">
      </div> */}
      <div className="HomeContainer">
        <section className="HeadshotContainer">
        </section>
        <div className="HomeInfo">
                <h1 className="HomeTitle">
                    Benjamin Wakefield
                </h1>
                {/* <h1 className="HomeTitle" style={{fontSize: "16px"}}>
                    Junior Full Stack Developer | 
                    Unity Dev | 
                    Photographer
                </h1> */}
                <h1 className="HomeContent">
                Junior Full Stack Developer | 
                    Unity Dev | 
                    Amateur Writer & Photographer
                </h1>
        </div>
      </div>
      
    </div>
  );
}