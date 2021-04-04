import React, {useState, useEffect, useContext} from 'react';
import FormInput from "./FormInput";
import {indexOptions} from "../Helpers/DefaultOptions";
import {initialMetaData} from "../Helpers/InitialStateObjects";
import {NUMBER, TEXT, TEXTAREA, UPDATE} from "../Helpers/Constants";
import {ProductFormContext} from "../Helpers/Contexts";

const MetaDataForm = () => {

    // const [metaData, setMetaData] = useState(() => initialMetaData);
    const {productFormState, dispatch} = useContext(ProductFormContext);
    const metaData = productFormState.metadata;

    useEffect(() => {
        console.log('METADATA RENDER');
    });

    const _handleInputChange = (event) => {
        let arr = _.cloneDeep(metaData);
        event.target && event.target.name === "index" ?
            arr.[event.target.name] = event.target.value : arr.[event.target.id] = event.target.type === NUMBER ? parseInt(event.target.value) : event.target.value;
        dispatch({
            type: UPDATE,
            key: "metadata",
            data: arr
        });
    }

    // console.log(metaData);

    return (
        <React.Fragment>
            <FormInput
                id="title"
                label="Title"
                type={TEXT}
                defaultValue={metaData ? metaData.title : null}
                handleChange={_handleInputChange}
            />

            <FormInput
                id="slug"
                label="Slug"
                type={TEXT}
                defaultValue={metaData ? metaData.slug : null}
                handleChange={_handleInputChange}
            />

            <FormInput
                id="description"
                label="Meta Description"
                type={TEXTAREA}
                defaultValue={metaData ? metaData.description : null}
                handleChange={_handleInputChange}
            />

            {indexOptions.map((item, index) => (
                <div key={index} className="form-check form-check-inline my-3">
                    <input className="form-check-input hover-pointer" type="radio" name="index"
                           id={`inlineRadio-${index}`}
                           defaultValue={item.value} defaultChecked={metaData.index === item.value}
                           onClick={_handleInputChange}/>
                    <label className="form-check-label hover-pointer"
                           htmlFor={`inlineRadio-${index}`}>{item.label}</label>
                </div>
            ))}

        </React.Fragment>
    )
};

export default React.memo(MetaDataForm);

