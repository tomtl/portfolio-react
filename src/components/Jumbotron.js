import React from 'react';

export class Jumbotron extends React.Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-md-4 offset-md-4">
                    <h1 class="display-4">Tom Lee</h1>
                    <p class="lead">Cartographer | Developer | GIS Analyst</p>
                  </div>
                  <div class="col-md-4">
                    <img src="images/coffee_compass.png" alt="logo"/>
                  </div>
                </div>
              </div>
            </div>
        );
    }
};
