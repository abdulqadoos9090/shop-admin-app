import React from 'react';
import FormInput from "./FormInput";

export default function MetaDataForm() {
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

            {/*<div className="form-floating">*/}
            {/*    <select className="form-select" id="floatingMetaIndex" aria-label="Meta Index">*/}
            {/*        <option selected>Open this select menu</option>*/}
            {/*        <option value="1">One</option>*/}
            {/*        <option value="2">Two</option>*/}
            {/*        <option value="3">Three</option>*/}
            {/*    </select>*/}
            {/*    <label htmlFor="floatingMetaIndex">Meta Index</label>*/}
            {/*</div>*/}
        </React.Fragment>
    )
}
