import React, { Component } from 'react';

class Container extends Component {
    render() {
        return(
            <div className="layout-container">
                {this.props.children}
            </div>
        )
    }
}

export default Container;