import "./Home.css";
import {Link} from 'react-router-dom'
import "../components/FallingLeaves.css";
import { 
  useRef,
  useEffect, 
  useState,
  React 
} from "react";

export default function Projects() {
  const [imageIsLoading, setImageIsLoading] = useState(true);
  const [image, setImage] = useState({});
  const handleImageLoaded = () => {
    setImageIsLoading(false)
  };

  useEffect(() => {
    const image = new Image();
    image.onload = handleImageLoaded;
    image.src = "Headshot.jpg";
    setImage(image);
  }, [imageIsLoading]);

  return (
    <div className="Home">
      <div className="HomeContainer">
        <section className={"HeadshotContainer " + (imageIsLoading ? 'bg-loading' : 'bg-lazy')}></section>
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