import React, { Component } from 'react';
import { PrimaryHeader } from '../components/Headers';
import { PrimarySidebar } from '../components/Sidebars';
import '../scss/main-section.scss';
import '../scss/titles.scss';

class Layout extends Component {
    render() {
        return(
            <div className="layout-wrapper bg-secondary">
                <PrimaryHeader />
                <div className="main-section IU-container py-5-primary ">

                    <PrimarySidebar />

                    <div className="main-section-inner-wrapper ">
                        {this.props.children}
                    </div>
                </div>
               
            </div>
        )
    }
}
export default Layout;