import React from 'react';
import { Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './contents/Home';
import { Portfolio } from './contents/Portfolio';
import { Resume } from './contents/Resume';
import { Footer } from './components/Footer';

import { RiskModeller } from './contents/Portfolio/RiskModeller';


export class App extends React.Component {
    render() {
        return (
          <div>
            <Navbar />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/resume" component={Resume} />
              <Route path="/portfolio-risk-modeller" component={RiskModeller} />
            </Switch>
            <Footer />
          </div>
        )
    }
};
