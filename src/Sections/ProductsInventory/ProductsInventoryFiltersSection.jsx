import React from 'react';
import { FilterButton } from '../../components/Buttons';
import { SearchWithFilters } from '../../components/SearchBars';

export default function ProductsInventoryFiltersSection() {
    return(
        <div className="d-flex">
            <SearchWithFilters />
            <FilterButton />
        </div>
    )
}