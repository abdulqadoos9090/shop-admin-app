import React from 'react';
import FormInput from "./FormInput";
import Select from 'react-select'

export default function MetaDataForm({handleChange, metaData}) {
    const options = [
        {value: 'follow,index', label: 'follow,index'},
        {value: 'nofollow,noindex', label: 'nofollow,noindex'},
        {value: 'follow', label: 'follow'},
        {value: 'index', label: 'index'}
    ]

    return (
        <React.Fragment>
            <FormInput
                id={"title"}
                label={"Title"}
                type={"text"}
                defaultValue={metaData ? metaData.title : null}
                handleChange={handleChange}
            />

            <FormInput
                id={"slug"}
                label={"Slug"}
                type={"text"}
                defaultValue={metaData ? metaData.slug : null}
                handleChange={handleChange}
            />

            <FormInput
                id={"description"}
                label={"Meta Description"}
                type={"textarea"}
                defaultValue={metaData ? metaData.description : null}
                handleChange={handleChange}
            />

            <Select
                options={options}
                defaultValue={metaData ? {value: metaData.index, label: metaData.index} : null}
                onChange={handleChange}
            />

        </React.Fragment>
    )
}
