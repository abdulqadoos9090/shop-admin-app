import React from 'react';
import FormInput from "./FormInput";
import Select from 'react-select'

export default function MetaDataForm({handleChange}) {

    const options = [
        { value: 'follow,index', label: 'Follow Index' },
        { value: 'nofollow,noindex', label: 'No follow, No index' },
        { value: 'follow', label: 'follow' },
        { value: 'index', label: 'index' }
    ]

    return (
        <React.Fragment>
            <FormInput
                id={"metaTitle"}
                label={"Title"}
                type={"text"}
                defaultValue={""}
                handleChange={handleChange}
            />

            <FormInput
                id={"metaSlug"}
                label={"Slug"}
                type={"text"}
                defaultValue={""}
                handleChange={handleChange}
            />

            <FormInput
                id={"metaDescription"}
                label={"Meta Description"}
                type={"textarea"}
                defaultValue={""}
                handleChange={handleChange}
            />

            <Select
                options={options}
            />

        </React.Fragment>
    )
}
