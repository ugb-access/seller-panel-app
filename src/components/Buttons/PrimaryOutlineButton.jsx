import React from 'react';
import '../../scss/buttons.scss';

export default function PrimaryOutlineButton(props) {
    return(
        <button className="btn btn-outline-primary ">
            {props.buttonText}
        </button>
    )
}