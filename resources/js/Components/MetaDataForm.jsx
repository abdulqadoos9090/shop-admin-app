import React from 'react';
import FormInput from "./FormInput";
import Select from 'react-select'
import {indexOptions} from "../Common";

export default function MetaDataForm({metaData,setMetaData}) {

    const _handleMetaDataChange = (e) => {
        if (e.target) {
            const key = e.target.id;
            const value = e.target.value;
            setMetaData(metaData => ({
                ...metaData,
                [key]: value,
            }))
        } else {
            setMetaData(metaData => ({
                ...metaData,
                ['index']: e.value,
            }))
        }
    }

    return (
        <React.Fragment>
            <FormInput
                id={"title"}
                label={"Title"}
                type={"text"}
                defaultValue={metaData ? metaData.title : null}
                handleChange={_handleMetaDataChange}
            />

            <FormInput
                id={"slug"}
                label={"Slug"}
                type={"text"}
                defaultValue={metaData ? metaData.slug : null}
                handleChange={_handleMetaDataChange}
            />

            <FormInput
                id={"description"}
                label={"Meta Description"}
                type={"textarea"}
                defaultValue={metaData ? metaData.description : null}
                handleChange={_handleMetaDataChange}
            />

            <Select
                options={indexOptions}
                defaultValue={metaData ? {value: metaData.index, label: metaData.index} : null}
                onChange={_handleMetaDataChange}
            />

        </React.Fragment>
    )
}
