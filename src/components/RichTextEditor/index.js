import React from 'react';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles

// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/js/modal';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/tooltip';
import 'bootstrap/dist/css/bootstrap.css';


export default function RichTextEditor(props) {
    const handleChange = () => {

    }
    return(
        <div className="rich-text-editor-container">
            <div className="field-label">
                {props.fieldTitle}
            </div>

            <ReactSummernote
                value="Default value"
                options={{
                    height: 250,
                    dialogsInBody: true,
                    disableResizeEditor: true,
                    toolbar: [
                        ['style', ['style']],
                        ['font', ['bold', 'underline', 'clear']],
                        ['fontname', ['fontname']],
                        ['para', ['ul', 'ol', 'paragraph']],
                        ['table', ['table']],
                        ['insert', ['link', 'picture', 'video']],
                        ['view', ['fullscreen', 'codeview']]
                    ]
                }}
                onChange={handleChange}
            />

        </div>
    )
}