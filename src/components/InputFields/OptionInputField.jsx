import React from 'react';

export default function OptionInputField(props) {
    return(
        <div className="option-field-container">
            <label className="option-input-field-label">
                Option 1
            </label>
            <div className="option-input-field-container row">
                <div className="option-name col">
                    {props.optionName}
                </div>
                <div className="option-input-field col">
                    <input type="text" placeholder={props.fieldPlaceHolder} name={props.inputFieldName} />
                </div>
            </div>
        </div>
    )
}