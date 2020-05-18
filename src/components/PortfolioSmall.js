import React from 'react';
import { PortfolioSectionSmall } from './PortfolioSectionSmall';

const portfolioItems = [
  {
    name: "Risk Modeller",
    src: "images/risk-modeller-sm.png",
    link: "/portfolio-risk-modeller",
    altText: "Nitrate cancer risk modeller",
    title: "MapBox GL and Turf.JS geospatial analysis app",
    summary: "Investigates the spatial relationship between well nitrate levels and cancer rates in Wisconsin."
  },
  {
    name: "Forest Map",
    src: "images/forest-map-mobile-small.png",
    link: "/portfolio-forest-map",
    altText: "National forest map app",
    title: "ArcGIS JS national forest map",
    summary: "White Mountain National Forest discovery web map application."
  },
  {
    name: "US Aviation",
    src: "images/us-aviation.png",
    link: "/portfolio-aviation",
    altText: "Apache Spark geospatial analysis",
    title: "Apache Spark geospatial analysis",
    summary: "Geospatial analysis of U.S. domestic aviation market."
  },
  {
    name: "US Power Generation",
    src: "images/leaflet-power.png",
    link: "/portfolio-power",
    altText: "Power source web map",
    title: "Leaflet interactive web map",
    summary: "State power generation by source and year."
  },
  {
    name: "Critters Tracker",
    src: "images/critters-tracker-large.png",
    link: "/portfolio-critters-tracker",
    altText: "Critters tracker app",
    title: "ArcGIS JavaScript API web map app",
    summary: "Wildlife tracker web mapping application."
  },
  {
    name: "NY Housing",
    src: "images/d3.png",
    link: "/portfolio-d3",
    altText: "D3 coordinated visualization",
    title: "D3 coordinated visualization",
    summary: "New York City housing costs."
  },
  {
    name: "Northern Himalayas",
    src: "images/terrain_sm.png",
    link: "/portfolio-terrain",
    altText: "Terrain map",
    title: "ITC - Northern Himalayas",
    summary: "Terrain map showing cycling race route."
  },
  {
    name: "MapBox tile set",
    src: "images/mapbox.png",
    link: "/portfolio-mapbox",
    altText: "Mapbox tileset",
    title: "Custom Web Map Tileset",
    summary: "Mapbox vector webmap tileset based on a film."
  },
  {
    name: "Infographic",
    src: "images/infographic.png",
    link: "/portfolio-infographic",
    altText: "Infographic",
    title: "Education gap vs GDP",
    summary: "Infographic of international education and gender vs GDP."
  },
  {
    name: "Pop Density",
    src: "images/pop_density.png",
    link: "/portfolio-popdensity",
    altText: "Pop density",
    title: "U.S. Population density",
    summary: "Quick map showing census block group population density for the USA."
  },
];

const portfolioItemsArray = portfolioItems.map((item) => (
  <PortfolioSectionSmall
    src={item.src}
    link={item.link}
    altText={item.altText}
    title={item.title}
    summary={item.summary}
  />
));

export class PortfolioSmall extends React.Component {
  render() {
    return (
      <div id="portfolio">
        <h1>Portfolio</h1>
        <div class="row">

          {portfolioItemsArray}

        </div>
        <a class="btn btn-outline-secondary" href="portfolio.html" role="button">Full porfolio</a>
      </div>
    )
  }
};
