import React, {useState, useEffect} from "react";
import {CirclePicker} from "react-color";
import CreatableSelect from 'react-select/creatable';
import FormInput from "../FormInput";
import {sizeOptions} from "../../Helpers/DefaultOptions";
import {ADD, NUMBER, REMOVE} from "../../Helpers/Constants";
import {initialProductVariations} from "../../Helpers/InitialStateObjects";

const ProductVariations = ({productVariations, setProductVariations}) => {

    useEffect(() => {
        console.log('PRODUCT VARIATIONS RENDER');
    });


    const _handleInputChange = (event, input) => {
        let arr = _.cloneDeep(productVariations);
        event.target ?
            arr[parseInt(event.target.getAttribute("index"))].[event.target.id] = event.target.type === NUMBER ? parseInt(event.target.value) : event.target.value :
            event.hex ? arr[input].colors = [event.hex] : arr[input.name[1]].[input.name[0]] = event;
        setProductVariations(arr);
    }


    const _handleProductVariationActions = (action, index = null) => {
        let arr = _.cloneDeep(productVariations);
        switch (action) {
            case ADD :
                let addObj = {...initialProductVariations, uuid: Date.now()}
                arr.push(addObj);
                break;
            case REMOVE :
                arr.splice(index, 1)
                break;
        }
        setProductVariations(arr);
    }


    return (
        <div className="row">

            {productVariations.map((variation, index) => (

                <div key={variation.uuid} className="col-md-4 mb-4">

                    <div className="row">
                        <div className="col-6">
                            <label className="my-2">Sizes</label>
                        </div>
                        <div className="col-6">
                            <div className="d-flex justify-content-end">
                                <div className="mx-1 p-2"
                                     onClick={() => index === 0 ? null : _handleProductVariationActions(REMOVE, index)}>
                                    <i className={` fa fa-minus-circle ${index === 0 ? 'text-light' : 'hover-pointer text-warning'} `}/>
                                </div>
                                {index === (productVariations.length - 1) && index <= 1 ? (
                                    <div className="p-2"
                                         onClick={() => _handleProductVariationActions(ADD)}>
                                        <i className="fa fa-plus-circle hover-pointer text-success"/>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    <CreatableSelect
                        isMulti
                        name={["sizes", index]}
                        onChange={_handleInputChange}
                        options={sizeOptions}
                        defaultValue={variation?.length ? variation : null}
                    />

                    <FormInput
                        index={index}
                        id="stock"
                        label="Stock"
                        type={NUMBER}
                        handleChange={_handleInputChange}
                        defaultValue={variation ? variation.stock : null}
                    />


                    <FormInput
                        index={index}
                        id="price"
                        label="Price"
                        type={NUMBER}
                        handleChange={_handleInputChange}
                        defaultValue={variation ? variation.price : null}
                    />

                    <FormInput
                        index={index}
                        id="discountedPrice"
                        label="Discounted Price"
                        type={NUMBER}
                        handleChange={_handleInputChange}
                        defaultValue={variation ? variation.discountedPrice : null}
                    />


                    <label className="mb-3">Colors</label>
                    <CirclePicker
                        width="103%"
                        color={variation ? variation.colors[0] : null}
                        onChangeComplete={(color) => _handleInputChange(color, index)}
                    />
                </div>
            ))}
        </div>

    )
}

export default React.memo(ProductVariations);
