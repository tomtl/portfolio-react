import React from 'react';
import { Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './contents/Home';
import { Portfolio } from './contents/Portfolio';
import { PortfolioExample } from './contents/PortfolioExample';
import { Resume } from './contents/Resume';
import { Footer } from './components/Footer';

export class App extends React.Component {
    render() {
        return (
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route path="/resume" component={Resume} />
              <Route path="/portfolio/:id" component={PortfolioExample} />
            </Switch>
            <Footer />
          </div>
        )
    }
};
