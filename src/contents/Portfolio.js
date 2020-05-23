import React from 'react';

import { Jumbotron } from '../components/Jumbotron';
import { PortfolioLargeContainer } from '../components/PortfolioLargeContainer';

export class Portfolio extends React.Component {
    render() {
        return (
          <div className="App">
            <PortfolioLargeContainer />
          </div>
        );
    }
};
