import React from 'react';

export default function TextareaInputField(props) {
    return(
        <div className="textarea-form-group mb-4 box-shadow-primary">
            <label className="textarea-field-label">
                {props.fieldTitle}
            </label>
            <div className="textarea-input-field-container d-flex align-items-center ">
                <textarea name={props.inputFieldName} className="textarea-input-field w-100" placeholder={props.fieldPlaceHolder} />
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
                            0 of 320 character used
                        </small>
                    </div>
                ) : null
            }
            
            
        </div>
    )
}