import React from 'react';
import '../scss/utils/horizontal-line.scss';

export default function HorizontalLine(props) {
    return(
        <div className="horizontal-line-container" style={props.mSmall ? {margin: "18px 0"} : null}></div>
    )
}