import React, {useEffect} from "react";
import FormInput from "../FormInput";
import {NUMBER, TEXT} from "../../Helpers/Constants";

const Shipping = ({shipping, setShipping}) => {

    useEffect(() => {
        console.log('SHIPPING RENDER');
    });

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
                <div className="col-md-6">
                    <FormInput
                        id="weight"
                        label="Weight (kg)"
                        type={NUMBER}
                        handleChange={_handleInputChange}
                        // defaultValue={metaData ? metaData.title : null}
                    />
                </div>
                <div className="col-md-6">
                    <FormInput
                        id="dimensions"
                        label="Dimensions (20 * 30 * 40)"
                        type={TEXT}
                        handleChange={_handleInputChange}
                        // defaultValue={metaData ? metaData.title : null}
                    />
                </div>
            </div>


        </>
    )
}

export default React.memo(Shipping);
