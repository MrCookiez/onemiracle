import React from 'react';
import Navigation from '../../components/Navigation';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Contact from '../../pages/Contact';
// import About from '../../pages/About';
// import Blog from '../../pages/Blog';
// import Forum from '../../pages/Forum';
// import Lessons from '../../pages/Lessons';

const Routes = () => {
    return (
            <div>
                <Navigation />
                <Switch>
                    <Route path='/' component={Home} exact >Home</Route>
                    <Route path='/contact' component={Contact} >Contact</Route>
                    {/* <Route path='/about' component={About} >About</Route>
                    <Route path='/blog' component={Blog} >Blog</Route>
                    <Route path='/forum' component={Forum} >Forum</Route>
                    <Route path='/lessons' component={Lessons} >Lessons</Route> */}
                </Switch>
                
            </div>
    );
};

export default Routes;