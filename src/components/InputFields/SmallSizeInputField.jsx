import React from 'react';

export default function SmallSizeInputField(props) {
    return(
        <div className="small-size-form-group-container">
            <label className="secondary-field-label text-secondary">
                {props.fieldTitle}
            </label>
            <div className="small-size-input-field-container">
				<input type="number" name={props.inputFieldName} className="small-size-input-field" placeholder={props.fieldPlaceHolder} step="0.1" min="0" />
            </div>
        </div>
    )
}