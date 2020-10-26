import React, { Component } from 'react';
import { ReactComponent as Logo } from '../../images/logos/logo.svg';
import '../../scss/headers.scss';
import '../../scss/utils/display.scss';
import '../../scss/utils/grid.scss';
import { SearchBarPrimary } from '../SearchBars';

class PrimaryHeader extends Component {
    render() {
        return(
            <div className="header-container bg-white primary-header container d-flex align-items-center">
                <div className="header-inner-wrapper row align-items-center justify-between w-100">
                    <div className="header-logo-wrapper">
                        <Logo />
                    </div>
                    <div>
                        <SearchBarPrimary />
                    </div>
                </div>
            </div>
        )
    }
}

export default PrimaryHeader;