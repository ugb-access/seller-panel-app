import React from 'react';
import {
    NavLink
} from 'react-router-dom';
import '../../scss/nav-links.scss';


export default function FilterLinks() {
    return(
        <div className="inventory-nav-links-container">
            <NavLink to="/inventory/all" className="inventory-nav-link border-bottom-primary p-1 ml-2">
                All
            </NavLink>
            
        </div>
    )
}