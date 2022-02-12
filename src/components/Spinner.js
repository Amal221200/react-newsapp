import React, { Component } from 'react'
import spinner from '../assets/img/globeFrame.gif'

export class Spinner extends Component {
    render() {
        return (<div className="container text-center my-5">
            <img src={spinner} alt='' />
        </div>
        )
    }
}

export default Spinner