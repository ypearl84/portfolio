import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <img className="profile-image img-responsive pull-left" src="assets/images/profile.jpg" alt="Portfolio | Rohan Khude - Back-end Developer" title="Portfolio | Rohan Khude - Back-end Developer" height="200" width="200" style="box-shadow: 0px 0px 10px #888; border-radius: 100px 100px 100px 100px;" />
                    <div className="profile-content pull-left">
                        <h1 className="name">Rohan Khude</h1>
                        <h2 className="desc">Back-end Developer</h2>
                        <ul className="social list-inline">
                            <li><a href="http://stackoverflow.com/users/4635388/rohan-khude?tab=profile" target="_blank" title="View StackOverflow profile of Rohan Khude"><i class="fa fa-stack-overflow"></i></a></li>
                            <li><a href="https://github.com/rohankhudedev" target="_blank" title="Github account of Rohan Khude"><i class="fa fa-github"></i></a></li>
                            <li><a href="https://gist.github.com/rohankhudedev" target="_blank" title="Gist account of Rohan Khude"><i class="fa fa-code"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/rohankhude/" target="_blank" title="Linkedin Profile of Rohan Khude"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="https://www.facebook.com/rohan.khude.75" target="_blank" title="Facebook profile of Rohan Khude"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="https://www.instagram.com/rohan.khude/" target="_blank" title="Instagram profile of Rohan Khude"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    
                    <div className="pull-right">
                        <a className="btn btn-cta-primary" href="mailto:rohanrkhude@gmail.com" target="_blank" title="Mail to rohanrkhude@gmail.com"><i class="fa fa-paper-plane"></i> Mail</a>&nbsp;
                        <a className="btn btn-info" href="skype:rohan_khude_r?chat" title="Contact Rohan Khude using Skype"><i class="fa fa-skype"></i> CHAT</a>
                    </div>
                </div>
            </header>
        )
    }
}