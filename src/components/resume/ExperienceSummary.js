import React from 'react';

export class ExperienceSummary extends React.Component {
  render() {
    return(
      <section class="content" id="exp">
        <h1>Experience</h1>
        <p><strong>GIS Programmer Analyst,</strong> Altman Vilandrie & Co. | Boston MA | 2016 - Present</p>
        <p><strong>GIS Specialist,</strong> Halliwell Engineering | East Providence RI | 2014 - 2016</p>
        <p><strong>GIS Analyst,</strong> Anadarko Petroleum | Denver CO | 2011 - 2014</p>
        <p><strong>GIS Analyst,</strong> Spatial Solutions | Perth, Western Australia | 2007 - 2011</p>
        <a class="btn btn-outline-secondary" href="/resume" role="button">Full resume</a>
      </section>
    );
  }
};
