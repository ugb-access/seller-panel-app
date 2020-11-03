import React from 'react';
import { PrimaryCard } from '../../components/Cards';
import HorizontalLine from '../../components/HorizontalLine';
import {ReactComponent as CalenderIcon} from '../../images/icons/calender-icon.svg'; 

export default function AddProductAvailabilitySection() {
    return(
        <PrimaryCard cardMainHeading="Product Availability" headers={2} headerType="btn" btnText="Manage">
            <p className="card-content">
                Available on 1 of 1 channels apps
            </p>
            <HorizontalLine mSmall={true} />
            <div className="online-store-section d-flex justify-between align-items-center">
                <div className="sub-heading">
                    Online Store
                </div>
                <div className="online-store-calender-icon-container ">
                    <CalenderIcon />
                </div>
            </div>
        </PrimaryCard>
    )
}