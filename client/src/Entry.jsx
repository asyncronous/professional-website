import { React, useEffect } from 'react';
import './App.css';
import { Switch, Route, useHistory } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Gallery from "./pages/Gallery"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Book from "./pages/Book"
import Home from "./pages/Home"

export default function Entry() {

  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
        window.scrollTo(0, 0);
    });
    return unlisten;
  }, [history]);

  return (
    <>
        <Header />
            <div className="ContentContainer">
                <Navbar />
                <Switch>
                    <Route exact path="/" render={(props) => <Home {...props} />} />
                    <Route exact path="/book" render={(props) => <Book {...props} />} />
                    <Route exact path="/projects" render={(props) => <Projects {...props} />} />
                    <Route exact path="/gallery" render={(props) => <Gallery {...props} />} />
                    <Route exact path="/about" render={(props) => <About {...props} />} />
                    <Route path = "/" render={() => <h1>404 page not found</h1> }/>
                </Switch>
            </div>
        <Footer />
    </>
  );
}
