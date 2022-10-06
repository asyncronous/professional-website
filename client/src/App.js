import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom"
import { useState, useEffect } from "react"
import { UserProvider } from './components/UserContext'
import Entry from './Entry';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false) 

  const [imageIsLoading, setImageIsLoading] = useState(true);
  const [image, setImage] = useState({});
  const handleImageLoaded = () => {
    setImageIsLoading(false)
  };

  useEffect(() => {
    const image = new Image();
    image.onload = handleImageLoaded;
    image.src = "https://prof-website.s3-ap-southeast-2.amazonaws.com/background.jpg";
    setImage(image);
  }, [imageIsLoading]);

  useEffect(() => {
    fetch('/api/posts/canpost', {
      method: "GET",
      credentials: 'include'
    })
    .then(data => data.json())
    .then(user => {
      if (user.can_post === "true") {
        setLoggedInUser(true)
      }
    })
  }, [])

  return (
    <UserProvider value={loggedInUser}>
      <div className="Container">
        <BrowserRouter > 
          <Entry />
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
