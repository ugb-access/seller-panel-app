import React, { Component } from 'react';
import '../../scss/utils/border.scss';
import { SearchButton } from '../Buttons';

class SearchBarPrimary extends Component {
    render() {
        return(
            <div className="header-search-container border-rounded-pill bg-dark-secondary ">
                <div className="header-search-innerr-wrapper d-flex">
                    <SearchButton />
                    <div className="header-search-input-container">
                        <input type="text" name="searchInput" className="header-search-input-container border-0 bg-transparent border-outline-0" />
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBarPrimary