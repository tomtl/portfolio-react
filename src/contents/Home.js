import React from 'react';

import { Jumbotron } from '../components/Jumbotron';
import { About } from '../components/About';
import { PortfolioSmallContainer } from '../components/PortfolioSmallContainer';
import { Skills } from '../components/resume/Skills';
import { Education} from '../components/resume/Education';
import { ExperienceSummary } from '../components/resume/ExperienceSummary';

export class Home extends React.Component {
    render() {
        return (
          <div className="App">
            <Jumbotron />
            <div class="container">
              <About />
              <PortfolioSmallContainer />
              <Skills />
              <Education />
              <ExperienceSummary />
            </div>
          </div>
        );
    }
};
