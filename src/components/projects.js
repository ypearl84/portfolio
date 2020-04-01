import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <section class="projects section">
                <div class="section-inner">
                    <h2 class="heading">Other Projects</h2>
                    <div class="content">
                        <div class="item">
                            <h3 class="title">
                                <a href="https://www.facebook.com/chatbot.gifter/" target="_blank">Diagio Facebook Chatbot</a>
                            </h3>
                            <p class="summary">Created Interactive chatbot simple gifting experience<br/><b>Technology Stack</b> - PHP, MySQL, Git, Facebook Messenger API</p>
                            <p><a class="more-link" href="https://www.facebook.com/chatbot.gifter/" target="_blank"><i class="fa fa-external-link"></i> Find out more</a></p>
                        </div>  
                        <div class="item">
                            <h3 class="title">
                                <a href="#">Python Twitter API and Scraping</a>
                            </h3>
                            <p class="summary">A CLI tool for fetching the Tweet and User details in bulk<br/>
                            <b>Technology Stack - </b> Python, Tweepy(API library) and Scrapy(Scraping library)</p>
                            <p>
                                <a class="more-link" href="#" target="_blank">
                                    <i class="fa fa-external-link"></i> Find out more</a>
                            </p>
                        </div> 
                        <div class="item">
                            <h3 class="title">
                                <a href="#">API Integration and Workflow Automation</a>
                            </h3>
                            <p class="summary">The products functionality is to collect data from the Non-Standard API’s, compute the data, and integrate with traffic steer database. The predicting output will be automated solution.<b> <br/>Technology Stack -</b> PHP, MySQL, HTML, CSS, Javascript</p>
                            <p><a class="more-link" href="#" target="_blank"><i class="fa fa-external-link"></i> Find out more</a></p>
                        </div> 
                        <a class="btn btn-cta-secondary" href="https://www.linkedin.com/in/rohankhude/">More on Linkedin <i class="fa fa-chevron-right"></i></a>

                    </div> 
                </div> 
            </section>
        )
    }
}