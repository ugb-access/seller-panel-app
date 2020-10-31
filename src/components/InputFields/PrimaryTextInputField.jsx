import React from 'react';

export default function PrimaryTextInputField(props) {
    return(
        <div className="primary-form-group mb-4 box-shadow-primary">
            <label className="primary-field-label">
                {props.fieldTitle}
            </label>
            <div className="primary-input-field-container d-flex align-items-center ">
                <input type="text" name={props.inputFieldName} className="primary-input-field" placeholder={props.fieldPlaceHolder} />
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
                            0 of 70 character used
                        </small>
                    </div>
                ) : null
            }
            
            
        </div>
    )
}