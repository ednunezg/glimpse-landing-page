import React from 'react';
import './app.scss';

import Home from './views/Home';
import About from './views/About'
import FAQ from './views/FAQ';
import TermsAndConditions from './views/TermsAndConditions'
import PrivacyPolicy from './views/PrivacyPolicy'

import Header from './templates/Header';
import Footer from './templates/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="container">
          <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route path="/faq"> <FAQ /> </Route>
            <Route path="/about"> <About /> </Route>
            <Route path="/terms-and-conditions"> <TermsAndConditions /> </Route>
            <Route path="/privacy-policy"> <PrivacyPolicy /> </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
  );
}

export default App;
