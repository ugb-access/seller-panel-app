import React from 'react';
import { PrimaryCard } from '../components/Cards';
import HorizontalLine from '../components/HorizontalLine';
import { CustomCheckboxField, SecondaryInputField } from '../components/InputFields';

export default function AddProductInventoryrSection() {
    return(
        <PrimaryCard cardMainHeading="Inventory" >
            <div className="row">
				<div className="col">
					<SecondaryInputField fieldPlaceHolder="US 0.00" inputFieldName="inventoryPriceInput" fieldTitle="SKU ( Stock keeping unit)" />
				</div>
				<div className="col" withQuestion={true}>
					<SecondaryInputField fieldPlaceHolder="US 0.00" inputFieldName="barcodePriceInput" fieldTitle="Barcode (ISBN, UPC, GTIN, etc.)" withQuestionMark={true} />
				</div>
			</div>
			<CustomCheckboxField labelTitle="Track Quantity" />
			<CustomCheckboxField labelTitle="Continue selling when out of stock" />
			<HorizontalLine />
			<div className="row w-50">
				<div className="col ">
					<SecondaryInputField fieldPlaceHolder="US 0.00" inputFieldName="availableInput" fieldTitle="Available" />
				</div>
			</div>
        </PrimaryCard>
    )
}