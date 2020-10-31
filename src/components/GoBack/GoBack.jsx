import React from 'react';
import {ReactComponent as LeftArrow} from '../../images/icons/left-arrow.svg';

export default function GoBack() {
    return(
        <div className="go-back-container">
            <div className="go-back-icon mr-1">
                <LeftArrow />
            </div>
            <div className="go-back-title-container">
                products
            </div>
        </div>
    )
}