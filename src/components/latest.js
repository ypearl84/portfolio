import React, { Component } from 'react'

export default class Latest extends Component {
    render() {
        return (
            <section class="latest section">
                <div class="section-inner">
                    <h2 class="heading">Latest Projects</h2>
                    <div class="content"> 
                        <div class="item featured text-center">
                            <h3 class="title"><a href="https://justcut.today" target="_blank" title="Justcut Today">Justcut Today</a></h3>
                            <p class="summary">Order Meat &amp; Fish Online</p>
                            <div class="featured-image">
                                <a href="https://justcut.today" target="_blank" title="Justcut Today">
                                    <img class="img-responsive project-image" src="assets/images/projects/project-featured.png" alt="Knowledge Tribe" title="Justcut Today" />
                                </a>
                                <div class="ribbon">
                                    <div class="text">New</div>
                                </div>
                            </div>

                            <div class="desc text-left">
                                <p><b>Technology Stack</b> - Shopify<br/>
                                <b>Team Size - </b>2
                                </p>
                            </div> 
                            <a class="btn btn-cta-secondary" href="https://justcut.today" target="_blank" title="Justcut Today"><i class="fa fa-thumbs-o-up"></i> Back my project</a>
                        </div> 
                        <hr class="divider" />
                        <div class="item row">
                            <a class="col-md-4 col-sm-4 col-xs-12" href="http://hospitra.com/" target="_blank">
                                <img class="img-responsive project-image" src="assets/images/projects/hospitra.png" alt="Hospitra - Destination Good Health-Thumbnail" title="Hospitra - Destination Good Health" width="300" height="225" />
                            </a>
                            <div class="desc col-md-8 col-sm-8 col-xs-12">
                                <h3 class="title">
                                    <a href="http://hospitra.com/" target="_blank">Hospitra - Destination Good Health</a>
                                </h3>
                                <p>Freelance Project - Network of dedicated &amp; highly qualified professionals allow you to make an informed choice about medical procedures.<br/><strong>Technology Stack</strong> - PHP, Laravel, MySQL, Javascript, Git, Linux
                                    <strong>Team Size - </strong> 1</p>
                                <p><a class="more-link" href="http://hospitra.com/" target="_blank"><i class="fa fa-external-link"></i> Find out more</a></p>
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </section>
        )
    }
}