import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import Forum from './pages/Forum';
import Lessons from './pages/Lessons';
import Error from "./pages/Error";
import './assets/css/main.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <div id="outer-container">
            
            <Navigation />

            <main id="page-wrap" className='content'>
              <Switch>
                <Route path='/' component={Home} exact >ΑΡΧΙΚΗ</Route>
                <Route path='/contact' component={Contact} >ΕΠΙΚΟΙΝΩΝΙΑ</Route>
                <Route path='/about' component={About} >About</Route>
                <Route path='/blog' component={Blog} >Blog</Route>
                <Route path='/forum' component={Forum} >Forum</Route>
                <Route path='/lessons' component={Lessons} >ΜΑΘΗΜΑΤΑ</Route>
                <Route component={Error} />
              </Switch>
            </main>
          
          </div>
          
        
          
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
