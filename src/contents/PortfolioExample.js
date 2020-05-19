import React from 'react';
import { useParams } from "react-router-dom";
import { portfolioItems } from '../components/portfolioItems';

export function PortfolioExample() {
  let { id } = useParams();
  let item = find(parseInt(id));

  return(
    <div>
      <h1>{item.name}</h1>
      <p>{item.summary}</p>
    </div>
  );
};

function find(id) {
  return portfolioItems.find(p => p.id === id);
};
