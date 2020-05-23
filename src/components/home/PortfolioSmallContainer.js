import React from 'react';
import { PortfolioSmallSection } from './PortfolioSmallSection';
import { PortfolioSmall } from './PortfolioSmall';
import { portfolioItems } from '../portfolioItems';

const portfolioItemsArray = portfolioItems.map((item) => (
  <PortfolioSmallSection
    src={item.src}
    link={"/portfolio/" + item.id}
    altText={item.altText}
    title={item.title}
    summary={item.summary}
  />
));

export class PortfolioSmallContainer extends React.Component {
  render() {
    let items = portfolioItemsArray;
    return <PortfolioSmall items={items} />;
  }
};
