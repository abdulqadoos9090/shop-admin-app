import React from 'react';
import FormInput from "../../../Components/FormInput";
import Select from "react-select";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FormInputFiles from "../../../Components/FormInputFiles";
import {reviewOptions, statusOptions} from "../../../Helpers/DefaultOptions";

const _badgeOptions = [
    {label: "New", value: "new"},
    {label: "Sale", value: "sale"}
];

const _defaultBadge = (badges) => {
    let data = [];
    badges.map((badge, index) => {
        data[index] = {value: badge, label: badge}
    })
    return data;
};


const _categoryOptions = categories => {
    let data = [];
    categories.map((category, index) => {
        data[index] = {value: category.id, label: category.label}
    })
    return data;
}


export default function General({files,setFiles,values, product, categories, details, setDetails, handleInputChange}) {
    return (
        <React.Fragment>

            <FormInputFiles
                files={files}
                setFiles={setFiles}
            />

            <FormInput
                id={"name"}
                label={"Name"}
                type={"text"}
                defaultValue={values ? values.name : null}
                handleChange={handleInputChange}
            />
            <FormInput
                id={"description"}
                label={"Product Description"}
                type={"textarea"}
                defaultValue={values ? values.description : null}
                handleChange={handleInputChange}
            />


            <div className="d-flex justify-content-between">
                <div className="w-100">
                    <label className="my-2">Category</label>
                    <Select
                        isSearchable={true}
                        options={_categoryOptions(categories)}
                        defaultValue={product ? {
                            value: product.category.id,
                            label: product.category.label
                        } : null}
                        onChange={(e) => handleInputChange(e, "category_id")}
                    />
                </div>
                <div className="mx-2"/>
                <div className="w-100">
                    <label className="my-2">Badges</label>
                    <Select
                        isMulti
                        isSearchable={true}
                        options={_badgeOptions}
                        defaultValue={product ? _defaultBadge(product.badges.split(',')) : null}
                        onChange={(e) => handleInputChange(e, "badges")}
                    />
                </div>
            </div>

            <div className="d-flex my-2">
                <div className="w-50">
                    <label className="my-2">Status</label>
                    <Select
                        placeholder="Select"
                        options={statusOptions}
                        defaultValue={values ? {value: values.status, label: values.status} : null}
                        onChange={(e) => handleInputChange(e, "status")}
                    />
                </div>
                <div className="mx-2"/>
                <div className="w-50">
                    <label className="my-2">Enable Review</label>
                    <Select
                        placeholder="Select"
                        options={reviewOptions}
                        defaultValue={values ? {value: values.review, label: values.review} : null}
                        onChange={(e) => handleInputChange(e, "review")}
                    />
                </div>
            </div>

            <div className="my-4">
                <CKEditor
                    editor={ClassicEditor}
                    data={details ? details : "<p>Product Details</p>"}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setDetails(data)
                    }}
                />
            </div>

        </React.Fragment>
    )
}
