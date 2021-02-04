import React from 'react';
import FormInput from "./FormInput";
import Select from 'react-select'

export default function MetaDataForm() {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <React.Fragment>
            <FormInput
                id={"meta-title"}
                label={"Title"}
                type={"text"}
                defaultValue={""}
            />

            <FormInput
                id={"meta-slug"}
                label={"Slug"}
                type={"text"}
                defaultValue={""}
            />

            <FormInput
                id={"meta-description"}
                label={"Meta Description"}
                type={"textarea"}
                defaultValue={""}
            />

            <Select
                options={options}
            />

        </React.Fragment>
    )
}
