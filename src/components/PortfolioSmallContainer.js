import React from 'react';
import { PortfolioSmallSection } from './PortfolioSmallSection';
import { portfolioItems } from './portfolioItems';
import { PortfolioSmall } from './PortfolioSmall';

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
