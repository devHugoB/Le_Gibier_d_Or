import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import HomePage from './pages/HomePage';
import OurRestaurant from './pages/OurRestaurant';
import OurCarte from './pages/OurCarte';
import Reservation from './pages/Reservation';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/restaurant' component={OurRestaurant} />
          <Route path='/carte' component={OurCarte} />
          <Route path='/contact' component={Contact} />
          <Route path='/reservation' component={Reservation} />       
          <Route path='**' component={NotFound} />       
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
