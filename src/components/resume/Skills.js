import React from 'react';

export class Skills extends React.Component {
  render() {
    return(
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
    );
  }
};
