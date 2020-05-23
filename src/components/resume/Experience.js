import React from 'react';

export class Experience extends React.Component {
  render() {
    return (
      <section class="content" id="exp">
        <h1>Experience</h1>
        <div class="d-flex justify-content-between">
          <div><span><strong>GIS Programmer Analyst,</strong> Altman Vilandrie & Co. - Boston, MA </span></div>
          <div><em>2016 - Present</em></div>
        </div>
        <p>Geospatial data analysis expert for telecom consulting company. Heavy use of Postgres SQL and PostGIS to analyze and manage large data sets. Trained users in QGIS.</p>

        <div class="d-flex justify-content-between">
          <div><span><strong>GIS Specialist,</strong> Halliwell Engineering - East Providence, RI </span></div>
          <div><em>2014 - 2016</em></div>
        </div>
        <p>GIS analysis and map creation in support of engineering and insurance investigations relating to storm damage. Tasks include working with USGS, FEMA and NOAA data to investigate the extent and cause of damage resulting from major catastrophes such as hurricanes, flooding, tornadoes, and earthquakes.</p>

        <div class="d-flex justify-content-between">
          <div><span><strong>GIS Analyst,</strong> Anadarko Petroleum, - Denver, CO </span></div>
          <div><em>2011 - 2014</em></div>
        </div>
        <p>GIS support to permitting team of major petroleum company. Significant work automating tasks with Python and ArcPy. Designed and implemented versioned geodatabase.</p>

        <div class="d-flex justify-content-between">
          <div><span><strong>GIS Analyst,</strong> Spatial Solutions - Perth, Western Australia </span></div>
          <div><em>2007 - 2011</em></div>
        </div>
        <p>Provided GIS services to INPEX Browse Ltd., a major Japanese oil and gas company carrying out a $20B project to develop Ichthys Gas Field off Northern Australia. Implemented a company-wide database. Created standards for maps.</p>
      </section>
    );
  }
};
