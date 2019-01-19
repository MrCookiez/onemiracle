import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import { Navbar, Hero, HomeContent, Footer } from './components';
import './assets/css/main.css';

const newRoute = () => {
  return() {
    <div>
      <p>HEY</p>
    </div>
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
         {/* <img src={js} alt="logo" /> */}
         {/* <Navbar />
         <Hero />
         <HomeContent />
         <Footer /> */}
         <BrowserRouter>
            <Route path="new" component="" />
         </BrowserRouter>
      </div>
    );
  }
}

export default App;
