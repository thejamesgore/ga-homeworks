import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar.js";
import Landing from "./components/Landing.js";
import Gallery from "./components/Gallery.js";
import Linebreak from "./components/Linebreak.js";
import Menu from "./components/Menu"
import About from "./components/About.js";
import Footer from "./components/Footer.js";

// import ToDoList from "./components/ToDoList";
// import Instructions from "./components/Instructions";

import "./App.css";

function App() {
  

  return (
    <div className="App">
      <NavBar />
      <Landing />
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={() => <p>about</p>} />
        </Switch>
      </BrowserRouter>
<Gallery />
<Linebreak />
<Menu />
<Linebreak />
<About />
<Footer />
    
    </div>
  );
}

export default App;