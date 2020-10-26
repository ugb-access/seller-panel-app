import React from 'react';
import {ReactComponent as HeaderSearchIcon} from '../../images/icons/search-icon-header.svg';

export default function SearchButton(props) {
    return(
        <button type="submit" onClick={props.handleClick} >
            <span><HeaderSearchIcon /></span>
        </button>
    )
}