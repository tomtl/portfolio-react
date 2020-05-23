import React from 'react';
import { PortfolioLargeSection } from './PortfolioLargeSection';
import { PortfolioLarge } from './PortfolioLarge';
import { portfolioItems } from '../portfolioItems';

const portfolioItemsArray = portfolioItems.map((item) => (
  <PortfolioLargeSection
    src={item.src}
    link={"/portfolio/" + item.id}
    altText={item.altText}
    title={item.title}
    summary={item.summary}
  />
));

export class PortfolioLargeContainer extends React.Component {
  render() {
    let items = portfolioItemsArray;
    return <PortfolioLarge items={items} />;
  }
};
