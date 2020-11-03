import React from 'react';
import { PrimaryCard } from '../../components/Cards';
import HorizontalLine from '../../components/HorizontalLine';
import { CustomSelectInput, SecondaryTextInputField } from '../../components/InputFields';

export default function AddProductOrganizationSection() {
    return(
        <PrimaryCard cardMainHeading="Organization" >
            <SecondaryTextInputField fieldTitle="Product Type" fieldPlaceHolder="e.g. Shirts"/>
            <SecondaryTextInputField fieldTitle="Vendor" fieldPlaceHolder="e.g. Puma" />
            <HorizontalLine />
            <CustomSelectInput fieldTitle="Tags" fieldPlaceHolder="e.g. Puma" />
        </PrimaryCard>
    )
}