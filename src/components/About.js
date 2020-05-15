import React from 'react';

export class About extends React.Component {
  render() {
    return(
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
    )
  }
};
