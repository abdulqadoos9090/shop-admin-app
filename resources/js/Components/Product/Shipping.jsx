import React, {useContext} from 'react';

import FormInput from "../FormInput";
import {ProductFormContext} from '../../Helpers/Contexts';
import {NUMBER, TEXT, UPDATE} from "../../Helpers/Constants";

const Shipping = () => {

    const {productFormState, dispatch} = useContext(ProductFormContext);

    const shipping = productFormState.shipping;

    const _handleInputChange = (event) => {
        dispatch({
            type: UPDATE,
            key: "shipping",
            data: {...productFormState.shipping, [event.target.id]: event.target.value}
        });
    }

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <FormInput
                        id="weight"
                        label="Weight (KG)"
                        type={NUMBER}
                        handleChange={_handleInputChange}
                        defaultValue={shipping ? shipping.weight : null}
                    />
                </div>
                <div className="col-md-6">
                    <FormInput
                        id="dimensions"
                        label="Dimensions (20*10*5)"
                        type={TEXT}
                        handleChange={_handleInputChange}
                        defaultValue={shipping ? shipping.dimensions : null}
                    />
                </div>
            </div>
        </>
    )
}
export default Shipping;
