import React from 'react';
import { PrimaryOutlineButton } from '../../components/Buttons';
import HandleQuantityComponent from '../../components/HandleQuantityComponent';
import {CustomCheckboxField} from '../../components/InputFields';
import '../../scss/tables.scss';

export default function ProductsInventoryListSection() {
    return(
        <div className="products-inventory-list-section">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">
                            <CustomCheckboxField />
                        </th>
                        <th scope="col">Product</th>
                        <th scope="col">SKU</th>
                        <th scope="col">When Sold Out</th>
                        <th scope="col">Incoming</th>
                        <th scope="col">Available</th>
                        <th scope="col">Edit Quantity Available</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col">
                            <CustomCheckboxField />
                        </th>
                        <td >
                            <div className="prodcut-list-title-container d-flex align-items-center">

                                <div className="prodcut-list-img-container mr-2">
                                    <img className="d-block" src={require("../../images/icons/product-list-img.png")} alt="product list img" />
                                </div>

                                <p>
                                    Cute Laptop Sleeve
                                </p>

                            </div>
                            
                        </td>
                        <td>10</td>
                        <td>Stop Selling</td>
                        <td>10</td>
                        <td>10</td>
                        <td >
                            <div className="edit-available-quantity-container d-flex justify-center">
                                <PrimaryOutlineButton buttonText="Add" />
                                <HandleQuantityComponent quantity={1} />
                                <PrimaryOutlineButton buttonText="Save" />
                            </div>
                        </td>
                        
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}