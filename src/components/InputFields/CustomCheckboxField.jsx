import React from 'react';


export default function CustomCheckboxField(props) {
    return(
        <div className="custom-checkbox-field-cotnainer d-flex">
            <input type="checkbox" className="custom-checkbox-input-field mr-1" name={props.fieldName}  />
            <label className="custom-checkbox-field-label placeholder-text-color">{props.labelTitle}</label>
        </div>
    )
}