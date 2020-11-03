import React, { Component, Fragment } from 'react';
import MainInputField from '../components/InputFields/MainInputField';
import RichTextEditor from '../components/RichTextEditor';
import { PageTitle } from '../components/Titles';
import { 
    AddProductMediaSection, 
    AddProductPricing, 
    AddProductInventoryrSection, 
    AddProductShippingSection, 
    AddProductVariantSection, 
    AddProductSearchListing,
    AddProductAvailabilitySection,
    AddProductOrganizationSection
} from '../Sections/AddProduct';
import '../scss/add-products-page.scss';



export default class AddProducts extends Component {
    render() {
        return(
            <Fragment>
                 <div className="add-products-page-cotainer mt-4-primary d-flex justify-between">
                    <div className="add-products-page-inner-wrapper mr-5-primary">
                        <PageTitle title="Add products" />
                        <form className="add-products-form-container" onSubmit={(e) => e.preventDefault()} >
                            
                            <MainInputField fieldTitle="title" inputFieldName="podcutTitle" fieldPlaceHolder="short-seleeve t-shirt" />
                            <RichTextEditor fieldTitle={"Description"} />
                            <AddProductMediaSection />
                            <AddProductPricing />
                            <AddProductInventoryrSection />         
                            <AddProductShippingSection />  
                            <AddProductVariantSection />
                            <AddProductSearchListing />
                            
                        </form>
                    </div>
                    <div className="add-products-more-options-container">
                        <AddProductAvailabilitySection />
                        <AddProductOrganizationSection />
                    </div>
                </div>  
            </Fragment>
           
            
        )
    }
}