import React from 'react';
import { Navbar } from '../components/Navbar';
import { Jumbotron } from '../components/Jumbotron';
import { Footer } from '../components/Footer';
import { HomeComponents } from '../components/HomeComponents';

export class Home extends React.Component {
    render() {
        return (
          <div className="App">
            <Navbar />
            <Jumbotron />
            <HomeComponents />
            <Footer />
          </div>
        );
    }
};
