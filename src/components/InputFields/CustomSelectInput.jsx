import React from 'react';

export default function CustomSelectInput(props) {
    return(
        <div className="custom-selection-input-container mb-3">
            <label className="custom-selection-input-label d-block">
                {props.fieldTitle}
            </label>
            <select name={props.inputFieldName} className="custom-selection-input-field d-block w-100" placeholder={props.fieldPlaceHolder}>
                <option value=""> select country </option>
                <option value="pakistan"> Pakistan </option>
                <option value="india"> India </option>
                <option value="usa"> USA </option>
                <option value="poland"> Poland </option>
            </select>
        </div>
    )
}