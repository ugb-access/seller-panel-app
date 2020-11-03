import React from 'react';
import { PrimaryCard } from '../../components/Cards';
import HorizontalLine from '../../components/HorizontalLine';
import { CustomCheckboxField, CustomSelectInput, SecondaryInputField, SecondaryTextInputField } from '../../components/InputFields';

export default function AddProductShippingSection(props) {
    return(
        <PrimaryCard cardMainHeading="Shipping">
            <CustomCheckboxField labelTitle="This is a physical product"  />
            <HorizontalLine />
            <div className="card-header d-flex justify-between">
				<div className="card-main-heading">
					Weight
				</div>
			</div>
			<p className="card-content">
				Used to calculate shipping rates at checkout and label prices during fulfillment.
			</p>
			<div className="w-50">
				<SecondaryInputField fieldPlaceHolder="0" inputFieldName="weightInput" fieldTitle="Weight" />
			</div>
			<HorizontalLine />
			<div className="custom-information-section">
				<h6 className="sub-heading">
					CUSTOMS INFORMATION
				</h6>
				<p className="card-content mb-0">
					Used by border officers to calculate duties when shipping internationally.
					
				</p>
				<p className="card-content">
					Shown on customs forms you print during fulfillment.
				</p>
				<CustomSelectInput fieldPlaceHolder="Select Country" inputFieldName="customCountrySelect" fieldTitle="Country/Region of origin"/>
				<p className="card-content">
					In most cases where the product is manufactured.
				</p>
				<SecondaryTextInputField fieldPlaceHolder="Search by product keyword or HS code" inputFieldName="searchInputField" fieldTitle="HS (Harmonized System) code"  />
				<p className="placeholder-text-color ml-3">
					Used by order officer to classify ths product
				</p>

				
			</div>
			


        </PrimaryCard>
    )
}