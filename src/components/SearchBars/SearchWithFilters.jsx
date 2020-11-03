import React from 'react';
import {
    Link
} from 'react-router-dom';
import {ReactComponent as CarrotDownIcon} from '../../images/icons/carrot-down-black.svg';
import { SearchButton } from '../Buttons';
export default function SearchWithFilters() {
    return(
        <div class="search-with-filters input-group d-flex mr-2">
            <SearchButton />
            <input type="text" class="form-control" aria-label="Text input with dropdown button" />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filters <CarrotDownIcon /></button>
                <div class="dropdown-menu">
                    <Link class="dropdown-item d-block" href="#">Action</Link>
                    <Link class="dropdown-item d-block" href="#">Another action</Link>
                    <Link class="dropdown-item d-block" href="#">Something else here</Link>
                    <Link class="dropdown-item d-block" href="#">Separated link</Link>
                </div>
            </div>
        </div>
    )
}