import React from 'react';

// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export class Footer extends React.Component {
  render() {
    return(
      <section class="footer">
        <div id="contact">

          <div class="text-center">
            <h1>Contact</h1>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
              <ul class="list-unstyled list-inline social text-center">
                <li class="list-inline-item"><a href="https://github.com/tomtl"><FontAwesomeIcon icon={faGithub} size='2x' /></a></li>
                <li class="list-inline-item"><a href="https://www.linkedin.com/in/tomtlee/"><FontAwesomeIcon icon={faLinkedin} size='2x' /></a></li>
                <li class="list-inline-item"><a href="mailto:info@tomtlee.com"><FontAwesomeIcon icon={faEnvelope} size='2x' /></a></li>
              </ul>
            </div>
          </div>

          <div id="footer">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-right text-white">
                <p>{'\u00A9'} Thomas T. Lee 2018</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
