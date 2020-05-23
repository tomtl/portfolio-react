import React from 'react';

export class PortfolioSmall extends React.Component {
  render() {
    let items = this.props.items;

    return (
      <div id="portfolio">
        <h1>Portfolio</h1>
        <div class="row">

          {items}

        </div>
        <a class="btn btn-outline-secondary" href="/portfolio" role="button">Full porfolio</a>
      </div>
    );
  }
};
