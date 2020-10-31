import React from 'react';
import { PrimaryCard } from '../components/Cards';
import { CustomCheckboxField, PrimaryTextInputField, TextareaInputField } from '../components/InputFields';
import HorizontalLine from '../components/HorizontalLine';

export default function AddProductSearchListing() {
    return(
        <PrimaryCard cardMainHeading="Search engine listing preview">
            <CustomCheckboxField labelTitle="Add a title and description to see how this product might appear in a search engine listing" />
            <HorizontalLine />
            <PrimaryTextInputField fieldTitle="Page title" withSmallTag={true} />
            <TextareaInputField fieldTitle="Description" withSmallTag={true} />
            <PrimaryTextInputField fieldTitle="URL and handle"/>
        </PrimaryCard>
    )
}