import React from 'react';
import { PrimaryCard } from '../components/Cards';
import HorizontalLine from '../components/HorizontalLine';
import { CustomCheckboxField, SecondaryInputField, SmallSizeInputField } from '../components/InputFields';

export default function AddProductPricing() {
    return(
        <div className="add-product-pricing-section">
            <PrimaryCard cardMainHeading="Pricing">
				<div className="row">
                    <div className="col">
					    <SecondaryInputField fieldPlaceHolder="US 0.00" inputFieldName="discountPriceInput" fieldTitle="Price" />
                    </div>
                    <div className="col">
                        <SecondaryInputField fieldPlaceHolder="US 0.00" inputFieldName="compareAtPriceInput" fieldTitle="Compare at price" withQuestionMark={true} />
                    </div>
				</div>

                <HorizontalLine />

                <div className="row">
                    <div className="col">
                        <SecondaryInputField fieldPlaceHolder="US 0.00" inputFieldName="costPerItemInput" fieldTitle="Cost per item" withSmallTag={true} />
                    </div>
                    <div className="col d-flex pt-4 justify-between">
                        <SmallSizeInputField inputFieldName="marginInput" fieldTitle="Margin" />
                        <SmallSizeInputField inputFieldName="profitInput" fieldTitle="Profit" />
                    </div>
                </div>
                <CustomCheckboxField labelTitle="Charge tax on this product" />

            </PrimaryCard>
        </div>
    )
}