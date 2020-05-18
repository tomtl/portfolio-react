import React from 'react';
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
    render() {
        return(
            <nav class="navbar navbar-expand-lg">
                <Link to="/" class="navbar-brand">TOM LEE</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-item nav-link active">Home </Link>
                        <Link to="/portfolio" class="nav-item nav-link">Portfolio</Link>
                        <Link to="/resume" class="nav-item nav-link">Resume</Link>
                    </div>
                </div>
            </nav>
        )
    }
};
