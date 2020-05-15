import React from 'react';
import { About } from '../components/About';
import { PortfolioSmall } from '../components/PortfolioSmall';
import { Skills } from '../components/Skills'

export class HomeComponents extends React.Component {
  render() {
    return(
      <div class="container">
        <About />
        <PortfolioSmall />
        <Skills />
      </div>
    )
  }
};
