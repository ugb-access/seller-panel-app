import React from 'react';

export default function SecondaryInputField(props) {
    return(
        <div className="secondary-form-group mb-4 box-shadow-primary">
            <label className="secondary-field-label">
                {props.fieldTitle}
            </label>
            <div className="secondary-input-field-container d-flex align-items-center ">
                <input type="number" name={props.inputFieldName} className="secondary-input-field " placeholder={props.fieldPlaceHolder} step="0.1" min="0" />
                {
                    props.withQuestionMark ? (
                        <div className="input-question-container border-rounded">
                            <span className="input-question-mark-icon">
                                ?
                            </span>
                        </div>
                    ) : null
                }
                
            </div>
            {
                props.withSmallTag ? (
                    <div className="brief-note-container">
                        <small className="placeholder-text-color ">
                            Customer won't see this
                        </small>
                    </div>
                ) : null
            }
            
            
        </div>
    )
}