import React from 'react';
import {ReactComponent as CarrotDownIcon} from '../../images/icons/carrot-down-black.svg';
import {
    Link
} from 'react-router-dom';

export default function FilterButton() {
    return(
        
        <div class="filter-button input-group-append">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort <CarrotDownIcon /></button>
            <div class="dropdown-menu">
                <Link class="dropdown-item d-block p-2" href="#">Action</Link>
                <Link class="dropdown-item d-block p-2" href="#">Another action</Link>
                <Link class="dropdown-item d-block p-2" href="#">Something else here</Link>
                <Link class="dropdown-item d-block p-2" href="#">Separated link</Link>
            </div>
        </div>
    )
}