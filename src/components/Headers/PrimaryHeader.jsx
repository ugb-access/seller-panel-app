import React, { Component } from 'react';
import { ReactComponent as Logo } from '../../images/logos/logo.svg';
import '../../scss/headers.scss';
import '../../scss/utils/display.scss';
import '../../scss/utils/grid.scss';
import { MiniProfileImg } from '../MiniProfileImage';
import NotificationPrimaryIcon from '../NotificationIcons/NotificationPrimaryIcon';
import { SearchBarPrimary } from '../SearchBars';
import { ReactComponent as DownArrow } from '../../images/icons/down-arrow.svg';

class PrimaryHeader extends Component {
    render() {
        return(
            <div className="header-container bg-white primary-header IU-container d-flex align-items-center">
                <div className="header-inner-wrapper row align-items-center justify-between w-100">
                    <div className="header-logo-wrapper w-25">
                        <Logo />
                    </div>
                    <div className="header-right-container w-75 d-flex align-items-center justify-between">
                        <SearchBarPrimary />
                        <div className="header-additional-links-container d-flex align-items-center">
                            <NotificationPrimaryIcon />
                            <div className="user-showcase-information d-flex align-items-center">
                                <MiniProfileImg />
                                <div className="user-showcase-name mx-2-primary">
                                    David
                                </div>
                                <div className="view-more-profile-option-container">
                                    <div className="view-more-profile-option-icon-container">
                                        <DownArrow />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default PrimaryHeader;