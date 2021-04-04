import React, {useEffect, useState,useContext} from 'react';
import FormInput from "../FormInput";
import Select from "react-select";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import {ProductFormContext} from '../../Helpers/Contexts';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {NUMBER, TEXT, TEXTAREA, UPDATE} from "../../Helpers/Constants";
import {_createSelectOptions} from "../../Helpers/CommonFunctions";
import {badgeOptions, statusOptions} from "../../Helpers/DefaultOptions";

const General = ({categories}) => {
    const {productFormState, dispatch} = useContext(ProductFormContext);
    const general = productFormState.general;

    useEffect(() => {
        console.log("GENERAL RENDER");
    });

    const _handleInputChange = (event, input) => {
        let arr = _.cloneDeep(general);
        event.target ?
            arr.[event.target.id] = event.target.type === NUMBER ? parseInt(event.target.value) : event.target.value :
            input.data ? arr.details = input.getData() : arr[input.name] = event;

        dispatch({
            type: UPDATE,
            key: "general",
            data: arr
        });
    }

    // console.log(general);

    return (
        <React.Fragment>

            <FormInput
                id="name"
                label="Name"
                type={TEXT}
                handleChange={_handleInputChange}
                defaultValue={general ? general.name : null}
            />

            <FormInput
                id="description"
                label="Product Description"
                type={TEXTAREA}
                handleChange={_handleInputChange}
                defaultValue={general ? general.description : null}
            />

            <div className="row">
                <div className="col-4">
                    <label className="my-2">Category</label>
                    <Select
                        isSearchable={true}
                        name="category"
                        options={_createSelectOptions(categories, "label", "id")}
                        defaultValue={general ? general.category : null}
                        onChange={_handleInputChange}
                    />
                </div>

                <div className="col-4">
                    <label className="my-2">Badges</label>
                    <Select
                        isMulti
                        name="badges"
                        isSearchable={true}
                        options={badgeOptions}
                        defaultValue={general ? general.badges : null}
                        onChange={_handleInputChange}
                    />
                </div>

                <div className="col-4">
                    <label className="my-2">Status</label>
                    <Select
                        name="status"
                        options={statusOptions}
                        defaultValue={general ? general.status : null}
                        onChange={_handleInputChange}
                    />
                </div>


                <div className="col-12 my-4">
                    <CKEditor
                        editor={ClassicEditor}
                        name="details"
                        data={general ? general.details : null}
                        onChange={_handleInputChange}
                    />
                </div>

                <div className="col-12">
                    <div className="form-check form-switch">
                        <input className="form-check-input hover-pointer" onChange={_handleInputChange} type="checkbox"
                               id="isReviewed" value={general.isReviewed !== "true"}
                               defaultChecked={general.isReviewed === "true"}/>
                        <label className="form-check-label hover-pointer" htmlFor="isReviewed">Enable Product
                            Reviews</label>
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
};

export default React.memo(General);
