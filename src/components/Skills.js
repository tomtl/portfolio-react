import React from 'react';

export class Skills extends React.Component {
  render() {
    return(
      <div>
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
    )
  }
};
