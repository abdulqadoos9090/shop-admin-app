import React, {useState} from "react";
import FilesPreview from "../../../Components/FilesPreview";
import FormInputFiles from "../../../Components/FormInputFiles";
import FormInput from "../../../Components/FormInput";
import {CirclePicker} from "react-color";
import CreatableSelect from 'react-select/creatable';
import {sizeOptions} from "../../../Helpers/defaultSelectOptions";

export default function ProductVariations(props) {

    const {imageUrls, files, setFiles} = props;

    const initialProductVariations = [
        {
            files: [null],
            sizes: [null],
            colors: [null],
            stock: null,
            price: null,
            alt_tag: null,
            discount_price: null,
        }
    ];

    const [productVariations, setProductVariations] = useState(initialProductVariations);


    const _handleInputChange = (event, action) => {

        let name, value = null;

        if (event.target) {
            name = event.target.id;
            value = event.target.value;
            console.log("target", {name, value});
        }

        if (event.hex) {
            name = 'colors';
            value = event.hex;
            console.log("hex", {name, value});
        }

        if (event.length) {
            value = event;
            name = action.name;
            console.log("action", {name, value});
        }

        //
        // setProductVariations(prevProductVariations => {
        //
        //         // console.log("prevState",prevProductVariations);
        //         prevProductVariationsn.price = value
        //         // Object.assign would also work
        //         // return {...prevState, ...updatedValues};
        //     }
        // );
        // console.log(productVariations);
    }

    // console.log(productVariations);

    return (
        <div className="row align-items-center">

            <div className="col-md-4">

                <FormInputFiles
                    files={files}
                    setFiles={setFiles}
                />

                <label className="my-2">Sizes</label>
                <CreatableSelect
                    isMulti
                    name="size"
                    onChange={_handleInputChange}
                    options={sizeOptions}
                />

                <FormInput
                    id="stock"
                    label="Stock"
                    type="number"
                    // defaultValue={values ? values.stock : null}
                    handleChange={_handleInputChange}
                />


                <FormInput
                    id="price"
                    label="Price"
                    type="number"
                    // defaultValue={values ? values.price : null}
                    handleChange={_handleInputChange}
                />

                <FormInput
                    id="discounted_price"
                    label="Discounted Price"
                    type="number"
                    handleChange={_handleInputChange}
                    // defaultValue={values ? values.discounted_price : null}
                />

                <label className="mb-3">Colors</label>
                <CirclePicker
                    name="colors"
                    width="105%"
                    onChangeComplete={_handleInputChange}
                />

            </div>


        </div>

    )
}
