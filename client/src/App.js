import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {useState, useEffect} from "react"
import { UserProvider } from './components/UserContext'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Gallery from "./pages/Gallery"
import Projects from "./pages/Projects"
import Home from "./pages/Home"

// function userReducer(state, action) {
//   switch (action.type) {
//     case 'login': {
//       return {loggedInUser: true}
//     }
//     case 'logout': {
//       return {loggedInUser: false}
//     }
//     default: {
//       throw new Error(`Unhandled action type: ${action.type}`)
//     }
//   }
// }

// const UserContext = React.createContext({loggedInUser: false})

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false) 

  // function useCount() {
  //   const context = React.useContext(UserContext)
  //   if (context === undefined) {
  //     throw new Error('useCount must be used within a CountProvider')
  //   }
  //   return context
  // }

  useEffect(() => {
  //   fetch(`${urlDomain}/users/me/`, {
  //     method: "GET",
  //     credentials: 'include'
  //   })
  //   .then(data => data.json())
  //   .then(user => {
  //     // console.log("GETTING USER OBJ APPJS")
  //     // console.log(user)
  //     if (user) {
  //       setLoggedInUser(user.user)
  //     }
  // })
    // setLoggedInUser(true)
  }, [])

  return (
    <UserProvider value={loggedInUser}>
    <div className="Container">
      <BrowserRouter > 
        <Header />

        <div className="ContentContainer">
          <Navbar />
          <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/blog" render={(props) => <div>blog</div>} />
          <Route exact path="/gallery" render={(props) => <Gallery {...props} />} />
          <Route exact path="/projects" render={(props) => <Projects {...props} />} />
          <Route exact path="/about" render={(props) => <div>about</div>} />
          {/* <Route exact path="/contact" render={(props) => <Gallery {...props} loggedInUser={loggedInUser} urlDomain={urlDomain}/>} /> */}
          {/* <Route exact path="/blog" render={(props) => <EditJobPage {...props} loggedInUser={loggedInUser} urlDomain={urlDomain}/>} /> */}
          {/* <Route exact path="/gallery" render={() => <GalleryPage />} />
          <Route exact path="/projects" render={() => <AboutPage />} />
          <Route exact path="/about" render={() => <ContactPage loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} urlDomain={urlDomain}/>} />
        <Route exact path="/contact" render={() => <ContactPage loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} urlDomain={urlDomain}/>} /> */}

          {/* <Route
            exact path="/users/login" render={() => 
              <LoginPage 
              loggedInUser={loggedInUser} 
              setLoggedInUser={setLoggedInUser} 
              urlDomain={urlDomain}
              />} 
              />
              
              <Route 
              exact path="/users/register" render={() => 
                <SignUpPage 
                loggedInUser={loggedInUser} 
                setLoggedInUser={setLoggedInUser} 
                urlDomain={urlDomain}
                />} 
              /> */}
{/* 
          <Route 
          exact path="/users/:id" render={(props) => 
            <EditUserPage {...props} 
            loggedInUser={loggedInUser} 
            setLoggedInUser={setLoggedInUser}
            urlDomain={urlDomain}
            />} 
            />
            
            <Route exact path="/" render={() => 
              <HomePage 
              loggedInUser={loggedInUser} 
              setLoggedInUser={setLoggedInUser} 
              urlDomain={urlDomain} 
              />} 
            /> */}

            <Route path = "/" render={() => <h1>404 page not found</h1> }/>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
    </UserProvider>
  );
}

export default App;
