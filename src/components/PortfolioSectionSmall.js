import React from 'react';
import { Link } from "react-router-dom";

export class PortfolioSectionSmall extends React.Component {
  render() {
    let props = this.props;

    return(
      <section class="col-sm-6 col-md-4">
        <Link to={props.link}><img src={props.src} alt={props.altText}/></Link>
        <h4>{props.title}</h4>
        <p>{props.summary}</p>
      </section>
    );
  }
};
