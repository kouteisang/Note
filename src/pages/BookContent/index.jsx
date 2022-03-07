import React, { Component } from 'react'

export default class BookContent extends Component {
    render() {
        const { id } = this.props.location.state
        console.log(id)
        return (
            <div>
                
            </div>
        )
    }
}
