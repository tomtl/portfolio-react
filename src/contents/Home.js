import React from 'react';

import { Jumbotron } from '../components/Jumbotron';
import { About } from '../components/About';
import { PortfolioSmall } from '../components/PortfolioSmall';
import { Skills } from '../components/Skills';

export class Home extends React.Component {
    render() {
        return (
          <div className="App">
            <Jumbotron />
            <div class="container">
              <About />
              <PortfolioSmall />
              <Skills />
            </div>
          </div>
        );
    }
};
