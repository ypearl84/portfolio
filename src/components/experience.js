import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (    
            <section class="experience section">
                <div class="section-inner">
                    <h2 class="heading">Work Experience</h2>
                    <div class="content">
                        <div class="item">
                            <h3 class="title">Senior Web Developer - <span class="place"><a href="https://www.autumnworldwide.com">Autumn Worldwide Pvt. Ltd.</a></span> <span class="year">(2017 - Present)</span></h3>
                            <p>Web applications, Chatbot, Scrapping tool and API integration<br/><strong>Environment - </strong>PHP, Python, Laravel, Javascript, Linux, Git.</p>
                        </div>
                        <div class="item">
                            <h3 class="title">Web Developer - <span class="place"><a href="http://www.realbridge.in">Realbridge e-Marketing Solutions Pvt. Ltd.</a></span> 
                            <span class="year">(2016 - 2017)</span></h3>
                            <p>B2B Web application and <br/><strong>Environment - </strong>Python, Django, Vagrant, Linux, PostgreSQL, Git, PHP, MySQL, Javascript, Apache Server, Wordpress.</p>
                        </div>
                        <div class="item">
                            <h3 class="title">Web Developer Intern - <span class="place"><a href="http://trafficsteer.com/">Traffic Steer</a></span> <span class="year">(2015 - 2016)</span></h3>
                            <p>Web application for company internal use - API integration and Workflow automation.<br/><strong>Environment - </strong>PHP, MySQL, HTML, CSS, JS, Apache Server, Git, Java, Selenium WebDriver.</p>
                        </div>
                        <div class="item">
                            <h3 class="title">Software &amp; Web Developer Intern - <span class="place"><a href="http://rnsoftwares.com/">RN Softwares</a></span> <span class="year">(2014 - 5 months)</span></h3>
                            <p>Small-scale web applications.<br/><strong>Environment - </strong>C#, ASP.NET 4.5, SQL Server</p>
                        </div>
                    </div> 
                </div> 
            </section>
        )
    }
}