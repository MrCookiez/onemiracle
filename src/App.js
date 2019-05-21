import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Router, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
// Config
import firebase from './config/firebase';
// Main Pages
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import Forum from './pages/Forum';
import Lessons from './pages/Lessons';
// Lessons
import HtmlLessons from './pages/Lessons/Html';
import CssLessons from './pages/Lessons/Css';
import JsLessons from './pages/Lessons/Js';
import PhpLessons from './pages/Lessons/Php';
import MySqlLessons from './pages/Lessons/Mysql';

import NotFound from "./pages/NotFound";
import './assets/css/main.css';
import { CircularProgress } from '@material-ui/core';


const App = () => {

    const [firebaseInitialized, setFirebaseInitialized] = useState(false)

    useEffect(() => {
        firebase.isInitialized().then(val => {
          setFirebaseInitialized(val)
        })
    })

    return !firebaseInitialized !== false ? (
        <Router>
        <div className="App">
            <Navigation />
            <div>
              <Switch>
                <Route path='/' component={Home} exact >ΑΡΧΙΚΗ</Route>
                <Route path='/contact' component={Contact} >ΕΠΙΚΟΙΝΩΝΙΑ</Route>
                <Route path='/about' component={About} >About</Route>
                <Route path='/blog' component={Blog} >Blog</Route>
                <Route path='/forum' component={Forum} >Forum</Route>
                <Route path='/lessons' component={Lessons} >ΜΑΘΗΜΑΤΑ</Route>
                <Route path='/html-lessons' component={HtmlLessons} >ΜΑΘΗΜΑΤΑ - HTML</Route>
                <Route path='/css-lessons' component={CssLessons} >ΜΑΘΗΜΑΤΑ - CSS</Route>
                <Route path='/js-lessons' component={JsLessons} >ΜΑΘΗΜΑΤΑ - JavaScript</Route>
                <Route path='/php-lessons' component={PhpLessons} >ΜΑΘΗΜΑΤΑ - PHP</Route>
                <Route path='/mysql-lessons' component={MySqlLessons} >ΜΑΘΗΜΑΤΑ - mySQL</Route>
                <Route path='/login' component={Login} >Login - OneMiracle</Route>
                <Route path='/register' component={Register} >Register - OneMiracle</Route>
                <Route path='/dashboard' component={Dashboard} >Dashboard - OneMiracle</Route>
                <Route component={NotFound} />
              </Switch>
            </div>
        </div>
    </Router>
    ) : (
      <div id='loader'><CircularProgress /></div>
    );
};

export default App;
