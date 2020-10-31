import React from 'react';

export default function MainInputField(props) {
    return(
        <div className="form-group mb-4">
            <label className="field-label">
                {props.fieldTitle}
            </label>
            <input type="text" name={props.inputFieldName} className="input-field" placeholder={props.fieldPlaceHolder} />
        </div>
    )
}