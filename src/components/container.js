import React, { Component } from 'react'
import Section from './section'

export default class Container extends Component {
    render() {
        return (
            <div className='container sections-wrapper'>
                <Section />
            </div>
        )
    }
}