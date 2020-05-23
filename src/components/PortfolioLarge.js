import React from 'react';

export class PortfolioLarge extends React.Component {
  render() {
    let items = this.props.items;

    return (
      <div id="portfolio">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1>Portfolio</h1>
          </div>
        </div>

        <div class="container">
          <div class="row">
            {items}
          </div>
        </div>
        
      </div>
    );
  }
};
