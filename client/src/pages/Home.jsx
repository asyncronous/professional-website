import "./Home.css";
import {Link} from 'react-router-dom'
import "../components/FallingLeaves.css";
import { 
  useEffect, 
  useState,
  React 
} from "react";

export default function Home({siteIsLoading}) {
  const [imageIsLoading, setImageIsLoading] = useState(true);
  const [heroIsLoading, setHeroIsLoading] = useState(true);

  const handleImageLoaded = () => {
    setTimeout(() => {
      setImageIsLoading(false)
    }, 750);
  };

  useEffect(() => {

    setTimeout(() => {

      setHeroIsLoading(false);
      
      const img = new Image();
      img.onload = handleImageLoaded;
      img.src = "Headshot.jpg";

    }, 500);

  }, [imageIsLoading]);

  return (
    <div className="Home">
      <div className="HomeContainer">
        <section className={"HeadshotContainer " + (imageIsLoading || siteIsLoading ? 'bg-loading' : 'bg-lazy')}></section>
        {heroIsLoading ? (
          <></>
        ) : (
          <div className="HomeInfo">
            <h1 className="HomeTitle">
              bwake.dev
            </h1>
            <h2 className="HomeContent">
              <Link to="/about" className="HyperGold nav-link">Software Engineer | Part Time Game Developer | Amateur Writer & Photographer</Link>
            </h2>
          </div>
        )}
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