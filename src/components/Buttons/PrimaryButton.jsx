import React from 'react';

export default function PrimaryButton(props) {
    return(
        <button className="btn btn-primary  text-white bg-primary mt-3" type={props.buttonType} style={{border: 0}} >
            {props.buttonText}
        </button>
    )
}