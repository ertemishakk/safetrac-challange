import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <div>
                <p style={{ color: 'rgb(102, 102, 102)', fontSize: 18, lineHeight: '24px', fontVariant: 'normal', fontWeight: 'normal' }}>{this.props.title}</p>
            </div>
        )
    }
}
