import React from 'react';

export class PortfolioSmall extends React.Component {
  render() {
    return (
      <div id="portfolio">
        <h1>Portfolio</h1>
        <div class="row">
          <section class="col-sm-6 col-md-4">
            <a href="portfolio-risk-modeller.html"><img src="images/risk-modeller-sm.png" alt="Nitrate cancer risk modeller"/></a>
            <h4>MapBox GL and Turf.JS geospatial analysis app</h4>
            <p>Investigates the spatial relationship between well nitrate levels and cancer rates in Wisconsin.</p>
          </section>
          <section class="col-sm-6 col-md-4">
            <a href="portfolio-forest-map.html"><img src="images/forest-map-mobile-small.png" alt="National forest map app"/></a>
            <h4>ArcGIS JS national forest map</h4>
            <p>White Mountain National Forest discovery web map application.</p>
          </section>
          <section class="col-sm-6 col-md-4">
            <a href="portfolio-aviation.html"><img src="images/us-aviation.png" alt="Apache Spark geospatial analysis"/></a>
            <h4>Apache Spark geospatial analysis</h4>
            <p>Geospatial analysis of U.S. domestic aviation market</p>
          </section>
          <section class="col-sm-6 col-md-4">
            <a href="leaflet-power/power.html"><img src="images/leaflet-power.png" alt="Power source web map"/></a>
            <h4>Leaflet interactive web map</h4>
            <p>State power generation by source and year</p>
          </section>
          <section class="col-sm-6 col-md-4">
            <a href="portfolio-critters-tracker.html"><img src="images/critters-tracker-large.png" alt="Critters tracker app"/></a>
            <h4>ArcGIS JavaScript API web map app</h4>
            <p>Wildlife tracker web mapping application</p>
          </section>
          <section class="col-sm-6 col-md-4">
            <a href="portfolio-d3.html"><img src="images/d3.png" alt="D3 coordinated visualization"/></a>
            <h4>D3 coordinated visualization</h4>
            <p>New York City housing costs</p>
          </section>
          <section class="col-sm-6 col-md-4">
            <a href="portfolio-terrain.html"><img src="images/terrain_sm.png" alt="Terrain map"/></a>
            <h4>ITC - Northern Himalayas</h4>
            <p>Terrain map showing cycling race route</p>
          </section>
          <section class="col-sm-6 col-md-4">
            <a href="portfolio-mapbox.html"><img src="images/mapbox.png" alt="Mapbox tileset"/></a>
            <h4>Custom Web Map Tileset</h4>
            <p>Mapbox vector webmap tileset based on a film</p>
          </section>
          <section class="col-sm-6 col-md-4">
            <a href="portfolio-infographic.html"><img src="images/infographic.png" alt="Infographic"/></a>
            <h4>Education gap vs GDP</h4>
            <p>Infographic of international education and gender vs GDP</p>
          </section>
          <section class="col-sm-6 col-md-4">
            <a href="portfolio-popdensity.html"><img src="images/pop_density.png" alt="Pop density"/></a>
            <h4>U.S. Population density</h4>
            <p>Quick map showing census block group population density for the USA.</p>
          </section>
        </div>
        <a class="btn btn-outline-secondary" href="portfolio.html" role="button">Full porfolio</a>
      </div>
    )
  }
};
