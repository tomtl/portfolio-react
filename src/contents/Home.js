import React from 'react';
import { Navbar } from '../components/Navbar';
import { Jumbotron } from '../components/Jumbotron';
import { Footer } from '../components/Footer'

export class Home extends React.Component {
    render() {
        return (
          <div className="App">

            <Navbar />

            <Jumbotron />

              <div class="container">

                <section class="content" id="about">
                  <h1>About me</h1>
                  <div class="row align-items-center">
                    <div class="col-md-3">
                      <img src='images/mugshot.png' alt="mugshot" onmouseover="this.src='assets/mugshot_v2.png'" onmouseout="this.src='assets/mugshot.png'"/>
                    </div>
                    <div class="col-md-9">
                      <p class="lead">I’m a GIS analyst specializing in geospatial data analysis, GIS development, and interactive cartographic design. I live in Boston, MA and am originally from Perth, Western Australia. I get excited about coding data models, interrogating spatial relationships, and designing cartographic products that bring insight to complex problems.</p>
                    </div>
                  </div>
                </section>

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

                <section class="content" id="skills">
                  <h1>Skills</h1>
                  <div class="row">
                    <section class="col-lg-3 col-md-6">
                      <h4>GIS</h4>
                      <ul>
                        <li>Esri ArcGIS</li>
                        <li>QGIS</li>
                        <li>PostGIS</li>
                        <li>GeoServer</li>
                        <li>GDAL/OGR</li>
                        <li>MapBox</li>
                        <li>ArcGIS Online</li>
                        <li>Open Street Map</li>
                      </ul>
                    </section>

                    <section class="col-lg-3 col-md-6">
                      <h4>Programming</h4>
                        <ul>
                          <li>Python</li>
                          <li>SQL</li>
                          <li>Javascript</li>
                          <li>Java</li>
                          <li>Ruby</li>
                          <li>Git</li>
                          <li>Docker</li>
                        </ul>
                    </section>
                    <section class="col-lg-3 col-md-6">
                      <h4>Data analysis / DB</h4>
                      <ul>
                        <li>Postgres</li>
                        <li>ArcSDE</li>
                        <li>Tableau</li>
                        <li>DBT</li>
                        <li>Redshift</li>
                        <li>SQLite</li>
                      </ul>
                    </section>
                    <section class="col-lg-3 col-md-6">
                      <h4>Design</h4>
                      <ul>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>CartoCSS</li>
                        <li>MapBox Studio</li>
                      </ul>
                    </section>
                  </div>
                </section>

                <section class="content" id="ed">
                  <h1>Education</h1>
                  <p><strong>Master of Science (GIS & Web Map Programming),</strong> University of Wisconsin - Madison (2020)</p>
                  <p><strong>Master of Engineering (GIS),</strong> University of Colorado - Denver (2013)</p>
                  <p><strong>Bachelor of Science (Cartography)</strong>, Curtin University (2002)</p>
                </section>

                <section class="content" id="exp">
                  <h1>Experience</h1>
                  <p><strong>GIS Programmer Analyst,</strong> Altman Vilandrie & Co. | Boston MA | 2016 - Present</p>
                  <p><strong>GIS Specialist,</strong> Halliwell Engineering | East Providence RI | 2014 - 2016</p>
                  <p><strong>GIS Analyst,</strong> Anadarko Petroleum | Denver CO | 2011 - 2014</p>
                  <p><strong>GIS Analyst,</strong> Spatial Solutions | Perth, Western Australia | 2007 - 2011</p>
                  <a class="btn btn-outline-secondary" href="resume.html" role="button">Full resume</a>
                </section>
              </div>

            <Footer />

          </div>
        );
    }
};
