import React from 'react';

export class Navbar extends React.Component {
    render() {
        return(
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="index.html">TOM LEE</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="index.html">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="portfolio.html">Portfolio</a>
                        <a class="nav-item nav-link" href="resume.html">Resume</a>
                    </div>
                </div>
            </nav>
        )
    }
};
