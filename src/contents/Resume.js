import React from 'react';

import { Education } from '../components/resume/Education';
import { Experience } from '../components/resume/Experience';
import { Skills } from '../components/resume/Skills';

export class Resume extends React.Component {
  render() {
    return(
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1>Resume</h1>
          </div>
        </div>

        <div class="container">
          <Education />
          <Experience />
          <Skills />
        </div>
      </div>
    )
  }
};
