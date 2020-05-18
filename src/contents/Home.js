import React from 'react';

import { Jumbotron } from '../components/Jumbotron';
import { About } from '../components/About';
import { PortfolioSmallContainer } from '../components/PortfolioSmallContainer';
import { Skills } from '../components/Skills';

export class Home extends React.Component {
    render() {
        return (
          <div className="App">
            <Jumbotron />
            <div class="container">
              <About />
              <PortfolioSmallContainer />
              <Skills />
            </div>
          </div>
        );
    }
};
