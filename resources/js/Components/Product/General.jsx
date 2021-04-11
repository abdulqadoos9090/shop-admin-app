import React, {useEffect} from 'react';
import FormInput from "../FormInput";
import Select from "react-select";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {badgeOptions, statusOptions} from "../../Helpers/DefaultOptions";
import {_createSelectOptions} from "../../Helpers/CommonFunctions";
import {NUMBER, TEXT, TEXTAREA, CHECKBOX} from "../../Helpers/Constants";

const General = ({categories, general, setGeneral}) => {

    useEffect(() => {
        console.log("GENERAL RENDER");
    });


    const _handleInputChange = (event, input) => {
        let arr = _.cloneDeep(general);
        event.target ?
            arr.[event.target.id] = event.target.type === NUMBER ? parseInt(event.target.value) : event.target.type === CHECKBOX ? Boolean(event.target.value) : event.target.value :
            input.data ? arr.details = input.getData() : arr[input.name] = event;
        setGeneral(arr);
    }

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
                        name="category"
                        isSearchable={true}
                        onChange={_handleInputChange}
                        defaultValue={general.category ? general.category : null}
                        options={_createSelectOptions(categories, "label", "id")}
                    />
                </div>

                <div className="col-4">
                    <label className="my-2">Badges</label>
                    <Select
                        isMulti
                        name="badges"
                        isSearchable={true}
                        options={badgeOptions}
                        onChange={_handleInputChange}
                        defaultValue={general ? general.badges : null}
                    />
                </div>

                <div className="col-4">
                    <label className="my-2">Status</label>
                    <Select
                        name="status"
                        options={statusOptions}
                        onChange={_handleInputChange}
                        defaultValue={general ? general.status : null}
                    />
                </div>


                <div className="col-12 my-4">
                    <CKEditor
                        editor={ClassicEditor}
                        name="details"
                        onChange={_handleInputChange}
                        data={general ? general.details : null}
                    />
                </div>
                {general.reviews}
                <div className="col-12">
                    <div className="form-check form-switch">
                        <input className="form-check-input hover-pointer" onChange={_handleInputChange} type="checkbox"
                               id="reviews" value={general.reviews ? "" : true}
                               defaultChecked={general.reviews ? "true" : ""}
                        />
                        <label className="form-check-label hover-pointer" htmlFor="reviews">Enable Product
                            Reviews</label>
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
};

export default React.memo(General);
