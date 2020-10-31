import React from 'react';

export default function SecondaryTextInputField(props) {
    return(
        <div className="secondary-form-group mb-4 box-shadow-primary">
            <label className="secondary-field-label">
                {props.fieldTitle}
            </label>
            <div className="secondary-input-field-container d-flex align-items-center ">
                <input type="text" name={props.inputFieldName} className="secondary-input-field" placeholder={props.fieldPlaceHolder}/>
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
                            Used by order officer to classify this product
                        </small>
                    </div>
                ) : null
            }
            
            
        </div>
    )
}