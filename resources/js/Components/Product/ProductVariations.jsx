import React from "react";
import CreatableSelect from 'react-select/creatable';
import FormInput from "../FormInput";
import {sizeOptions} from "../../Helpers/DefaultOptions";
import {ADD, NUMBER, REMOVE} from "../../Helpers/Constants";
import {initialProductVariations} from "../../Helpers/InitialStateObjects";
import ColorsModal from "../ColorsModal";

const ProductVariations = ({variations, setVariations}) => {

    const _handleInputChange = (event, input) => {
        let arr = _.cloneDeep(variations);
        event.target ?
            arr[parseInt(event.target.getAttribute("index"))][event.target.id] = event.target.type === NUMBER ? parseInt(event.target.value) : event.target.value :
            arr[input.name[1]][input.name[0]] = event;
        setVariations(arr);
    }

    const _handleColorsChange = (color, action) => {
        let arr = _.cloneDeep(variations);
        switch (action) {
            case ADD:
                arr[0].colors.push(color);
                break;
            case REMOVE:
                arr[0].colors.splice(color, 1);
                break;
        }
        setVariations(arr);
    }


    const _handleProductVariationActions = (action, index = null) => {
        let arr = _.cloneDeep(variations);
        switch (action) {
            case ADD :
                let addObj = {...initialProductVariations, uuid: Date.now()}
                arr.push(addObj);
                break;
            case REMOVE :
                arr.splice(index, 1)
                break;
        }
        setVariations(arr);
    }

    return (
        <div className="row justify-content-center">
            <ColorsModal
                handleInputChange={_handleColorsChange}
            />
            {variations.map((variation, index) => (

                <div key={variation.uuid} className="col-md-10 mb-4">

                    <div className="row">
                        <div className="col-6">
                            <label className="my-2">Sizes</label>
                        </div>
                        <div className="col-6">
                            {/*<div className="d-flex justify-content-end">*/}
                            {/*    <div className="mx-1 p-2"*/}
                            {/*         onClick={() => index === 0 ? null : _handleProductVariationActions(REMOVE, index)}>*/}
                            {/*        <i className={` fa fa-minus-circle ${index === 0 ? 'text-light' : 'hover-pointer text-warning'} `}/>*/}
                            {/*    </div>*/}
                            {/*    {index === (variations.length - 1) && index <= 1 ? (*/}
                            {/*        <div className="p-2"*/}
                            {/*             onClick={() => _handleProductVariationActions(ADD)}>*/}
                            {/*            <i className="fa fa-plus-circle hover-pointer text-success"/>*/}
                            {/*        </div>*/}
                            {/*    ) : null}*/}
                            {/*</div>*/}
                        </div>
                    </div>

                    <CreatableSelect
                        isMulti
                        name={["sizes", index]}
                        onChange={_handleInputChange}
                        options={sizeOptions}
                        defaultValue={variation ? variation.sizes : null}
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

                    <div className="my-4">
                        <p>Colors</p>
                        <div className="row">
                            <div className="col">
                                {variation.colors.map((color, id) => (
                                    <span key={id} className="custom-color hover-pointer" onClick={() => _handleColorsChange(id,REMOVE)} style={{backgroundColor: color}}><i className="fa fa-minus-circle text-light"/></span>
                                ))}
                                <span className="hover-pointer bg-light custom-color" data-bs-toggle="modal"
                                      data-bs-target="#colorModal">
                                    <i className="fa fa-plus-circle text-success"/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default React.memo(ProductVariations);
