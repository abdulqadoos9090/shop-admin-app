import React, {useState, useEffect} from 'react';
import FormInput from "./FormInput";
import {indexOptions} from "../Helpers/DefaultOptions";
import {DEFAULT, EXISTED, INDEX, NUMBER, TEXT, TEXTAREA} from "../Helpers/Constants";
import {convertToSlug} from "../Helpers/CommonFunctions";
import {_verifyUniqueSlug} from "../Helpers/Requests";

const MetaDataForm = ({id, metadata, setMetadata}) => {

    const [uniqueSlug, setUniqueSlug] = useState('');

    const _handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        let arr = _.cloneDeep(metadata);
        switch (name) {
            case "slug":
                arr.[name] = convertToSlug(value);
                break;
            default:
                arr.[name] = value;
                break;
        }
        setMetadata(arr);
    }


    return (
        <React.Fragment>
            <FormInput
                name="title"
                label="Title"
                type={TEXT}
                defaultValue={metadata ? metadata.title : null}
                handleChange={_handleInputChange}
            />

            <FormInput
                name="slug"
                label="Slug"
                type={TEXT}
                defaultValue={metadata ? metadata.slug : null}
                onBlur={(e) => _verifyUniqueSlug(e, id, setUniqueSlug)}
                handleChange={_handleInputChange}
            />
            {uniqueSlug === EXISTED ? (<small className="text-warning">Entered slug already existed!</small>) : null}

            <FormInput
                name="description"
                label="Meta Description"
                type={TEXTAREA}
                defaultValue={metadata ? metadata.description : null}
                handleChange={_handleInputChange}
            />

            {indexOptions.map((item, index) => (
                <div key={index} className="form-check form-check-inline my-3">
                    <input className="form-check-input hover-pointer" type="radio" name="index"
                           id={`inlineRadio-${index}`}
                           defaultValue={item.value} defaultChecked={metadata.index === item.value}
                           onClick={_handleInputChange}/>
                    <label className="form-check-label hover-pointer"
                           htmlFor={`inlineRadio-${index}`}>{item.label}</label>
                </div>
            ))}

        </React.Fragment>
    )
};

export default React.memo(MetaDataForm);

