import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section className="about section">
                        <div class="section-inner">
                            <h2 class="heading">About Me</h2>
                            <div class="content">
                                <p>
                                    <b>Languages:</b>  <br/>
                                    <b>Frameworks:</b>   <br/> 
                                    <b>Tools:</b>  <br/>
                                    <b>Editor Journey:</b>  <br/>
                                    <b>Operating System:</b>  <br/>
                                </p>
                                <p><b>Experience</b></p>
                                <p>
                                    <b>Total Exp. - </b>   Years<br/>
                                    <b>Current Employer - </b><a href="" title="Senior Web Developer"></a><br/>
                                </p>
                            </div> 
                        </div> 
                    </section>
        )
    }
}