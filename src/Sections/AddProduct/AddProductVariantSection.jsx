import React from 'react';
import { PrimaryCard } from '../../components/Cards';
import HorizontalLine from '../../components/HorizontalLine';
import { CustomCheckboxField } from '../../components/InputFields';
import OptionInputField from '../../components/InputFields/OptionInputField';
import {PrimaryButton} from '../../components/Buttons';

export default function AddProductVariantSection() {
    return(
        <PrimaryCard cardMainHeading="Variants">
            <CustomCheckboxField labelTitle="This product has multiple options, like different sizes or colors"  />
            <HorizontalLine />
            <div className="card-header d-flex justify-between">
                <div className="card-main-heading">
                    Options
                </div>
            </div>

            <OptionInputField optionName="Size" fieldPlaceHolder="Separate options with a comma" />
            <PrimaryButton buttonText="Add another option" />

        </PrimaryCard>
    )
}