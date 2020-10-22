import React, { Component } from 'react';
import { PrimaryHeader } from '../components/Headers';

class Layout extends Component {
    render() {
        return(
            <div className="layout-wrapper bg-secondary">
                <PrimaryHeader />
               {this.props.children}
            </div>
        )
    }
}
export default Layout;