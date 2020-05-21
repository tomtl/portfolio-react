import React from 'react';
import { useParams } from "react-router-dom";
import { portfolioItems } from '../components/portfolioItems';

export function PortfolioExample() {
  let { id } = useParams();
  let item = find(parseInt(id));

  return(
    <div>

      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1>{item.title}</h1>
        </div>
      </div>

    <div class="container">
      <div id="example">
        <section class="align-items-center">
          <h4>{item.abstract}</h4>
          <p>{item.description}</p>
          <br/>
          <a href={item.appLink}><img src={'../' + item.srcLarge} alt={item.altText}/></a>
        </section>
      </div>
    </div>

    </div>
  );
};

function find(id) {
  return portfolioItems.find(p => p.id === id);
};
