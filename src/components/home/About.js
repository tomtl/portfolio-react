import React from 'react';

export class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = { imageSrc: "images/mugshot.png" };
    this.showAlternateMugshot = this.showAlternateMugshot.bind(this);
    this.showNormalMugshot = this.showNormalMugshot.bind(this);
  }

  showAlternateMugshot() {
    this.setState({ imageSrc: "images/mugshot_v2.png" });
  }

  showNormalMugshot() {
    this.setState({ imageSrc: "images/mugshot.png" });
  }

  render() {
    return(
      <section class="content" id="about">
        <h1>About me</h1>
        <div class="row align-items-center">
          <div class="col-md-3">
            <img src={this.state.imageSrc}
              alt="mugshot"
              onMouseOver={this.showAlternateMugshot}
              onMouseOut={this.showNormalMugshot} />
          </div>
          <div class="col-md-9">
            <p class="lead">I’m a GIS analyst specializing in geospatial data analysis, GIS development, and interactive cartographic design. I live in Boston, MA and am originally from Perth, Western Australia. I get excited about coding data models, interrogating spatial relationships, and designing cartographic products that bring insight to complex problems.</p>
          </div>
        </div>
      </section>
    )
  }
};

// onMouseOver={e => (e.currentTarget.src = "images/mugshot_v2.png")}
