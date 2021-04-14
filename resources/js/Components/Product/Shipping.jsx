import React, {useEffect} from "react";
import FormInput from "../FormInput";
import {NUMBER, TEXT, TEXTAREA} from "../../Helpers/Constants";

const Shipping = ({shipping, setShipping}) => {

    const _handleInputChange = (event) => {
        let key = event.target.id;
        let value = event.target.value;
        setShipping(prevShipping => {
            return {...prevShipping, [key]: value}
        });
    }

    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <FormInput
                        id="weight"
                        label="Weight (kg)"
                        type={NUMBER}
                        handleChange={_handleInputChange}
                        defaultValue={shipping ? shipping.weight : null}
                    />
                </div>
                <div className="col-md-4">
                    <FormInput
                        id="dimensions"
                        label="Dimensions (20 * 30 * 40)"
                        type={TEXT}
                        handleChange={_handleInputChange}
                        defaultValue={shipping ? shipping.dimensions : null}
                    />
                </div>
                <div className="col-md-4">
                    <FormInput
                        id="minimumOrder"
                        label="Minimum Order"
                        type={NUMBER}
                        handleChange={_handleInputChange}
                        defaultValue={shipping ? shipping.minimumOrder : null}
                    />
                </div>
                <div className="col-md-12">
                    <FormInput
                        id="purchaseNote"
                        label="Purchase Note"
                        type={TEXTAREA}
                        handleChange={_handleInputChange}
                        defaultValue={shipping ? shipping.purchaseNote : null}
                    />
                </div>
            </div>
        </>
    )
}

export default React.memo(Shipping);
