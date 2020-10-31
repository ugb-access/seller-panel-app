import React from 'react';
import {ReactComponent as BellIcon} from '../../images/icons/bell-icon.svg';
export default function NotificationPrimaryIcon() {
    return(
        <div className="primary-notification-icon-container mx-4-primary">
            <div className="notification-bell-icon-container d-flex align-items-center ">
                <div className="border-rounded-pill bg-orange notification-qty-container d-flex justify-center align-items-center text-white">
                    <span>1</span>
                </div>
                <BellIcon />
            </div>
        </div>
    )
}