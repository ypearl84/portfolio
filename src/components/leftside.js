import React, { Component } from 'react'
import About from './about'
import Latest from './latest';
import Projects from './projects';
import Experience from './experience';

export default class Leftside extends Component {
    render() {
        return (
            <div className="primary col-md-8 col-sm-12 col-xs-12">
                <About />
                <Latest />
                <Projects />
                <Experience />
            </div>
        )
    }
}