import React from 'react';
import { FilterLinks } from '../components/Navlinks';
import { PageTitle } from '../components/Titles';
import {
    ProductsInventoryFiltersSection,
    ProductsInventoryListSection
} from '../Sections/ProductsInventory';

export default function ProdcutsInventoryPage() {
    return(
        <div className="produts-inventory-page-container">
            <div className="d-flex justify-between">
                <PageTitle title="Inventory" />
                <div className="btn bg-primary align-self-center">View product</div>
            </div>

            <div className="product-inventory-list-section mb-3">
                <FilterLinks />
            </div>
            <ProductsInventoryFiltersSection />
            <ProductsInventoryListSection />

        </div>
    )
}
