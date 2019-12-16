import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <img className="profile-image img-responsive pull-left" src="" alt="Portfolio | hyojoung yoon - Full-stack Developer" title="Portfolio | hyojoung yoon - Full-stack Developer" height="200" width="200" />
                    <div className="profile-content pull-left">
                        <h1 className="name">hyojoung yoon</h1>
                        <h2 className="desc">Full-stack Developer</h2>
                        <ul className="social list-inline">
                            <li>
                                <a href="https://gist.github.com/ypearl84" target="_blank" title="Gist account of hyojoung yoon">
                                    <i className="fa fa-code"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank" title="Linkedin Profile of hyojoung yoon">
                                    <i className="fa fa-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" title="Facebook profile of hyojoung yoon">
                                    <i className="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" target="_blank" title="Instagram profile of hyojoung yoon">
                                    <i className="fa fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="pull-right">
                        <a className="btn btn-cta-primary" href="mailto:y.pearl84@gmail.com" target="_blank" title="Mail to y.pearl84@gmail.com"><i class="fa fa-paper-plane"></i> Mail</a>&nbsp;
                    </div>
                </div>
            </header>
        )
    }
}